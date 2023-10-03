import './assets/global.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllCards } from '../store/dataSlice'

import HomePage from "./pages/home/home"
import CardPage from "./pages/card/card"
import Header from "./components/header"
import Footer from "./components/footer"
import Product from "./pages/product/product"

import axios from 'axios'
import { cardLoading } from '../store/loadingSlice'

function AppS() {
  const dispatch = useDispatch()

  useEffect(() => {
    const handleGetAllCard = async () => {
      const res = await axios.get('http://localhost:4000/products', {
        headers: {"Access-Control-Allow-Origin": "*"}
      })
      .then((res) => dispatch(cardLoading(false), dispatch(getAllCards(res.data))))
      .catch(() => console.log('failed'))
    }
    handleGetAllCard()
  }, [])

  return (
    <BrowserRouter>
    <div style={{direction: 'rtl'}} className="[&>*]:bg-g_Background_White_Shop [&>*]:text-black [&>*]:font-sans [&>*]:font-[500]">
      <Header />
      <Routes>
        <Route path="/shop" element={<HomePage />} />
        <Route path="/shop/card" element={<CardPage />} />
        <Route path="/shop/product/*" element={<Product />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default AppS
