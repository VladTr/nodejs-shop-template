const mongoose = require('mongoose');
const Products = require('./product');
const User = require('./user');


const orderSchema = new mongoose.Schema({
    user: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    product: {type:mongoose.Schema.Types.ObjectId, ref:'Products'},
},{
    usePushEach: true
});


const Orders = mongoose.model('Orders', orderSchema);
module.exports = Orders;
