const mongoose = require('mongoose');
const User = require('./models/User');
const Admin = require('./models/Admin');
const Book = require('./models/Book');
const Review = require('./models/Review');
const WishList = require('./models/WishList');
const BorrowedBook = require('./models/BorrowRecord');
const SingleValue = require('./models/_SingleValue');
const bookCategories = require('./data/BookCategories')
// import { bookCategories } from './data/BookCategories.js';

async function importCategoriesSV (){
    // let aa = await SingleValue.find({},'_id').exec();

    // let hasNoBook = aa == [];
    // console.log(hasNoBook);
    SingleValue.countDocuments(async function (err, count){

        if(!err && count === 0){
            //collection empty
            let coll = [];
            for (const thing of bookCategories) {
                coll.push({'ofType': 'bookCategories','value':thing})
                
            }
            await SingleValue.create(coll).catch(); 
        } else console.log('db has stuff in it or is broke, don\'t care ');
    })
    
}

main().catch(err => console.log(err));

async function main() {

    await mongoose.connect('mongodb://127.0.0.1:27017/dabase', { useNewUrlParser: true }).
        catch(error => console.log(error));
    const timer = ms => new Promise(res => setTimeout(res, ms));

    importCategoriesSV();

    // User.create({
    //     userName: "ss",
    //     icon: '/uvu.png',
    //     email: 'abc',
    //     passHash: 'abv',
    //     dateLastActive: new Date("2020-01-02"),
    //     userInfo: {
    //         lName: "S",
    //         fName: "O",
    //         age: 23,
    //         userDescription: "Obema"
    //     },
    //     booksBorrowing: [{
    //         bookName: "The Bolf Of Ball Street",
    //         bookID: "Owo",
    //         borrowID: "xyz",
    //         dueDate: new Date("2029-01-02")
    //     }]
    // }) .then((result) => {
    //     console.log("Yes")
    // }) .catch((err) => {
    //     console.log("uh oh" + err)
    // });

    // Admin.create({
    //     userName: 'UwU',
    //     email: 'a@gmayl.com',
    //     passHash: 'ooooo',
    //     permissions: {
    //         makeAndModifyAccounts: true,
    //         trackBooks: false,
    //         removeReviews: true,
    //     }
    // }) .then((result) => {
    //     console.log("Yes")
    // }) .catch((err) => {
    //     console.log("uh oh" + err)
    // });
    let bookid = new mongoose.Types.ObjectId;

    await Book.create({
        _id: bookid,
        title: '{ type: String, Required: true }',
        internationalNumber: 1234, //IBSN for books and ISSN for mangazines
        author: ['OwO'],
        synopsis: 'this is a thing',
        copiesAvailable: 2,
        PDFPreviewLink: 'String',
    }).then((result) => {
        console.log("Yes book has bean been")
    }).catch((err) => {
        console.log("uh oh" + err)
    });

    // console.log("wait 4 seconds")
    // timer(4000).then(_ => {
    //     console.log("done")

        await Review.create([{
            writtenBy: {
                userName: 'String',
                userID: 'qwertyui'
            },
            ofBook: bookid,
            rating: 'Recommended',
            title: 'Not enough bones',
            body: 'too meaty'
        },
        {
            writtenBy: {
                userName: 'String2',
                userID: 'qertyui'
            },
            ofBook: bookid,
            rating: 'Not Recommended',
            title: 'Just enough bones',
            body: 'Not too meaty'
        }
        ]).then((result) => {
            console.log("Yes")
        }).catch((err) => {
            console.log("uh oh" + err)
        });

    // });
    // timer(7000).then(function () {
        console.log("Obama");

        const a = await Review.find({ rating: 'Recommended' }).populate('ofBook');
        // a.populate('ofBook');
        // console.log(a.path.writtenBy.userName);
        console.log(a);
    // });

    // WishList.create({
    //     userID: 'qwertyuio',
    //     books: [{
    //         bookName: 'String',
    //         Author: ['String','Lmao Johnson'],
    //         bookID: 'John-Celery',
    //     },
    //     {
    //         bookName: 'String2',
    //         Author: ['String'],
    //         bookID: 'John-Celooooery',
    //     }]
    // }) .then((result) => {
    //     console.log("Yes")
    // }) .catch((err) => {
    //     console.log("uh oh" + err)
    // });
    // BorrowedBook.create({
    //     userID: '12345',
    //     bookID: '12345',
    //     leaseDate: Date("2022-10-9"),
    //     dueDate: Date("2022-12-9"),
    //     paymentAmount: 9,
    //     hasReturned: false
    // }) .then((result) => {
    //     console.log("Yes")
    // }) .catch((err) => {
    //     console.log("uh oh" + err)
    // });

}