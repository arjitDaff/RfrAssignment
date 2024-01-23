# Web Shop Project (Assignment 1)

## Overview

This project is a simple web shop application that follows a modular and organized structure. The application is designed to manage products, categories, customers, orders, shipping providers, and payment processors.

## Folder Structure

```plaintext
/Assignment_1
    /constants
        - ApiResponses.js
        - AppConstants.js
    /contracts
        - IPaymentProcessorInterface.js
    /controllers
    - AuthController.js
    - CategoryController.js
    - OrderController.js
    - ShippingProviderController.js
    - UserController.js
    /data
        /models
        - Category.js
        - Order.js
        - Product.js
        - OrderModel.js
        - ShippingProvider.js
        - User.js
        /repositories
        - CategoryRepository.js
        - OrderRepository.js
        - ProductRepository.js
        - UserRepository.js
        - ShippingProviderRepository.js
    /db
        - connectDB.js
    /factories
        - PaymentProcessorFactory
    /middleware
        - Auth.js
        - Validate.js
    /paymentProcessors
        - BraintreePaymentProcessor.js
        - PaypalPaymentProcessor.js
        - StripePaymentProcessor.js
    /routes
        - CategoryRoutes.js
        - OrderRoutes.js
        - ProductRoutes.js
        - orderRoutes.js
        - ShippingProviderRoutes.js
        - UserRoutes.js
    /services
        - CategoryService.js
        - OrderService.js
        - ProductService.js
        - OrderService.js
        - ShippingProviderService.js
        - UserService.js
    /test
        /mock
        /unit
    /utils
        - ErrorHandler.js
        - Helpers.js
        - Logger
    - index.js
    - package.json
    - README.md
    - .gitIgnore
    - .env
 ```

## File Descriptions

### ```/constants```: 
* This contains Application wide constants.

### ```/contracts```:
* This contains all the types of the application.

#### ````IPaymentProcessorInterface.js````: 
* Interface for payment processors.

### ```/controllers```:
* This contains all the controllers.

### ```/data/models```:

* Data models for different entities.

### ```/data/repositories```:

* Contains each file corresponding to the data model.

### ```/db```:

#### ```connectDB.js```: 

* Used to setup database connection. 

### ```/factories```:
All the factory classes resides in this directory.

#### ```PaymentProcessorFactory```: 

* Creates instances of payment processors, Using factory desing pattern.

### ```/middleware```:
* This directory contains files that has functions which processes the incoming http request. 

#### ```Auth.js```: 
* Authentication middleware. Performs check whether the request is form authentication user or not. 

#### ```Validate.js```: 
* Input validation middleware. Validates the route, query, body parameters of the incoming request. 

### ```/paymentProcessors```:
* Includes different payment service providers. Specific payment processing logic (e.g., ```Braintree```, ```Paypal```, ```Stripe```).

### ```/routes```:
Application routes are defined here.

### ```/services```:
* Business logic encapsulation.

### ```/test```:
* Unit Test logic is written inside this directory.

#### ```/mock```: 
Contain the function logic. Follow the same directory structure as of the folder.

#### ```/unit```
Inlcudes all the test files of the project. Also follows the same directory structure.

### ```/utils```:
* This contains utilities that are used every where in the application.

#### ```ErrorHandler.js```: 
* Centralized error handling.

#### ```Helpers.js```: 
* This contains helper function that can be useful in most of the function, like changing object keys from ```camelCase``` to ```snake_case``` etc.

#### ```Logger.js```: 
* Logger function used application wide, to log errors and information.

### ```./index.js```
This file is the starting point of the application. It initializes of the components that are used in the application like :

* Starts the server where application listens to the http requests
* Initializes database instance
* Initalizes redis instance

### ```./env```
This file contains the environment variables like: 
* DB connection string
* Api keys

### ```.gitIgnore```
This file contains configuration for excluding specific files and directories from version control in Git, helping manage project-specific files and preventing unnecessary changes.

### ```package.json```
This is configuration file in JSON format that holds metadata, scripts, and dependencies information for a Node.js project.


## Design Patterns

This application follows the below two design patterns:

### ```Separation of Concerns (SoC)```:
The application follows a clear separation of concerns. Each major component (controllers, services, repositories, models, etc.) is placed in a dedicated directory, indicating a modular and organized design.

### ```Repository Pattern```:

The application uses the Repository Pattern for handling data access. The ```/data/repositories``` directory contains repository implementations, separating data access logic from the rest of the application.
