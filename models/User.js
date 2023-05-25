const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    iconLink: {
        type: String,
        default: "/playground_assets/image5884-bghq-200h.png" /*link to defaut profile picture here*/
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
    // dateCreated: {
    //     type: Date,
    // },
    // dateLastActive: {
    //     type: Date,
    //     //required: true
    // },
    userInfo: {
        LName: String,
        FName: String,
        age: {
            type: Number,
            min: [0, 'Age cannot be negative, got {VALUE}!']
        },
        userDescription: String
    },
    booksBorrowing: [{
        bookName: {
            type: String,
            required: true
        },
        bookID: {
            type: String,
            required: true
        },
        borrowID: {
            type: String,
            required: true
        },
        dueDate: {
            type: Date,
            required: true
        }
    }]
},
{ timestamps: true});

// UserSchema.pre('save', function (next) {
//     const user = this
//     bcrypt.hash(user.password, 10, (error, hash) => {
//         user.password = hash
//         next()
//     })
// })

UserSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        const hashed = await bcrypt.hash(this.password, 10);
        this.password = hashed;
    } catch (err) {
        return next(err);
    }
});


UserSchema.pre('findOneAndUpdate', async function (next) {
    console.log('running midleware for findOneAndUdate')
    try {
        if (this._update.password) {
            const hashed = await bcrypt.hash(this._update.password, 10)
            this._update.password = hashed;
        }
        next();
    } catch (err) {
        return next(err);
    }
});

const User = mongoose.model('User',UserSchema);
module.exports = User;
