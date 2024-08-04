class ResponseProductDTO {
    constructor(id, product_type, brand, color, lost_time) {
        this.id = id;
        this.product_type = product_type;
        this.brand = brand;
        this.color = color;
        this.lost_time = lost_time;
    }
}

model.exports = ResponseProductDTO;