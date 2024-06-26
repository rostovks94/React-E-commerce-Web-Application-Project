import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Smart Shopping</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/products">
                                <Nav.Link>Products</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/cart">
                                <Nav.Link>Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/order-history">
                                <Nav.Link>Orders</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/create-customer">
                                <Nav.Link>Create Customer</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/customers">
                                <Nav.Link>Customer List</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/create-product">
                                <Nav.Link>Create Product</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/admin-products">
                                <Nav.Link>Manage Products</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/product-stock">
                                <Nav.Link>Product Stock</Nav.Link>
                            </LinkContainer> 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;