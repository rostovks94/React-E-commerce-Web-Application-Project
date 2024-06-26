import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminProductList = ({ products, deleteProduct }) => {
    return (
        <Container>
            <h1>Admin Product List</h1>
            <Row>
                {products.length > 0 ? products.map(product => (
                    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src={product.image} className="product-image" />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>${product.price}</Card.Text>
                                <Button as={Link} to={`/update-product/${product.id}`} variant="warning" className="mr-2">
                                    Edit
                                </Button>
                                <Button variant="danger" onClick={() => deleteProduct(product.id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )) : <p>No products available</p>}
            </Row>
        </Container>
    );
};

export default AdminProductList;