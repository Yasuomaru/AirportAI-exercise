const { successes, serverErrors } = require('../helpers/httpResponses')
const {getAll, getById, save, destroy : _destroy} = require('../repositories/product')
class ProductController {

    static async index(req, res) {
        try {
            const products = await getAll()

            successes.sendSuccess(res, products);
        } catch (error) {
            serverErrors.sendInternalServerError(res, error);
        }
    }

    static async show(req, res) {
        try {
            const product = await getById(req.params.id)
            
            successes.sendSuccess(res, product);
        } catch (error) {
            serverErrors.sendInternalServerError(res, error);
        }
    }

    static async store(req, res) {
        try {
            const product = save(req.body)
            
            successes.sendSuccess(res, product);
        } catch (error) {
            serverErrors.sendInternalServerError(res, error);
        }
    }

    static async update(req, res) {
        try {
            const product = await getById(req.params.id)
    
            if (!product) {
                return serverErrors.sendNotFound(res, 'Product not found');
            }
    
            Object.assign(product, req.body);
    
            await save(product)
            successes.sendSuccess(res, product);
        } catch (error) {
            serverErrors.sendInternalServerError(res, error);
        }
    }

    static async destroy(req, res) {
        try {
            await _destroy(req.params.id)
            
            successes.sendSuccess(res, null);
        } catch (error) {
            serverErrors.sendInternalServerError(res, error);
        }
    }
}

module.exports = ProductController;