# Web Shop Project (Assignment 1)

## Overview

This project is a simple web shop application that follows a modular and organized structure. The application is designed to manage products, categories, customers, orders, shipping providers, and payment processors.

## Folder Structure

```plaintext
/Assignment_1_Frontend
    /public
        - index.html
        - favicon.ico
    /src
        /components
            /Auth
                - Login.js
                - SignUp.js
            /Category
                - CategoryList.js
                - CategoryDetails.js
            /Order
                - OrderList.js
                - OrderDetails.js
            /Payment    
                - BraintreePayment.js
                - PaypalPayment.js
                - StripePayment.js
            /Product
                - ProductList.js
                - ProductDetails.js
            /Shipping
                - ShippingProviderList.js
                - ShippingProviderDetails.js
            /User
                - UserProfile.js
        /services
            - AuthService.js
            - CategoryService.js
            - OrderService.js
            - PaymentService.js
            - ProductService.js
            - ShippingProviderService.js
            - UserService.js
        /utils
            - ApiUtils.js
        /styles
            - main.css
        /views
            - Home.js
            - ContactUs.js
            - Orders.js
            - Product.js
        /App.js
        /index.js
        /config.js
        /routes.js
    - .gitignore
    - package.json
    - README.md
    - .env
 ```

## File Descriptions

### `/public`: 
* This directory contains public assets like `index.html` and `favicon.ico`.

### `/src`:

* This is the main directory for the React application source code.

`/components` :

React components organized by feature or module.

* `/Auth`: Components related to authentication.
* `/Category`: Components related to categories.
* `/Order`: Components related to orders.
* `/Payment`: Components related to payments.
* `/Product`: Components related to products.
* `/Shipping`: Components related to shipping providers.
* `/User`: Components related to user management.


`/services`:

* API service functions that interact with the backend.

 `/utils`:

* Utility functions and helper classes.

`/styles`:

* CSS or SCSS files for styling.

`/views`:

* React components representing different views or pages. 

`/App.js` :
* The main component which wraps all the other component inside it.

`/index.js` :
* The entry point of any React application.

`/routes.js` :
* All the routes are defined in this file


