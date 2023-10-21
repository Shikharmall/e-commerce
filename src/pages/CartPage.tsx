import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { PageHero, CartContent } from '../components'

const CartPage = () => {

  //const { cart } = useCartContext()

  const [refresh,setRefresh] = useState<string[] | null>(null);

  const makerefresh = ()=>{
    if (refresh === null) {
      setRefresh(['hello']);
    } else {
      setRefresh([...refresh, 'hello']);
    }
  }

  const [storedValuecarttt, setStoredValuecarttt] = useState<string | null>("");
  const [storedValuecarttt1, setStoredValuecarttt1] = useState<Array<any> | null>([]);

  useEffect(() => {

    //const makerefresh = ()=>{
      //setRefresh("hello");
      const storedValuecarttt = localStorage.getItem('carttt');
  
      if (storedValuecarttt) {
        setStoredValuecarttt(storedValuecarttt);
        setStoredValuecarttt1(JSON.parse(storedValuecarttt));
      } else {
        setStoredValuecarttt(null);
        setStoredValuecarttt1([]);
      }
    //}
    
  }, [refresh]);
  

  if(!storedValuecarttt1 || storedValuecarttt1.length < 1) {
    return (
      <Wrapper className='page-100'>
        <div className='empty'>
          <h2>Your cart is empty</h2>
          <Link to='/products' className='btn'>
            go to fill your cart
          </Link>
        </div>
      </Wrapper>
    )
  } else {
    return (
      <main>
        <PageHero title='Cart' />
        <Wrapper className='page'>
          <CartContent makerefresh={makerefresh}/>
        </Wrapper>
      </main>
    )
  }
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage
