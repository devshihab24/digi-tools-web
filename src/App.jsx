
import { Suspense } from 'react'
import './App.css'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import SimplePricing from './Components/SimplePricing/SimplePricing'
import StartedSteps from './Components/StartedSteps/StartedSteps'
import Stat from './Components/Stat/Stat'
import Supercharge from './Components/Supercharge/Supercharge'


const fetchPremiumTools = async() =>{
  const res = await fetch("/premium-tools.json")
  return res.json()
}

function App() {
  const fetchedData = fetchPremiumTools()
  return (
    <>
      <Header></Header>
      <Supercharge></Supercharge>
      <Stat></Stat>
      <Suspense fallback={<div className='h-screen flex justify-center items-center'><span className="loading loading-dots loading-xl"></span></div>}><DigitalTools fetchedData={fetchedData}></DigitalTools></Suspense>
      <StartedSteps></StartedSteps>
      <SimplePricing></SimplePricing>
      <Footer></Footer>
    </>
  )
}

export default App
