const _ = require('dotenv/config');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use('/authorization', routes.authorization);
app.use('/users', routes.users);
app.use('/transactions', routes.transactions);

app.listen(process.env.PORT, () => {
    console.log(`Personal Fin Tracker app running on port ${process.env.PORT}`);
});