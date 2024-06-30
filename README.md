# Smart Shopping E-commerce Application Project

## Overview

Smart Shopping E-commerce Application Project is a web application designed to provide users with an efficient and user-friendly online shopping experience. The application allows users to browse products, view detailed product information, add products to their cart, and manage their orders. This project was built with the aim of delivering a seamless and interactive shopping platform for both customers and administrators.

This project was completed as part of a bootcamp training program, demonstrating the practical application of skills learned in web development, including front-end and back-end technologies.

## Feauters 

**Product Browsing:**
- View a list of available products.
- Detailed product information, including images, prices, and descriptions.
- Search and filter products by name, category, or price.
  
**Shopping Cart:**
- Add products to the cart with a selected quantity.
- View and manage items in the cart.
- Update quantities or remove items from the cart.
- 
**Order Management:**
- Place orders with a summary of items, total price, and order details.
- View order history with detailed order information.
- Cancel orders if needed.
- 
**Customer Management:**
- Create new customer profiles with name, email, and phone number.
- Update existing customer information.
- View a list of all customers and access their details.
  
**Admin Features:**
- Add new products to the inventory.
- Update existing product information, including stock levels.
- Delete products from the inventory.
- Automated stock management for low inventory alerts and updates.
  
**Responsive Design:**
- Fully responsive layout compatible with various devices and screen sizes.
- User-friendly interface designed with React-Bootstrap.
  
**Notifications:**
- Toast notifications for actions such as adding items to the cart, placing orders, and updating information.
  
**Local Storage:**
- Save and retrieve cart items, customer details, orders, and product information using local storage for persistent data.
  
**Order Form:**
- Capture customer details such as name, email, address, and phone number for order placement.
- Validate form inputs for accurate order processing.
  
**Modals:**
- Confirmation modals for actions like creating a customer or updating product stock.

## Technologies Used

**React:** For building the user interface.
**React-Bootstrap:** For responsive design and pre-built components.
**JavaScript:** For implementing functionality and interactivity.
**HTML:** For structuring the web pages.
**CSS:** For styling the web pages.

## Project Goals

The primary goal of this project was to create a comprehensive e-commerce platform. Key features include:

- Browsing products with detailed information.
- Adding products to the shopping cart with quantity selection.
- Managing orders and viewing order history.
- Creating and updating customer information.
- Admin features for creating, updating, and deleting products.
- Automated stock management for products. Running the Project Locally


## Running the Project Locally:

To run this project locally, follow these steps:

**Clone the Repository:**

https://github.com/rostovks94/React-E-commerce-Web-Application-Project.git

**Navigate to the Project Directory:**

cd smart-shopping

**Install Dependencies:**

npm install

**Start the Development Server:**

npm start

**Open the Application:**

Navigate to http://localhost:3000 in your web browser.

**Using a Local Web Server (optional but recommended):**

If you encounter any CORS issues or need a more stable local environment, you can use a local web server.

**For Python 3.x:**

python -m http.server 8000 
Then, navigate to http://localhost:8000 in your web browser. 

## Project Structure

The project consists of the following main components:

smart-shopping/
├── public/
│   ├── favicon.ico
│   ├── images/
│   │   ├── image1.jpg
│   │   ├── image2.jpg
│   │   ├── image3.jpg
│   │   ├── image4.jpg
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── products.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── AdminProductList.jsx
│   │   ├── Cart.jsx
│   │   ├── ConfirmModal.jsx
│   │   ├── CreateCustomerForm.jsx
│   │   ├── CreateProductForm.jsx
│   │   ├── CustomerDetails.jsx
│   │   ├── CustomerForm.jsx
│   │   ├── CustomerList.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── OrderForm.jsx
│   │   ├── OrderHistory.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductStock.jsx
│   │   ├── UpdateCustomerForm.jsx
│   │   └── UpdateProductForm.jsx
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package.json
└── README.md

## Conclusion

This project demonstrates the use of React, React-Bootstrap, JavaScript, HTML, and CSS to create a functional and interactive e-commerce application. The project can be easily extended to include more advanced features such as user authentication, payment processing, and enhanced product management functionalities.

Feel free to reach out if you have any questions or suggestions.
