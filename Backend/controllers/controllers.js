const Article = require('../models/article');

const addArticle = async (req, res) => {
    try{
        const newArticle = new Article(req.body);
        await newArticle.save();
        console.log('Article Added');
    } catch(err) {
        console.log(err);
        res.status(500).json({ success: false, message: "An error occurred." });
    }
}

const getArticles = async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch(err) {
        console.log(err);
        res.status(500).json({ success: false, message: "An error occurred." });
    }
}

module.exports = { addArticle, getArticles }