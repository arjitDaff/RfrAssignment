import React, { useState } from 'react';
import PaymentService from '../../services/PaymentService';
import './Payment.css';
import {PAYMENT_SERVICES} from '../../constants/AppConstants';

const CheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState(1);
  const [loading, setLoading] = useState(false);
  const [paymentResult, setPaymentResult] = useState(null);

  const handlePayment = async () => {
    let result;
    setLoading(true);
    try {
      const paymentService = new PaymentService();
      result = await paymentService.processPayment(1, paymentMethod); // Hardcoding the order Id
      setPaymentResult({ success: true, message: result.message });

    } catch (error) {
      setPaymentResult({ success: false, message: error.message });
    } finally {
      setLoading(false); 
    }
  };

  const handleSelection = (value) => {
    setPaymentMethod(Number(value));
  }

  return (
    <div className="container">
      <label>
        <span>Select Payment Method:</span>
        <select onChange={(e) => handleSelection(e.target.value)}>
          {PAYMENT_SERVICES.map(service => {
            return (
              <option value={service.key}>{service.name}</option>
            )
          })}
        </select>
      </label>

      <button onClick={handlePayment}>Process Payment</button>
      {loading && <div className="loader">Loading...</div>}

      {paymentResult && (
       <div className={paymentResult.success ? 'success-message' : 'error-message'}>
         {paymentResult.message}
       </div>
     )}
    </div>
  );
};

export default CheckoutForm;
