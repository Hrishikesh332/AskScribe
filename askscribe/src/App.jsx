import { useState } from 'react'
import './App.css'
import './scss/main.scss'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Introduction />
    </>
  )
}

export default App
