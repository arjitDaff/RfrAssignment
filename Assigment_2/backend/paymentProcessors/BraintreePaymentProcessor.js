const IPaymentProcessorInterface = require('../contracts/IPaymentProcessorInterface');

class BraintreePaymentProcessor extends IPaymentProcessorInterface {
  constructor() {
    super();
    // can be use to initialize paypalPaymentProcess instance
  }

  async processPayment(amount) {
    // Logic to process payment using braintree can be writen here
    console.log(`Processing payment of $${amount} using Braintree`);
    return { success: true, transactionId: 'braintree_transaction_id' };
  }
}

module.exports = BraintreePaymentProcessor;
