import React,{useEffect,useState} from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CartButtons = () => {


  const [storedValuecarttt, setStoredValuecarttt] = useState<string | null>("");
  const [storedValuecarttt1, setStoredValuecarttt1] = useState<Array<any> | null>([]);

  const [totalitemm, setTotalitemm] = useState<number>(0);

  useEffect(()=>{

    const storedValuecarttt = localStorage.getItem('carttt');

    if(storedValuecarttt){
      try {
        const parsedValue = JSON.parse(storedValuecarttt);
        setStoredValuecarttt1(parsedValue);
        const flaggg: number = parsedValue.length;
        setTotalitemm(flaggg);
      } catch (error) {
        console.error('Error parsing storedValuecarttt:', error);
      }
    } 

  },[]); //changesss//

  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' >
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          {/*<span className='cart-value'>{totalitemm}</span>*/}
        </span>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`
export default CartButtons
