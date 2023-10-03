import axios from "axios"

const handleGetAllCard = async () => {
  const res = await axios.get('http://localhost:4000/products', {
    headers: {"Access-Control-Allow-Origin": "*"}
  })
  .then((res) => { return res })
}

export default handleGetAllCard