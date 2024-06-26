import React from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';

const OrderHistory = ({ orders, cancelOrder }) => {
    const calculateOrderTotal = (order) => {
        const shippingHandling = 5.99; 
        const totalBeforeTax = order.cart.reduce((total, item) => total + item.price, 0);
        const estimatedTax = totalBeforeTax * 0.1; 
        const orderTotal = totalBeforeTax + estimatedTax + shippingHandling;
        return {
            shippingHandling,
            totalBeforeTax,
            estimatedTax,
            orderTotal
        };
    };

    return (
        <Container>
            <h1>Order History</h1>
            <ListGroup>
                {orders.length > 0 ? orders.map(order => {
                    const { shippingHandling, totalBeforeTax, estimatedTax, orderTotal } = calculateOrderTotal(order);
                    return (
                        <ListGroup.Item key={order.id}>
                            <div><strong>Order ID:</strong> {order.id}</div>
                            <div><strong>Name:</strong> {order.name}</div>
                            <div><strong>Email:</strong> {order.email}</div>
                            <div><strong>Address:</strong> {order.address}</div>
                            <div><strong>Phone:</strong> {order.phone}</div>
                            <div><strong>Status:</strong> {order.status}</div>
                            <div><strong>Date:</strong> {order.date}</div>
                            <div><strong>Items:</strong></div>
                            <ul>
                                {order.cart.map((item, index) => (
                                    <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
                                ))}
                            </ul>
                            <div><strong>Shipping & Handling:</strong> ${shippingHandling.toFixed(2)}</div>
                            <div><strong>Total Before Tax:</strong> ${totalBeforeTax.toFixed(2)}</div>
                            <div><strong>Estimated Tax Collected:</strong> ${estimatedTax.toFixed(2)}</div>
                            <div><strong>Order Total:</strong> ${orderTotal.toFixed(2)}</div>
                            {order.status !== 'Cancelled' && (
                                <Button variant="danger" onClick={() => cancelOrder(order.id)}>Cancel Order</Button>
                            )}
                        </ListGroup.Item>
                    );
                }) : <p>No orders have been placed yet.</p>}
            </ListGroup>
        </Container>
    );
};

export default OrderHistory;