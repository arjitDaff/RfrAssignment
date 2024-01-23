import axios from 'axios';

class PaymentService {
    async processPayment(orderId, paymentMethodId)  {
        try {
          const response = await axios.post(`http://localhost:4000/api/order/checkout/${orderId}`, {
            paymentMethodId,
          }, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          return response.data;
        } catch (error) {
          throw new Error('Request failed');
        }
      }
  }
  
  export default PaymentService;
  