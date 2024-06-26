import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import OrderForm from './components/OrderForm';
import OrderHistory from './components/OrderHistory';
import CreateCustomerForm from './components/CreateCustomerForm';
import CustomerDetails from './components/CustomerDetails';
import CustomerList from './components/CustomerList';
import UpdateCustomerForm from './components/UpdateCustomerForm';
import CreateProductForm from './components/CreateProductForm';
import UpdateProductForm from './components/UpdateProductForm';
import AdminProductList from './components/AdminProductList';
import ProductStock from './components/ProductStock';
import { Toast, ToastContainer } from 'react-bootstrap';
import './App.css';

function App() {
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [products, setProducts] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    useEffect(() => {
        fetch('/products.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const addToCart = (product, quantity) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity }]);
        }
        setToastMessage(`${product.name} has been added to your cart`);
        setShowToast(true);
    };

    const removeFromCart = (product) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== product.id));
        setToastMessage(`${product.name} has been removed from your cart`);
        setShowToast(true);
    };

    const placeOrder = (order) => {
        setOrders((prevOrders) => [...prevOrders, order]);
        setCart([]);
        setToastMessage(`Order has been placed successfully`);
        setShowToast(true);
    };

    const cancelOrder = (orderId) => {
        setOrders((prevOrders) => prevOrders.map(order => 
            order.id === orderId ? { ...order, status: 'Cancelled' } : order
        ));
        setToastMessage(`Order has been cancelled`);
        setShowToast(true);
    };

    const addCustomer = (customer) => {
        setCustomers((prevCustomers) => [...prevCustomers, customer]);
        setToastMessage(`Customer has been created successfully`);
        setShowToast(true);
    };

    const updateCustomer = (updatedCustomer) => {
        setCustomers((prevCustomers) => prevCustomers.map(customer =>
            customer.id === updatedCustomer.id ? updatedCustomer : customer
        ));
        setToastMessage(`Customer has been updated successfully`);
        setShowToast(true);
    };

    const addProduct = (product) => {
        setProducts((prevProducts) => [...prevProducts, product]);
        setToastMessage(`Product has been created successfully`);
        setShowToast(true);
    };

    const updateProduct = (updatedProduct) => {
        setProducts((prevProducts) => prevProducts.map(product =>
            product.id === updatedProduct.id ? updatedProduct : product
        ));
        setToastMessage(`Product has been updated successfully`);
        setShowToast(true);
    };

    const deleteProduct = (productId) => {
        setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
        setToastMessage(`Product has been deleted successfully`);
        setShowToast(true);
    };

    const updateStockLevel = (productId, newStock) => {
        setProducts((prevProducts) => prevProducts.map(product => 
            product.id === productId ? { ...product, stock: newStock } : product
        ));
        setToastMessage(`Stock level has been updated successfully`);
        setShowToast(true);
    };
    useEffect(() => {
        const lowStockThreshold = 10; 
        products.forEach(product => {
            if ((product.stock || 0) < lowStockThreshold) {
                const newStock = 20; 
                updateStockLevel(product.id, newStock);
            }
        });
    }, [products]);

    return (
        <Router>
            <Header />
            <main className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ProductList addToCart={addToCart} products={products} />} />
                    <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
                    <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
                    <Route path="/order" element={<OrderForm cart={cart} placeOrder={placeOrder} />} />
                    <Route path="/order-history" element={<OrderHistory orders={orders} cancelOrder={cancelOrder} />} />
                    <Route path="/create-customer" element={<CreateCustomerForm addCustomer={addCustomer} />} />
                    <Route path="/customer/:id" element={<CustomerDetails customers={customers} />} />
                    <Route path="/customers" element={<CustomerList customers={customers} />} />
                    <Route path="/update-customer/:id" element={<UpdateCustomerForm customers={customers} updateCustomer={updateCustomer} />} />
                    <Route path="/create-product" element={<CreateProductForm addProduct={addProduct} />} />
                    <Route path="/update-product/:id" element={<UpdateProductForm products={products} updateProduct={updateProduct} />} />
                    <Route path="/admin-products" element={<AdminProductList products={products} deleteProduct={deleteProduct} />} />
                    <Route path="/product-stock" element={<ProductStock products={products} updateStockLevel={updateStockLevel} />} />
                </Routes>
            </main>
            <Footer />
            <ToastContainer position="top-end" className="p-3">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Notification</strong>
                    </Toast.Header>
                    <Toast.Body>{toastMessage}</Toast.Body>
                </Toast>
            </ToastContainer>
        </Router>
    );
}

export default App;