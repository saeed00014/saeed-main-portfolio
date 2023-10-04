import axios from 'axios'

const deleteAll = async () => {
  await axios.delete(`https://saeed-main-portfolio-api.cyclic.cloud/products/all`)
}

export default deleteAll