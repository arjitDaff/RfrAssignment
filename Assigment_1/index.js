const {checkoutOrder} = require('./controllers/OrderController');

(async () => {
    const result = await checkoutOrder(3);
    console.log(result.message);
})();