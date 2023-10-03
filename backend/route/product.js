const express = require('express')

const { 
  getProducts,
  getProduct,
  postProduct,
  deleteCard,
  patchCard
} = require('../controllers/product')

const router = express.Router()

router.get('/', getProducts)

router.get('/:id', getProduct)

router.post('/', postProduct)

router.delete('/:id', deleteCard)

router.patch('/:id', patchCard)

module.exports = router