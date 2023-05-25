const Mongo = require('mongoose')
const Schema = Mongo.Schema;
const userAdminSchema = new Schema ({
    fullName: String,
    userName: String,
    Age: Number,
    Email: String,
    borrowedBook:
    {
        type: Number,
        default: 0
    }
},
{ 
    timestamps: true
});

const UsersAdmin = Mongo.model('UsersAdmin',userAdminSchema);
module.exports = UsersAdmin