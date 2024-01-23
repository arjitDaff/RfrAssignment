const StripePaymentProcessor = require('../paymentProcessors/StripePaymentProcessor');
const BraintreePaymentProcessor = require('../paymentProcessors/BraintreePaymentProcessor');
const PayPalPaymentProcessor = require('../paymentProcessors/PaypalPaymentProcessor');

// PaymentProcessorFactory class
class PaymentProcessorFactory {
  // Factory method to create an instance of the payment processor based on the chosen method
  static createPaymentProcessor(paymentMethodId) {
    const paymentMethod = PaymentProcessorFactory.getPaymentMethod(paymentMethodId);
    switch (paymentMethod) {
      case 'stripe':
        return new StripePaymentProcessor();
      case 'braintree':
        return new BraintreePaymentProcessor();
      case 'paypal':
        return new PayPalPaymentProcessor();
      default:
        throw new Error('Invalid payment method');
    }
  }

  static getPaymentMethod(paymentMethodId) {
    switch (paymentMethodId) {
      case 1:
        return 'stripe';
      case 2:
        return 'braintree';
      case 3:
        return 'paypal';
      default:
        return null;
    }
  }
}

module.exports = PaymentProcessorFactory;
