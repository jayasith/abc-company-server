const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));
app.use('/api/public/uploads', express.static(path.join(__dirname, '/api/public/uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.CONNECTION_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`connected to mongodb and started listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err.message);
  });

app.use('/user', require('./routes/user.route'));
app.use('/admin', require('./routes/admin.route'));

app.get('/', (req, res) => {
  res.send('<h3>ABC COMPANY API</h3>');
});
