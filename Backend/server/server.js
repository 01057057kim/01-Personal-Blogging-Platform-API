const express = require('express');
const path = require('path');
const setupMiddleware = require('../middlewares/middleware');
const routes = require('../routes/routes');
const dataBase = require('../db/database');

const port = 3000;
const app = express();

setupMiddleware(app);

dataBase();

app.use('/', routes);

app.listen(port, () => {
    console.log('Server online');
})

