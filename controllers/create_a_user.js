const mongoose = require('mongoose');
const path = require('path');
const Admin = require("../models/Admin.js");

mongoose.connect('mongodb://0.0.0.0:27017/web', {useNewUrlParser: true}) 

Admin.findById('64586542cc58326c4ef4ab83').then((user) => {console.log(user)})
