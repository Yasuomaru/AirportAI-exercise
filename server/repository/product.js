//Product repository
//This file contains the logic for interacting with the database.

const Product = require('../models/product');


const getAll = async () => {
    return await Product.find();
}

const getById = async (id) => {
    return await Product.findById(id);
}

const save = async (product) => {
    // Validations
    if (!product.product_type) {
        throw new Error('Product type is required');
    }

    if (!product.brand) {
        throw new Error('Brand is required');
    }

    return await new Product(product).save();
}

const destroy = async (id) => {
    await Product.findByIdAndRemove(id);
}


module.exports = {
    getAll,
    getById,
    save,
    destroy
};