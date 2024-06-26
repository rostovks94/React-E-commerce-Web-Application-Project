import React from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, removeFromCart }) => {
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/order');
    };

    return (
        <Container>
            <h1>Shopping Cart</h1>
            <ListGroup>
                {cart.length > 0 ? cart.map((product, index) => (
                    <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                        <div>
                            {product.name} - ${product.price}
                        </div>
                        <Button variant="danger" onClick={() => removeFromCart(product)}>Delete from Cart</Button>
                    </ListGroup.Item>
                )) : <p>Your cart is empty</p>}
            </ListGroup>
            {cart.length > 0 && (
                <Button variant="primary" className="mt-3" onClick={handleCheckout}>Proceed to Checkout</Button>
            )}
        </Container>
    );
};

export default Cart;