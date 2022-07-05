const express = require('express');
const app = express();

const connectDatabase = require('./database/connection');

connectDatabase();

app.get('/', (req, res) => {
    return res.send({ msg: "ok" });
});

module.exports = app;