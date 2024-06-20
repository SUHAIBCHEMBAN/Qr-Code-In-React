import { useState } from 'react'
import './App.css'
import Qr from './components/Qr'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Qr/>
    </>
  )
}

export default App
