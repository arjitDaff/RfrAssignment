const { PAYMENT_METHOD } = require('./constants/AppConstants');
const {checkoutOrder} = require('./controllers/OrderController');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config({ path: './env' });
const orderRouter = require('./routes/OrderRoutes');

app.use(express.json());
app.use(cors())
app.use('/api/order/', orderRouter);

// Global Error handler
app.use((err, req, res, next) => {
    res.status(500).json({
      error: err,
      message: err.message
    })
  });

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });


process.on('unhandledRejection', err => {
console.log('UNHANDLED REJECTION! 💥 ');
console.log(err.name, err.message);
});