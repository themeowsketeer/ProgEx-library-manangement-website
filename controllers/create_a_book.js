const mongoose = require('mongoose');
const Book = require("../models/Book.js");

mongoose.connect('mongodb://0.0.0.0:27017/web', {useNewUrlParser: true})

const result = Promise.all([Book.find({})]).then(([book]) => {
    const chartData = [];
    for (var i = 0; i < book.length; i++)
    {
        chartData[i] = {name: book[i].name, copies: book[i].copiesAvailable}
    }
    return chartData;
} )
const test = () => {
    result.then((a) => {
      console.log(a);
    });
  };
test()