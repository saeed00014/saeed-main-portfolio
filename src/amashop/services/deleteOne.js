import axios from 'axios'
import React from 'react'

const deleteOne = async (product) => {
  await axios.delete(`http://localhost:4000/products/${product.id}`)
}

export default deleteOne