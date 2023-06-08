import { useState } from 'react'
import './scss/main.scss'
import Header from './components/Header'
import Introduction from './components/Introduction'
import About from './components/About'
import Services from './components/Services'
import Footerpage from './components/Footerpage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-full'>
      <Header />
      <hr className='border-t-2'></hr>
      <Introduction />
    </div>
      <hr className='mt-10 border-t-1'></hr>
      <About />
      <Services />
      <Footerpage />
    </>
  )
}

export default App
