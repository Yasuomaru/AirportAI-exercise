class UpdateProductDTO {
    constructor(product_type, brand, color, lost_time) {
        if (product_type !== undefined) this.product_type = product_type;
        if (brand !== undefined) this.brand = brand;
        if (color !== undefined) this.color = color;
        if (lost_time !== undefined) this.lost_time = lost_time;
    }

    static fromRequest(reqBody) {
        return new UpdateProductDTO(reqBody.product_type, reqBody.brand, reqBody.color, reqBody.lost_time);
    }
}

module.exports = UpdateProductDTO;