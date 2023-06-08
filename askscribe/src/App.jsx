// import { useState } from 'react'
import './scss/main.scss'

import Header from './components/Header'
import Introduction from './components/Introduction'
import About from './components/About'
import Services from './components/Services'
import Footerpage from './components/Footerpage'

import Login from './components/Login'
import Signup from './components/SignUp'

import {Routes, Route} from 'react-router-dom'

function App() {
    return (
      <>
      <Routes>
      <Route path='' element={
      <><div className='h-full relative'>
      <Header/>
      <hr className='border-t-2'></hr>
      <Introduction />
      </div>
      <hr className='mt-10 border-t-1'></hr>
      <About />
      <Services />
      <Footerpage />
      </>}></Route>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      </Routes>
      </>
      
    )
  }  


export default App