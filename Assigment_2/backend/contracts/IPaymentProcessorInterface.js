class IPaymentProcessorInterface {
    async processPayment(amount) {
      throw new Error('processPayment method must be implemented by the subclass');
    }
  }
  
  module.exports = IPaymentProcessorInterface;
  