/**
 * @typedef {import('../../models/product.model.js').Product} Product
 */

class ResponseProductDTO {
    constructor(id, product_type, brand, color, lost_time) {
        this.id = id;
        this.product_type = product_type;
        this.brand = brand;
        this.color = color;
        this.lost_time = lost_time;
    }

    /**
     * Convert a Product object to a ResponseProductDTO object
     * @param {Product} product
     * @returns {ResponseProductDTO}
     */
    static fromProduct(product) {
        return new ResponseProductDTO(product._id, product.product_type, product.brand, product.color, product.lost_time);
    }
}

model.exports = ResponseProductDTO;