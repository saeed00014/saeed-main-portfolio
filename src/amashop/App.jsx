import { BrowserRouter, Route, Router, Routes } from "react-router-dom"

import HomePage from "./pages/home"
import CardPage from "./pages/card"
import Header from "./components/header"
import Footer from "./components/footer"

import './global.css'

function AppS() {

  return (
    <BrowserRouter>
    <div className="[&>*]:bg-g_Background_White_Shop [&>*]:text-black [&>*]:font-[500]">
      <Header />
      <Routes>
        <Route path="/shop" element={<HomePage />} />
        <Route path="/shop/card" element={<CardPage />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default AppS
