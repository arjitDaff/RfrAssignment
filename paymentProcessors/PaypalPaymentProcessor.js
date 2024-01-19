const IPaymentProcessorInterface = require('../contracts/IPaymentProcessorInterface');

class PayPalPaymentProcessor extends IPaymentProcessorInterface {

  constructor() {
    super();
    // can be use to initialize paypalPaymentProcess instance
  }

  async processPayment(amount) {
    // Logic to process payment using braintree can be written here
    console.log(`Processing payment of $${amount} using PayPal`);
    return { success: true, transactionId: 'paypal_transaction_id' };
  }
}

module.exports = PayPalPaymentProcessor;
