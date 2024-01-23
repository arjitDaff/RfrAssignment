const IPaymentProcessorInterface = require('../contracts/IPaymentProcessorInterface');

class StripePaymentProcessor extends IPaymentProcessorInterface {

  constructor() {
    super();
    // can be use to initialize stripePaymentprocess instance
  }

  async processPayment(amount) {
    // Logic to process payment using braintree can be writen here
    console.log(`Processing payment of $${amount} using Stripe`);
    // Simulating a successful payment
    return { success: true, transactionId: 'stripe_transaction_id' };
  }
}

module.exports = StripePaymentProcessor;
