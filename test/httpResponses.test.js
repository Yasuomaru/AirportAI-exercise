const httpResponses = require('../server/helpers/httpResponses'); // Adjust the path as necessary
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const express = require('express');

chai.use(chaiHttp);
const { expect } = chai;

const app = express();
const successEndpointRequest = '/example-success';

app.get(successEndpointRequest, (req, res) => {
    httpResponses.successes.sendSuccess(res, { message: 'Operation was successful' });
});

describe('HTTP Response Handlers', function() {
    this.timeout(5000); // Increase timeout to 5000ms

    let sendSuccessStub;
    let mockApiRequest;

    beforeEach(() => {
        sendSuccessStub = sinon.stub(httpResponses.successes, 'sendSuccess').callsFake((res, data) => {
            res.status(200).json(data);
        });
        mockApiRequest = chai.request(app);
    });

    afterEach(() => {
        sendSuccessStub.restore();
    });

    describe(`GET ${successEndpointRequest}`, () => {
        it('should return a 200 status code', (done) => {
            mockApiRequest.get(successEndpointRequest)
                .end((err, res) => {
                    if (err) {
                        done(err);
                    } else {
                        expect(res).to.have.status(200);
                        done();
                    }
                });
        });

        it('should call the sendSuccess function', (done) => {
            mockApiRequest.get(successEndpointRequest)
                .end((err, res) => {
                    if (err) {
                        done(err);
                    } else {
                        expect(sendSuccessStub.calledOnce).to.be.true;
                        done();
                    }
                });
        });
    });
});