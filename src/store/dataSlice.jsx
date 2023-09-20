import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cardproducts: [],
  totalprice: 0,
  totalitems: 0
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getAllProducts(state, action) {
      state.products = action.payload
    },
    addcard(state, action) {
      const newItem = action.payload
      const foundedIndex = state.cardproducts.findIndex((product) => product.id == newItem.id)
      
      foundedIndex >=0 ? state.cardproducts[foundedIndex] = 
        {...state.cardproducts[foundedIndex], quantity: state.cardproducts[foundedIndex].quantity < 9 
          ? (state.cardproducts[foundedIndex].quantity + 1)
            : state.cardproducts[foundedIndex].quantity } 
              : state.cardproducts.push({...newItem, quantity: 1})
      
    },
    deletecard(state, action) {
      const newitem = action.payload
      state.cardproducts = 
        state.cardproducts.filter((product) => product.id !== newitem.id)
    },
    selectquantitycard(state, action) {
      const newItem = action.payload
      console.log(newItem)
      const foundedIndex = state.cardproducts.findIndex((product) => product.id == newItem.id)

      state.cardproducts[foundedIndex] = newItem 
    }
  }
})

export const { getAllProducts, addcard, deletecard, selectquantitycard } = dataSlice.actions;

export default dataSlice