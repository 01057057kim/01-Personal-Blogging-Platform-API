const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const port = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Blog', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('open', () => {
    console.log('Connected to MongoDB');
})

const articleSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
})

const Article = mongoose.model('Article', articleSchema);

app.post('/add-article', async (req, res) => {
    try{
        const newArticle = new Article(req.body);
        await newArticle.save();
        console.log('Article Added');
    } catch(err) {
        console.log(err);
        res.status(500).json({ success: false, message: "An error occurred. Please try again later." });
    }
})

app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '../index.html'));
})

app.listen(port, () => {
    console.log('Server online');
})