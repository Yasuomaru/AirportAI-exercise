/**
* App routes definitions.
*/
'use strict';

const ProductsRoutes = require('./product.routes');

let express = require('express');
let router = express.Router();

// To confirm setup only.
router.get('/', function(req, res) { return res.send('Hello world!'); });

router.use('/products', ProductsRoutes);

module.exports = router;
