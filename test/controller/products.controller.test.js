const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const express = require('express');
const ProductController = require('../../server/controllers/product.controller');
const productRepo = require('../../server/repositories/product');
const { successes, errors, serverErrors } = require('../../server/helpers/httpResponses');

chai.use(chaiHttp);
const { expect } = chai;

const app = express();
const productEndpoint = '/products';
app.get(productEndpoint, ProductController.index);

const mockApiRequest = chai.request(app);

describe('ProductController.index', function() {
    let sendSuccessStub;
    let sendInternalServerErrorStub;

    beforeEach(() => {
        getAllStub = sinon.stub(productRepo, 'getAll');
        sendSuccessStub = sinon.stub(successes, 'sendSuccess');
        sendInternalServerErrorStub = sinon.stub(serverErrors, 'sendInternalServerError');
    });

    afterEach(() => {
        getAllStub.restore();
        sendSuccessStub.restore();
        sendInternalServerErrorStub.restore();
    });

    describe(`GET ${productEndpoint}`, () => {
        it('should call sendSuccess with products when getAll resolves', (done) => {
            const mockProducts = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
            getAllStub.resolves(mockProducts);
    
            console.log('Starting test for getAll');
    
            mockApiRequest
                .get(productEndpoint)
                .end((err, res) => {
                    console.log('Inside API request callback');
                    if (err) {
                        console.error('Error in API request:', err);
                        done(err);
                    } else {
                        try {
                            console.log('API request successful, checking assertions');
                            expect(sendSuccessStub.calledOnce).to.be.true;
                            expect(sendSuccessStub.calledWith(res, mockProducts)).to.be.true;
                            done();
                        } catch (assertionError) {
                            console.error('Assertion error:', assertionError);
                            done(assertionError);
                        }
                    }
                });
    
            console.log('API request sent');
    
            // Timeout to ensure the test fails if the callback is not called
            setTimeout(() => {
                done(new Error('Test timed out'));
            }, 5000);
        });
    
        it('should call sendInternalServerError with error when getAll rejects', (done) => {
            getAllStub.rejects(new Error('Test error'));
    
            mockApiRequest
                .get(productEndpoint)
                .end((err, res) => {
                    console.log('Inside API request callback for error case');
                    if (err) {
                        console.error('Error in API request:', err);
                        done(err);
                    } else {
                        try {
                            console.log('API request failed as expected, checking assertions');
                            expect(sendInternalServerErrorStub.calledOnce).to.be.true;
                            expect(sendInternalServerErrorStub.calledWith(res)).to.be.true;
                            done();
                        } catch (assertionError) {
                            console.error('Assertion error:', assertionError);
                            done(assertionError);
                        }
                    }
                });
    
            console.log('API request sent for error case');
    
            // Timeout to ensure the test fails if the callback is not called
            setTimeout(() => {
                done(new Error('Test timed out'));
            }, 5000);
        });
    });
});