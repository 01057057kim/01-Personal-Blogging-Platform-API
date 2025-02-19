const express = require('express');
const router = express.Router();
const path = require('path');
const { addArticle, getArticles } = require('../controllers/controllers');

router.post('/add-article', addArticle);

router.get('/articles', getArticles);

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../public/index.html'));
})

router.get('/add-article', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../public/add.html'));
})

module.exports = router;