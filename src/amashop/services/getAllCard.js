import axios from "axios"

const handleGetAllCard = async () => {
  await axios.get('http://localhost:4000/products', {
    headers: {"Access-Control-Allow-Origin": "*"}
  }).then(function (response) {
    return response.data
  })
}

export default handleGetAllCard