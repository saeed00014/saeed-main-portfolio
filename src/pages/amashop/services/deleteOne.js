import axios from 'axios'

const deleteOne = async (product) => {
  await axios.delete(`http://localhost:4000/products/${product.id}`)
}

export default deleteOne