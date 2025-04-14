import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Landing from './Landing'
import Bento from './Bento'
import Section3 from './Section3'
import Section4 from './Section4'
import Wallets from './Walltes'
import Security from './Security'
import Last from './Last'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landing/>
      <Bento/>
      <Section3/>
      <Section4/>
      <Wallets/>
      <Security/>
      <Last/>
    </>
  )
}

export default App
