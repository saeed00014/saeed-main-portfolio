import axios from 'axios'

const PostOneCard = (founded, product) => {
  const handlePost = async (founded, product) => {
    await axios.post('http://saeedwebdev.ir/products', {
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
  handlePost(founded, product)
}

export default PostOneCard