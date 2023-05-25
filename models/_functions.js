/**Functions that are used in the database lives here */
module.exports.cutomMGValidator = async function (value,type){
    console.log("[db] cutomMGValidator triggered");
    const SingleValue = require('./_SingleValue');
    return !!await SingleValue.findOne({'ofType':type, 'value': value, 'removed': false}, '_id');
}