const express = require('express');
const orderController = require('./../controllers/OrderController');
const router = express.Router();

const validateCheckoutParams = (req, res, next) => {
    const orderId = req.params.orderId;
    const paymentMethodId = req.body.paymentMethodId;
    const validPaymentMethods = [1, 2, 3];

    if (isNaN(orderId)) {
       return res.status(400).json({ error: 'Invalid orderId, Must be a numeric value' });
    }

    if (!validPaymentMethods.includes(paymentMethodId)) {
       return res.status(400).json({ error: 'paymentMethodId can only take values: [1, 2, 3]' });
    }
  
    next();
  };

router
  .route('/checkout/:orderId')
  .post(validateCheckoutParams, orderController.checkoutOrder);

module.exports = router;
