import { useState } from 'react'
import './scss/main.scss'
import Header from './components/Header'
import Introduction from './components/Introduction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <hr className='border-t-2'></hr>
      <Introduction />
    </>
  )
}

export default App
