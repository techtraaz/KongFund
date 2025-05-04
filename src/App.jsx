import { useState , lazy , Suspense} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Landing from './Landing'
import Bento from './Bento'
import Section3 from './Section3'
import Section4 from './Section4'

const Wallets = lazy(() => import('./Walltes'))
const Security = lazy(() => import('./Security'))
const Last = lazy(() => import('./Last'))



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landing/>
      <Bento/>
      <Section3/>
      <Section4/>

      <Suspense fallback={<div>Loading wallets...</div>}>
        <Wallets />
      </Suspense>

      <Suspense fallback={<div>Loading security...</div>}>
        <Security />
      </Suspense>

      <Suspense fallback={<div>Loading final section...</div>}>
        <Last />
      </Suspense>


      
    </>
  )
}

export default App
