import React,{useState} from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import { Navbar, Sidebar, Footer, ScrollToTop } from './components'

import {
  Home,
  Error,
  Shipping,
  SingleProduct,
  Checkout,
  Products,
  Cart,
  SuccessfulPayment,
} from './pages'

function App() {

  return (

    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shipping' element={<Shipping/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:id' element={<SingleProduct />}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/successful_payment' element={<SuccessfulPayment/>}/>
          <Route path='*' element={<Error />}/>
        </Routes>
      </Layout>
    </BrowserRouter>

  )
}

export default App

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [isopen,setIsopen] = useState<boolean>(false);

  const handleopen = async()=>{
    setIsopen(true);
  }

  const handleclose = async()=>{
    setIsopen(false);
  }

  return (
    <>
      <ScrollToTop />
      <Navbar  ismainopen={isopen} handlemainopen={handleopen}/>
      <Sidebar ismainopen={isopen} handlemainclose={handleclose}/>
      {children}
      <Footer />
    </>
  )
}
