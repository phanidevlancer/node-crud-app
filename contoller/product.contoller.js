const Product = require('../models/product.model')
const mongoose = require('mongoose')

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}

const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;


        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Product not found.' });
        }

        const product = await Product.findById(id);
        console.log('product here is', product);

        if (product) {
            res.status(200).json(product);
        } else {
            // Use 404 status code for "Not Found"
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        // Fixed typo in 'message'
        res.status(500).json({ messageee: error.message });
    }
}

const updateProductById = async (req, res) => {
    try {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        console.log('here 1')
        const product = await Product.findByIdAndUpdate(id, req.body)
        console.log('here 2')

        if (!product) {
            return res.status(404).json({ message: 'Product not found' })
        }
        console.log('here 3')


        const updatedProduct = await Product.findById(id)
        console.log('here 4')
        res.status(200).json({ updatedProduct })



    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteProductById = async (req, res) => {
    try {
        const {id} = req.params

       const deletedProduct =  await Product.findByIdAndDelete(id)

       if(!deletedProduct) {
        return res.status(404).json({message : 'Product not found!'})
       }

       res.status(200).json({message : 'deleted successfully'})



    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    getProducts, addProduct, getProductById, updateProductById,deleteProductById
}