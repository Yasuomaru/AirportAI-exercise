const {expect} = require('chai');

const ResponseProductDTO = require('../../../server/dtos/product/ResponseProductDTO.js');

describe('ResponseProductDTO', () => {

    it('should convert a Product object to a ResponseProductDTO object and keep the right properties', () => {
        
        const product = {
            _id: '12345',
            product_type: 'Electronics',
            brand: 'BrandName',
            color: 'Black',
            lost_time: new Date('2023-10-01T10:00:00Z')
        };

        const responseProductDTO = ResponseProductDTO.fromProduct(product);

        expect(responseProductDTO.id).to.equal(product._id);
        expect(responseProductDTO.product_type).to.equal(product.product_type);
        expect(responseProductDTO.brand).to.equal(product.brand);
        expect(responseProductDTO.color).to.equal(product.color);
        expect(responseProductDTO.lost_time).to.equal(product.lost_time);
    })
})