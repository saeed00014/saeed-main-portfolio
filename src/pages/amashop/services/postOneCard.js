import axios from 'axios'

const PostOneCard = async (founded, product) => {
  await axios.post('https://saeed-main-portfolio-api.cyclic.cloud/products', {
    "id": product.id,
    "img": product.img,
    "title": product.title,
    "isAvailable": product.isAvailable,
    "remaining": product.remaining,
    "rate": product.rate,
    "price": product.price,
    "discountPrecent": product.discountPrecent,
    "quantity": 
    product.isAvailable 
    ? founded 
      ? founded.quantity < 9 
        ? founded.quantity + 1 
        : founded.quantity 
      : 1
    : 0          
  }).then(() => { console.log("posted succesfuly") })
  .catch((err) => { console.log(err) })
}

export default PostOneCard