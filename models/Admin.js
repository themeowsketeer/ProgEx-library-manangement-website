const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const AdminSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
         unique: true
    },
    password: {
        type: String,
        required: true
    },
    permissions: {
        makeAndModifyAccounts: { type: Boolean, default: false },
        makeAndModifyAdminAccounts: { type: Boolean, default: false },
        addAndEditBooks: { type: Boolean, default: false },
        trackBooks: { type: Boolean, default: false },
        trackBooks: { type: Boolean, default: false },
        removeReviews: { type: Boolean, default: false },
    }
},
{ timestamps: true});

AdminSchema.pre('save', function (next) {
    const admin = this
    bcrypt.hash(admin.password, 10, (error, hash) => {
        admin.password = hash
        next()
    })
})
const Admin = mongoose.model('Admin',AdminSchema);
module.exports = Admin;
