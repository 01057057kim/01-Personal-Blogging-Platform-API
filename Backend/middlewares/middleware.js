const express = require('express')
const path = require('path')
const app = express()

const setupMiddleware = (app) => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.static(path.join(__dirname, '../../Frontend')))
}

module.exports = setupMiddleware