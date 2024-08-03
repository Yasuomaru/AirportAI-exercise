const { successes, serverErrors } = require('../helpers/httpResponses')
const {getAll, getById, save, destroy : _destroy} = require('../repositories/product')
class ProductController {

    static index(req, res) {
        getAll()
            .then(products => {
                successes.sendSuccess(res, products);
            })
            .catch(error => {
                serverErrors.sendInternalServerError(res, error);
            });
    }

    static show(req, res) {
        getById(req.params.id)
            .then(product => {
                successes.sendSuccess(res, product);
            })
            .catch(error => {
                serverErrors.sendInternalServerError(res, error);
            });
    }

    static store(req, res) {
        save(req.body)
            .then(product => {
                successes.sendSuccess(res, product);
            })
            .catch(error => {
                serverErrors.sendInternalServerError(res, error);
            });
    }

    static update(req, res) {
        save(req.body)
            .then(product => {
                successes.sendSuccess(res, product);
            })
            .catch(error => {
                serverErrors.sendInternalServerError(res, error);
            });
    }

    static destroy(req, res) {
        _destroy(req.params.id)
            .then(() => {
                successes.sendSuccess(res, null);
            })
            .catch(error => {
                serverErrors.sendInternalServerError(res, error);
            });
    }
}

module.exports = ProductController;