const mongoose = require('mongoose');
// import './Review';
// import bookCatergories from '../data/BookCategories';
const _functions = require('./_functions')
const cutomMGValidator = _functions.cutomMGValidator;


const BookSchema = new mongoose.Schema({
    title: { type: String, required: true, alias: 'name' },
    internationalNumber: { type: Number, required: false }, //IBSN for books and ISSN for mangazines
    author: [{ type: String, required: true }],
    categories: [{
        type: String,
        lowercase: true,
        // validate: {
        //     validator: async function (v) {
        //         let a = await cutomMGValidator(v, 'bookCategories');
        //         // console.log(a);
        //         return a
        //     },
        //     message: '\"{VALUE}\" is not acceptable, please check in ../data/BookCategories.js or yell at son'
        // }
    }],
    synopsis: String,
    copiesAvailable: { type: Number, min: [0, 'Availables copies cannot be negative ({VALUE})!'] },
    coverLink: { type: String },
    PDFPreviewLink: String,
    pagePerviewLink: [{ page: Number, link: String }],

    totalRating: {
        recommended: { type: Number, default: 0 },
        notRecommended: { type: Number, default: 0 }
    },
    language: {
        type: String,
        uppercase: true,
        // validate: {
        // validator: (v) => { cutomMGValidator(v,'langCode') },
        // message: '{VALUE} is not acceptable, please check in or yell at son'
        // }
    },
    publisher: {
        type: String,
        // validate: {
        // validator: (v) => { cutomMGValidator(v,'publisher') },
        // message: '{VALUE} is not acceptable, please check in or yell at son'
        // }
    },
    publishedAt: {
        type: Number,
    },
    reviewPreview: [{ // NOTE: might not be needed afterall
        // review: {type: mongoose.Schema.Types.ObjectId, ref: 'Review'},
        // user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        // rating: {
        //     type: String,
        //     default: '',
        //     enum: ['Recommended', 'Not Recommended','','._.']
        // },
        // title: String,
        // body: String,
        // dayCreated: Date,
        // dayModified: Date,
        type: String,
        // type: ReviewSchema,
        // default: {}
    }]

},
    { timestamps: true });

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;
