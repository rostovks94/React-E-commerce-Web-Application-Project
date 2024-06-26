import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <Container className="home-container">
            <div className="home-content">
                <h1>Welcome to Smart Shopping!</h1>
                <p>Explore our wide range of products and enjoy the convenience of online shopping.</p>
            </div>
        </Container>
    );
};

export default Home;