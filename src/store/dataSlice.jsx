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

      foundedIndex >=0 
        ? state.cardproducts[foundedIndex].quantity < 9 
          ? (state.cardproducts[foundedIndex] =
            {...state.cardproducts[foundedIndex], quantity: state.cardproducts[foundedIndex].quantity + 1},
            state.totalitems =  newItem.avalability ? state.totalitems + 1 : state.totalitems, 
            state.totalprice = newItem.avalability ? state.totalprice + state.cardproducts[foundedIndex].price - state.cardproducts[foundedIndex].price * state.cardproducts[foundedIndex].discountPrecent / 100 : state.totalprice ) : ''
        : (state.cardproducts.push({...newItem, quantity: 1}),
          state.totalitems = newItem.avalability ? state.totalitems + 1 : state.totalitems,
          state.totalprice = newItem.avalability ? state.totalprice + newItem.price - newItem.price * newItem.discountPrecent / 100 : state.totalprice)
    },
    deletecard(state, action) {
      const newitem = action.payload
      const foundedProduct = state.cardproducts.find((product) => product.id == newitem.id)

      state.totalitems = state.totalitems - foundedProduct.quantity
      
      state.cardproducts = 
        state.cardproducts.filter((product) => product.id !== newitem.id)
    },
    selectquantitycard(state, action) {
      const newItem = action.payload
      const foundedIndex = state.cardproducts.findIndex((product) => product.id == newItem.id)
      const foundedProduct = state.cardproducts.find((product) => product.id == newItem.id)

      state.cardproducts[foundedIndex] = newItem
      
      state.totalprice = state.totalprice - (foundedProduct.price - newItem.price * newItem.discountPrecent / 100) * foundedProduct.quantity + (newItem.price - newItem.price * newItem.discountPrecent / 100) * newItem.quantity
      
      state.totalitems = state.totalitems - foundedProduct.quantity + newItem.quantity
    },
    clearall(state, action) {
      state.cardproducts = []
      state.totalitems = 0
      state.totalprice = 0
    }
  }
})

export const { getAllProducts, addcard, deletecard, selectquantitycard, clearall } = dataSlice.actions;

export default dataSlice