const {Router} = require('express')

const ProductController = require('../controllers/product.controller')

const router = Router()

router.get('/', ProductController.index)
router.get('/:id', ProductController.show)
router.post('/', ProductController.store)
router.put('/:id', ProductController.update)
router.delete('/:id', ProductController.destroy)

module.exports = router