const { expect } = require('chai')
const sinon = require('sinon')
const Product = require('../server/models/product')
const productRepository = require('../server/repositories/product.js')

describe('Product Repository', () => {

    afterEach(() => {
        sinon.restore()
    })

    let product = {
        product_type: 'test',
        brand: 'test',
        color: 'test',
        lost_time: new Date()
    }
    
    describe('getAll', () => {
        it('should return all products', async () => {
        let stub = sinon.stub(Product, 'find').returns([product])
    
        let result = await productRepository.getAll()
    
        expect(result).to.be.an('array')
        expect(result).to.have.lengthOf(1)
        expect(result[0]).to.have.property('product_type', 'test')
        expect(result[0]).to.have.property('brand', 'test')
        expect(result[0]).to.have.property('color', 'test')
        expect(result[0]).to.have.property('lost_time')
    
        })
    })
    
    describe('getById', () => {
        it('should return a product by id', async () => {
        let stub = sinon.stub(Product, 'findById').returns(product)
    
        let result = await productRepository.getById(1)
    
        expect(result).to.have.property('product_type', 'test')
        expect(result).to.have.property('brand', 'test')
        expect(result).to.have.property('color', 'test')
        expect(result).to.have.property('lost_time')
    
        })
    })
    
    describe('save', () => {
        it('should save a product', async () => {
        let stub = sinon.stub(Product.prototype, 'save').returns(product)
    
        let result = await productRepository.save(product)
    
        expect(result).to.have.property('product_type', 'test')
        expect(result).to.have.property('brand', 'test')
        expect(result).to.have.property('color', 'test')
        expect(result).to.have.property('lost_time')
    
        })
    
        it('should throw an error if product type is missing', async () => {
        try {
            await productRepository.save({ brand: 'test', color: 'test', lost_time: new Date() })
        } catch (error) {
            expect(error).to.have.property('message', 'Product type is required')
        }
        })
    
        it('should throw an error if brand is missing', async () => {
        try {
            await productRepository.save({ product_type: 'test', color: 'test', lost_time: new Date() })
        } catch (error) {
            expect(error).to.have.property('message', 'Brand is required')
        }
        })
    })

    describe('destroy', () => {
        it('should destroy a product', async () => {
        let stub = sinon.stub(Product, 'findByIdAndRemove').returns(product)
    
        await productRepository.destroy(1)
    
        })
    })
})