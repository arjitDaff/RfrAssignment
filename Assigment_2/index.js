const {checkoutOrder} = require('./controllers/OrderController');

// Calling checkout order function to test the functionality
(async () => {
    const result = await checkoutOrder(3);
    console.log(result.message);
})();