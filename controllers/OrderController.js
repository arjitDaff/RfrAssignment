const { PAYMENT_SUCCESSFULL, PAYMENT_FAILED } = require('../constants/ApiResponses');
const { AMOUNT } = require('../constants/AppConstants');
const PaymentProcessorFactory = require('../factories/PaymentProcessorFactory');

// Controller to process payment for the placing order
const checkoutOrder = async (paymentMethodId) => {
    try {  
        // Initializing payment method using the option selected by user
        const paymentProcessor = PaymentProcessorFactory.createPaymentProcessor(paymentMethodId);
        // Processing the payment using the chosen payment processor
        await paymentProcessor.processPayment(AMOUNT);
        
        return {
          success: true,
          message: PAYMENT_SUCCESSFULL,
        };

    } catch (error) {
      console.log(error);
        return {
        success: false,
        message: PAYMENT_FAILED,
        error: error.message,
        };
    }
}

module.exports = {
  checkoutOrder
}
  
