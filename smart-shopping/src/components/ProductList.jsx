import React, { useState } from 'react';
import { Container, Card, Button, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = ({ addToCart, products }) => {
    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (id, value) => {
        setQuantities({
            ...quantities,
            [id]: value,
        });
    };

    const handleAddToCart = (product) => {
        const quantity = quantities[product.id] || 1;
        addToCart(product, quantity);
    };

    return (
        <Container>
            <h1>Product List</h1>
            <Row>
                {products.length > 0 ? products.map(product => (
                    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src={product.image} className="product-image" />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>${product.price}</Card.Text>
                                <Form.Control
                                    type="number"
                                    min="1"
                                    value={quantities[product.id] || 1}
                                    onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                                    className="mb-2"
                                />
                                <Button as={Link} to={`/product/${product.id}`} variant="primary" className="mr-2">
                                    View Details
                                </Button>
                                <Button variant="success" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )) : <p>No products available</p>}
            </Row>
        </Container>
    );
};

export default ProductList;