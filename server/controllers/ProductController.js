const BaseController = require('./BaseController');

class ProductController extends BaseController {
    static index(req, res) {
        res.send('Product controller index');
    }

    static show(req, res) {
        res.send('Product controller show');
    }

    static store(req, res) {
        res.send('Product controller store');
    }

    static update(req, res) {
        res.send('Product controller update');
    }

    static destroy(req, res) {
        res.send('Product controller destroy');
    }
}

module.exports = ProductController;