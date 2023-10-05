import axios from "axios"

const handleGetAllCard = async () => {
  await axios.get('https://saeed-main-portfolio-api.cyclic.cloud/products', {
    headers: {"Access-Control-Allow-Origin": "*"}
  })
  .then((res) => { return res })
  .catch((err) => { console.log(err)})
  .finally(() => { return '' })
}

export default handleGetAllCard