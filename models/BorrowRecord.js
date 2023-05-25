const mongoose = require('mongoose');

const BorrowRecordSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        //required: true,
        ref: 'User'
    },
    bookID: {
        type: mongoose.Types.ObjectId,
        //required: true,
        ref: 'Book'
    },
    inventoryID: {
        type: mongoose.Types.ObjectId,
        //required: true,
        ref: 'Invetorie'
    },

    leaseDate: {
        type: Date,
        default: mongoose.now,
        //required: true
    },
    dueDate: {
        type: Date,
        //required: true
    },
    returnDate: {
        type: Date,
        default: null
    },
    paymentAmount: {
        type: Number,
        min: [0, 'Payment cannot be <0, got {VALUE}.'],
        default: 0
    },

    hasReturned: { type: Boolean, default: false },

    overDue: { type: Boolean, default: false }
},
    { timestamps: true });

BorrowRecordSchema.virtual('status')
    .get(function () {
        let today = new Date();
        if (this.returnDate == null)
            // if((new Date()).getTime() > Date(this.dueDate).getTime()){
            if ((today) > new Date(this.dueDate)) {
                //Overdue!
                return 'overdue'
            } else {
                //ok?
                return 'borrowing'
            }
        else //book has been returned or soething went wrong?
            if (new Date(this.leaseDate) > today)// this if - else might not be necessary
                return 'canceled'
            else return 'returned'
    })
    .set(function (v) {
        switch (v.toLowerCase()) {
            case 'borrowing':
            case 'overdue':
                this.set('returnDate', null);
                break;

            case 'returned':
            case 'canceled':
                this.set('returnDate', new Date(), Date);
                break;

            default:
                //unexpected value?!
                console.log("[db] BorrowRecords.status: Unexpected value: %s", v);
                break;
        }
    })

const BorrowRecord = mongoose.model('BorrowRecord', BorrowRecordSchema);
module.exports = BorrowRecord;
