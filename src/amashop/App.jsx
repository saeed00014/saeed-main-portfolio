import { BrowserRouter, Route, Router, Routes } from "react-router-dom"

import HomePage from "./pages/home"
import Header from "./components/header"
import Footer from "./components/footer"

import './global.css'

function AppS() {

  return (
    <BrowserRouter>
    <div className="[&>*]:bg-g_Background_White_Shop [&>*]:text-black">
      <Header />
      <Routes>
        <Route path="/shop" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default AppS
