const Article = require('../models/article');

const addArticle = async (req, res) => {
    try{
        const newArticle = new Article(req.body);
        await newArticle.save();
        console.log('Article Added');
    } catch(err) {
        console.log(err);
    }
}

const getArticles = async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch(err) {
        console.log(err);
    }
}

const deleteArticle = async (req, res) => {
    try {
        await Article.findByIdAndDelete(req.body.id);
        console.log('Article Deleted');
    } catch(err){
        console.log(err);
    }
}

const updateArticle = async (req, res) => {
    try{
        const { id, title, content, author } = req.body;
        await Article.findByIdAndUpdate(id, { title, content, author });
        console.log('Article Updated');
    }catch(err){
        console.log(err);
    }
}



module.exports = { addArticle, getArticles, deleteArticle, updateArticle }