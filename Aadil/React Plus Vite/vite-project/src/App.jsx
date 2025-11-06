import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Greeting from './Greeting.jsx'
import './App.css'
import Success from './Success.jsx'
import Danger from './Danger.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting />
      <Success />
      <Danger />

    </>
  )
}

export default App
