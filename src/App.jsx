
import { useEffect, useState } from 'react'
import './App.css'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import SimplePricing from './Components/SimplePricing/SimplePricing'
import StartedSteps from './Components/StartedSteps/StartedSteps'
import Stat from './Components/Stat/Stat'
import Supercharge from './Components/Supercharge/Supercharge'
import { ToastContainer } from 'react-toastify'
import Testimonials from './Components/Testimonials/Testimonials'



function App() {
  const [cartItem, setCartItem] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [priceCount, setPriceCount] =useState(0)
  useEffect(()=>{
    fetch("/premium-tools.json").then(res=>res.json()).then(data=>setAllProducts(data))
  },[])
  // console.log(cartItem);
  return (
    <>
      <Header cartItem={cartItem}></Header>
      <Supercharge></Supercharge>
      <Stat></Stat>
      <DigitalTools priceCount={priceCount} setPriceCount={setPriceCount} cartItem={cartItem} setCartItem={setCartItem} allProducts={allProducts}></DigitalTools>
      <StartedSteps></StartedSteps>
      <SimplePricing></SimplePricing>
      <div className='bg-linear-to-r from-[#9100f8] to-[#fb09b4]'>
        <Testimonials></Testimonials>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
