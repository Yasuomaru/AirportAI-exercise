const {expect} = require('chai');

const UpdateProductDTO = require('../../../server/dtos/product/UpdateProductDTO');

describe('UpdateProductDTO', () => {

    it('should convert a Express request body to a UpdateProductDTO object and keep the right properties', () => {
        const reqBody = {
            product_type: 'type',
            brand: 'brand',
            color: 'color',
            lost_time: 'time'
        }

        const updateProductDTO = UpdateProductDTO.fromRequest(reqBody);

        expect(updateProductDTO.product_type).to.equal(reqBody.product_type);
        expect(updateProductDTO.brand).to.equal(reqBody.brand);
        expect(updateProductDTO.color).to.equal(reqBody.color);
        expect(updateProductDTO.lost_time).to.equal(reqBody.lost_time);
    })
})