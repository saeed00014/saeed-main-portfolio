import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  totalprice: 0,
  totalitems: 0
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getAllCards(state, action) {
      state.cards = action.payload

      state.cards.map((card) => { 
        state.totalitems = state.totalitems + card.quantity / 2, state.totalprice = state.totalprice + card.quantity / 2 * card.price - card.quantity / 2 * card.price * card.discountPrecent / 100
      })
    },
    addcard(state, action) {
      const newItem = action.payload
      const foundedIndex = state.cards.findIndex((product) => product.id == newItem.id)

      foundedIndex >=0 
        ? state.cards[foundedIndex].quantity < 9 
          ? (state.cards[foundedIndex] =
            {...state.cards[foundedIndex], quantity: state.cards[foundedIndex].quantity + 1},
            state.totalitems =  newItem.avalability ? state.totalitems + 1 : state.totalitems, 
            state.totalprice = newItem.avalability ? state.totalprice + state.cards[foundedIndex].price - state.cards[foundedIndex].price * state.cards[foundedIndex].discountPrecent / 100 : state.totalprice ) : ''
        : (state.cards.push({...newItem, quantity: 1}),
          state.totalitems = newItem.avalability ? state.totalitems + 1 : state.totalitems,
          state.totalprice = newItem.avalability ? state.totalprice + newItem.price - newItem.price * newItem.discountPrecent / 100 : state.totalprice)
    },
    deletecard(state, action) {
      const newItem = action.payload
      const foundedProduct = state.cards.find((product) => product.id == newItem.id)

      state.totalitems = newItem.avalability ? state.totalitems - foundedProduct.quantity : state.totalitems
      state.totalprice = newItem.avalability ? state.totalprice - (newItem.price - newItem.price * newItem.discountPrecent / 100) : state.totalprice

      state.cards = 
        state.cards.filter((product) => product.id !== newItem.id)
    },
    selectquantitycard(state, action) {
      const newItem = action.payload
      const foundedIndex = state.cards.findIndex((product) => product.id == newItem.id)
      const foundedProduct = state.cards.find((product) => product.id == newItem.id)

      state.cards[foundedIndex] = newItem
      
      state.totalprice = state.totalprice - (foundedProduct.price - newItem.price * newItem.discountPrecent / 100) * foundedProduct.quantity + (newItem.price - newItem.price * newItem.discountPrecent / 100) * newItem.quantity
      
      state.totalitems = state.totalitems - foundedProduct.quantity + newItem.quantity
    },
    clearall(state, action) {
      state.cards = []
      state.totalitems = 0
      state.totalprice = 0
    }
  }
})

export const { getAllCards, addcard, deletecard, selectquantitycard, clearall } = dataSlice.actions;

export default dataSlice