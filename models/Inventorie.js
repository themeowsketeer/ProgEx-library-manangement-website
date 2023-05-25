/** Use to keeping track of individual copies of a given book */

const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    bookID: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    },
    outOfCommission: {type: Boolean, default:false}
    
},
{ timestamps: true});


const Inventory = mongoose.model('Inventory',InventorySchema);
module.exports = Inventory;
