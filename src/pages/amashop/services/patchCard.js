import axios from "axios"

const patchCard = async (product) => {
  await axios.patch(`https://saeed-main-portfolio-api.cyclic.cloud/products/${product.id}`, {
    "quantity": value 
  }).then((res) => { console.log(res) })
  .catch((err) => { console.log(err) })
}

export default patchCard