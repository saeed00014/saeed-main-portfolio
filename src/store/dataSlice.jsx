import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getAllProducts(state, action) {
      state.products = action.payload
    }
  }
})

export const { getAllProducts } = dataSlice.actions;

export default dataSlice