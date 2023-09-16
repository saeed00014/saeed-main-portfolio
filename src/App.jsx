import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/header"
import Footer from "./components/footer"
import HomePage from "./pages/home"
import ProjectPage from "./pages/projects"
import AboutPage from "./pages/about"
import ContactPage from "./pages/contact"

import './index.css'

function App() {

  return (
    <BrowserRouter>
      <div className="[&>*]:text-white [&>*]:bg-g_Background_Black [&>*]:font-secondary">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/projects" element={<ProjectPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

