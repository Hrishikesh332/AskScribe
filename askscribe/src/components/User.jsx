import React from 'react'
// import {Routes, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footerpage'
import About from './About'
import Services from './Services'

const User = () => {
  return (
    <>
      <Header change='invisible'/>
      <About />
      <Services />
      <Footer />
    </>
  )
}

export default User