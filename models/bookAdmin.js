const Mongo = require('mongoose')
const Schema = Mongo.Schema;
const bookAdminSchema = new Schema ({
    Title: String,
    Author: String,
    Category: String,
    publishedDate: String,
    Quantity: Number,
    Recommendation: 
    {
        type: Number,
        default: 0
    }
},
{ 
    timestamps: true
});

const BooksAdmin = Mongo.model('BooksAdmin',bookAdminSchema);
module.exports = BooksAdmin