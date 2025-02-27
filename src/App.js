import React from 'react'
import Navbar from './components/Navbar'
import './assets/css/style.css'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import Product from './components/Product'
import Review from './components/Review'
import Contact from './components/Contact'
import Blogs from './components/Blogs'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Product />
      <Review />
      <Contact />
      <Blogs />
      <Footer />
    </>
  )
}

export default App