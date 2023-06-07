import { useState } from 'react'
import './scss/main.scss'
import Header from './components/Header'
import Introduction from './components/Introduction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
      </div>
      <h2>Hellojhiih</h2>
      <Header />
      <Introduction />
    </>
  )
}

export default App
