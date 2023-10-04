import axios from "axios"

const handleGetAllCard = async () => {
  const res = await axios.get('https://saeed-main-portfolio-api.cyclic.cloud/products', {
    headers: {"Access-Control-Allow-Origin": "*"}
  })
  .then((res) => { return res })
}

export default handleGetAllCard