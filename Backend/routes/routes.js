const express = require('express');
const router = express.Router();
const path = require('path');
const { addArticle, getArticles, deleteArticle, updateArticle } = require('../controllers/controllers');

router.post('/add-article', addArticle);

router.get('/articles', getArticles);

router.delete('/delete-article', deleteArticle);

router.put('/update-article', updateArticle);

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../Frontend/index.html'));
})

router.get('/add-article', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../Frontend/add.html'));
})

module.exports = router;