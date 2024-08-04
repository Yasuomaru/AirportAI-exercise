const {expect} = require('chai')

const CreateProductDTO = require('../../../server/dtos/product/CreateProductDTO');

describe('CreateProductDTO', () => {

    it('should convert a Express request body to a CreateProductDTO object and keep the right properties', () => {
        const reqBody = {
            product_type: 'type',
            brand: 'brand',
            color: 'color',
            lost_time: 'time'
        }

        const createProductDTO = CreateProductDTO.fromRequest(reqBody);

        expect(createProductDTO.product_type).to.equal(reqBody.product_type);
        expect(createProductDTO.brand).to.equal(reqBody.brand);
        expect(createProductDTO.color).to.equal(reqBody.color);
        expect(createProductDTO.lost_time).to.equal(reqBody.lost_time);
    })
})
