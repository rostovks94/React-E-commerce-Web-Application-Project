import React, { useState, useEffect } from 'react';
import { Container, Image, Button, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'; 

const ProductDetail = ({ addToCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {я
        fetch('/products.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const foundProduct = data.find(p => p.id === parseInt(id));
                setProduct(foundProduct);
            })
            .catch(error => console.error('Error fetching product:', error));
    }, [id]);

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <Container>
            <h1>{product.name}</h1>
            <Image src={product.image} fluid className="product-image" />
            <ListGroup className="mt-3">
                <ListGroup.Item><strong>Price:</strong> ${product.price}</ListGroup.Item>
                <ListGroup.Item><strong>Description:</strong> {product.description}</ListGroup.Item>
            </ListGroup>
            <Button variant="success" className="mt-3" onClick={() => addToCart(product)}>Add to Cart</Button>
        </Container>
    );
};

export default ProductDetail;