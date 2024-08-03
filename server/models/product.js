// Product model
// This file contains the schema for the product model.

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_type: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    lost_time: {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('Product', productSchema);