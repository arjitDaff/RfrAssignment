import axios from 'axios';
import { BASE_API_URL } from '../constants/AppConstants';

class PaymentService {
    async processPayment(orderId, paymentMethodId)  {
        try {
          const response = await axios.post(`${BASE_API_URL}/order/checkout/${orderId}`, {
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
  