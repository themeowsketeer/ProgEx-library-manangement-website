const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    writtenBy: {
        userName: String,
        userID: {
            type: String,
            required: true,
        }
    },
    ofBook: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        alias:'bookID',
        required: true
    },
    rating: {
        type: String,
        default: '',
        enum: ['Recommended', 'Not Recommended','','._.']
    },
    title: {
        type: String,
    },
    body: {
        type: String,
    },
    removedAt: Date
},
{ timestamps: true});

// Middlewares
//If user makes a review, check if rec or not && 
// +1 to the book's appropriated total rating 
ReviewSchema.post('save', async function(next){
    console.log("[db] post hook for save triggered\n");
    await this.populate('ofBook');
    console.log(this);
    //check if populated
    console.log(this.populated('ofBook'));
    if(this.populate('ofBook')){

        
        if(this.rating == 'Recommended')
        this.ofBook.totalRating.recommended++;
        else if(this.rating == 'Not Recommended')
        this.ofBook.totalRating.notRecommended++;
        await this.ofBook.save();
        console.log(this.ofBook.totalRating);
        this.depopulate('ofBook');
    } else {
        console.log("[db] post hook for save: ofBook not populated, no do anythang")

    }
    
    //test for save first, will be coppied to the other hooks later
    //let reviews = (mongoose.model('Review')) .find({'ofBook': this.ofBook._id}).limit(3).sort({createdAt:-1}).exec();
    // how ft do I do the update?1
});

// // TODO: add case for updateOne and remove
// //If user edits their review, recaculate the total rating for the review's specific book
// ReviewSchema.pre('updateOne', function(next){
//     //find all reviews of this book
//     console.log("[db] post hook for updateOne triggered\n");
//     let reviews = (mongoose.model('Review')) .find({'ofBook': this.ofBook}).exec();
//     //for debug
//     console.log(reviews);

//     this.populate('ofBook');
//     //count the Recs/non Recs of the book and update the total ratings accordenly 
//     reviews.where('rating','Recommended').countDocuments(function(err, count) {
//         if (err) return handleError(err);
//         this.ofBook.totalRating.recommended=count;
//         console.log('[db]: updateOne: there are %d Recommendeds for \"%s\"', count,this.ofBook.title);
//       });
//     reviews.where('rating','Not Recommended').countDocuments(function(err, count) {
//         if (err) return handleError(err);
//         this.ofBook.totalRating.notRecommended=count;
//         console.log('[db]: updateOne: there are %d Not Recommendeds for \"%s\"', count,this.ofBook.title);
//       });
// });
// // Same for remove
ReviewSchema.pre(['deleteOne','remove'], async function(next){
    //find all reviews of this book
    console.log("[db] post hook for remove triggered\n");
    let reviews = (mongoose.model('Review')) .find({'ofBook': this.ofBook}).exec();
    //for debug
    console.log(reviews);

    await this.populate('ofBook');
    //count the Recs/non Recs of the book and update the total ratings accordenly 
    reviews.where('rating','Recommended').countDocuments(function(err, count) {
        if (err) return handleError(err);
        this.ofBook.totalRating.recommended=count;
        console.log('[db]: remove: there are %d Recommendeds for \"%s\"', count,this.ofBook.title);
      });
    reviews.where('rating','Not Recommended').countDocuments(function(err, count) {
        if (err) return handleError(err);
        this.ofBook.totalRating.notRecommended=count;
        console.log('[db]: remove: there are %d Not Recommendeds for \"%s\"', count,this.ofBook.title);
      });
    await this.ofBook.save();
});

const Review = mongoose.model('Review',ReviewSchema);
module.exports = Review;
