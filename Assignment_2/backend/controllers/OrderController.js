const { PAYMENT_SUCCESSFULL, PAYMENT_FAILED } = require('../constants/ApiResponses');
const { AMOUNT } = require('../constants/AppConstants');
const PaymentProcessorFactory = require('../factories/PaymentProcessorFactory');

// Controller to process payment for the placing order
const checkoutOrder = async (req, res, next) => {
    try {  
        // Initializing payment method using the option selected by user
        const paymentProcessor = PaymentProcessorFactory.createPaymentProcessor(req.body.paymentMethodId);
        const order = fetchOrder(req.params.orderId);
        // Processing the payment using the chosen payment processor
        console.log(order);
        await paymentProcessor.processPayment(order.amount);
        res.status(200).json({
          success: true,
          message: PAYMENT_SUCCESSFULL,
        });
    } catch (error) {
        next(new Error(`${PAYMENT_FAILED}: ${error.message}`))
    }
}

// Fetching order from database otherwise
const fetchOrder = async (orderId) => {
  return {
    id: orderId,
    amount: AMOUNT
  }
}

module.exports = {
  checkoutOrder
}
  
