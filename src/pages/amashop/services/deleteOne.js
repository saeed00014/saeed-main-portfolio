import axios from 'axios'

const deleteOne = async (product) => {
  await axios.delete(`https://saeed-main-portfolio-api.cyclic.cloud/products/${product.id}`)
}

export default deleteOne