import axios from 'axios'
import React from 'react'

const PostOneCard = ({founded}) => {
  const handlePost = async (founded) => {
    await axios.post('http://localhost:4000/products', {
      "id": product.id,
      "img": product.img,
      "title": product.title,
      "avalability": product.avalability,
      "remaining": product.remaining,
      "rate": product.rate,
      "price": product.price,
      "discountPrecent": product.discountPrecent,
      "quantity": 
      product.avalability 
      ? founded 
        ? founded.quantity < 9 
          ? founded.quantity + 1 
          : founded.quantity 
        : 1
      : 0          
    })
  }
  handlePost(founded)
}

export default PostOneCard