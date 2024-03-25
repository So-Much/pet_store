const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Product = new Schema({
    images : [String],
    name : { type : String, required: true},
    price : { type : Number, required: true},
    description : { type : String, default: ''},
    category : { type : String, default: ''},
    quantity : { type : Number, default: 0},
    sale : { type : Number, default: 0},
    sold : { type : Number, default: 0},
    rating : { type : Number, default: 0},
    brand : { type : String, default: ''},
    unit : {type : String, enum : ['piece', 'kg', 'bag', 'ml' , 'l', 'can'] , default: ''},
    status : { type : String, enum : ['active', 'inactive'], default: 'active'},

})

module.exports = mongoose.model('Product', Product);