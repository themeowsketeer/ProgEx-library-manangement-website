const Books = require("../../models/Book.js");
const path = require('path');

module.exports = (req,res) => 
{
    req.body.author = req.body.author.split(',');
    req.body.categories = req.body.categories.split(',');
    let { coverLink } = req.files;
    coverLink.mv(path.resolve(__dirname,'..', '..' ,'public/upload', coverLink.name), function (err) 
    {
        Books.create({
            ...req.body,
            coverLink: '/upload/' + coverLink.name
        })
        .then ( (book) => {
            console.log(book);
            res.redirect("/adminBooksList")
        })
        .catch ( (error) => {
            console.log(error);
        })
    })
}
