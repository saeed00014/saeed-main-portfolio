import axios from 'axios'

const deleteOne = async (product) => {
  await axios.delete(`http://saeedwebdev.ir/products/${product.id}`)
}

export default deleteOne