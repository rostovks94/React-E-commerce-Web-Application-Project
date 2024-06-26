import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ListGroup, Button } from 'react-bootstrap';

const CustomerList = ({ customers }) => {
    return (
        <Container>
            <h1>Customer List</h1>
            <ListGroup>
                {customers.map(customer => (
                    <ListGroup.Item key={customer.id}>
                        <Link to={`/customer/${customer.id}`}>
                            {customer.name}
                        </Link>
                        <Link to={`/update-customer/${customer.id}`}>
                            <Button variant="warning" className="ml-3">Edit</Button>
                        </Link>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default CustomerList;