const moggose = require('mongoose');

const connectDB = async () => {
    try {
        await moggose.connect('mongodb://localhost:27017/Blog', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Connected to MongoDB');
    } catch(err) {
        console.log(err);
    }
}

module.exports = connectDB