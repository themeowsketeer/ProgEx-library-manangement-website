const Books = require("../../models/Book.js");
const path = require('path')

module.exports = (req,res) => 
{
    req.body.author = req.body.author.split(',');
    req.body.categories = req.body.categories.split(',');
    console.log(req.files)
    if (req.files)
    {
        let { image } = req.files;
        image.mv(path.resolve(__dirname,'..', '..' ,'public/upload', image.name), function (err) 
        {
            Books.findByIdAndUpdate(
                req.params.id, {
                ...req.body,
                coverLink: '/upload/' + image.name
                })
            .then ( (book) => {
                res.redirect("/adminBooksList")
            })
            .catch ( (error) => {
                console.log(error);
            })
        })
    }
    else 
    {
        Books.findByIdAndUpdate(req.params.id, req.body)
        .then ( (book) => {
            res.redirect("/adminBooksList")
        })
        .catch ( (error) => {
            console.log(error);
        })
    }
}
