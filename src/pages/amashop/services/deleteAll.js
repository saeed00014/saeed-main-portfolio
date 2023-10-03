import axios from 'axios'

const deleteAll = async () => {
  await axios.delete(`http://saeedwebdev.ir/products/all`)
}

export default deleteAll