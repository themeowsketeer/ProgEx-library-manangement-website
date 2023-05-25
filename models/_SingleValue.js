/** Use to keeping track of values for input Validation purposes
 * (like catergories, author names, etc)
*/

const mongoose = require('mongoose');

const SingleValueSchema = new mongoose.Schema({
    ofType: {
        type: String
    },
    removed: {type: Boolean, default:false},
    value: {
        type: String,
        required: 'Must have a value'
    }
    
},
{ /*timestamps: true*/});

SingleValueSchema.index({ofType:1,value:1},{unique: true});

const SingleValue = mongoose.model('SingleValue',SingleValueSchema);
module.exports = SingleValue;