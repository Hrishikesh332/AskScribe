import { useState } from 'react'
import './scss/main.scss'

import Header from './components/Header'
import Introduction from './components/Introduction'
import About from './components/About'
import Services from './components/Services'
import Footerpage from './components/Footerpage'

// import Signup from './components/SignUp'

function App() {

  const [page,setPage] = useState(true);
  const statechange = (e) => {
    setPage(!page);
  }
  
    return (
      <>
      <div className='h-full relative'>
      <Header change={statechange}/>
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
