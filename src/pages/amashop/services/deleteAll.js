import axios from 'axios'

const deleteAll = async () => {
  await axios.delete(`http://localhost:4000/products/all`)
}

export default deleteAll