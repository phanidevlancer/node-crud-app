const express = require('express')
const route = express.Router()
const {getProducts,addProduct,getProductById,updateProductById,deleteProductById} = require('../contoller/product.contoller')


route.get('/', getProducts)
route.post('/', addProduct)
route.get('/:id', getProductById);
route.put('/:id',updateProductById )
route.delete('/:id', deleteProductById)

module.exports = route