# Web Shop Project (Assingment 2)

## Overview

Aim of this project is to create a payment mechanism that would allow different payment service to be used in the application. 

## Execute
To execute the application run the following script
```npm run dev```

To observe the different behaviour of the application i.e. to use different payment service than the default one i.e. ```Stripe```, Change the value of the constant ```PAYMENT_METHOD``` in ```./Assignment_2/constants/AppConstants.js```  file.
PAYMENT_METHOD takes on three valid values.
* ```1``` for ```Stripe```
* ```2``` for ```BrainTree```
* ```3``` for ```Paypal```

## Design Patterns
### ```Factory Pattern```:

The application uses the Factory Design Pattern to use the selected payment service as per the choice.