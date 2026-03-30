
import './App.css'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import SimplePricing from './Components/SimplePricing/SimplePricing'
import StartedSteps from './Components/StartedSteps/StartedSteps'
import Stat from './Components/Stat/Stat'
import Supercharge from './Components/Supercharge/Supercharge'

function App() {

  return (
    <>
      <Header></Header>
      <Supercharge></Supercharge>
      <Stat></Stat>
      <DigitalTools></DigitalTools>
      <StartedSteps></StartedSteps>
      <SimplePricing></SimplePricing>
      <Footer></Footer>
    </>
  )
}

export default App
