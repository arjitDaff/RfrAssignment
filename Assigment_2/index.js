const { PAYMENT_METHOD } = require('./constants/AppConstants');
const {checkoutOrder} = require('./controllers/OrderController');

// Calling checkout order function to test the functionality
(async () => {
    const result = await checkoutOrder(PAYMENT_METHOD);
    console.log(result.message);
})();