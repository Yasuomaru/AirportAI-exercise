class CreateProductDTO {
    constructor(product_type, brand, color, lost_time) {
        this.product_type = product_type;
        this.brand = brand;
        this.color = color;
        this.lost_time = lost_time;
    }

    static fromRequest(reqBody) {
        return new CreateProductDTO(reqBody.product_type, reqBody.brand, reqBody.color, reqBody.lost_time);
    }
}

module.exports = CreateProductDTO;