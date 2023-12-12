import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MobileDetails from './MobileDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h2>Redux saga crash course</h2>
        <MobileDetails></MobileDetails>
      </div>
     
    </>
  )
}

export default App
