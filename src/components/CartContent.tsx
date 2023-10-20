import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'
import { cartDataType } from '../utils/cartData'

const CartContent = () => {
  //const { cart, clearCart } = useCartContext()
  const storedValuecarttt = localStorage.getItem('carttt');
  const storedValuecarttt1 = storedValuecarttt ? JSON.parse(storedValuecarttt) : [];
  return (
    <Wrapper className='section section-center'>
      <CartColumns />
      {
        (storedValuecarttt1 || storedValuecarttt1.length > 0)?
          storedValuecarttt1.map((cartItem: cartDataType ,index: number) => {
            return <CartItem key={index} cartItem={cartItem} />
          })
        :
        null
      }
      <hr />
      {/*<Buttons clearCart={clearCart} />*/}
      <CartTotals />
    </Wrapper>
  )
}

const Buttons: React.FC<{ clearCart: () => void }> = ({ clearCart }) => {
  return (
    <div className='link-container'>
      <Link to='/products' className='link-btn'>
        continue shopping
      </Link>
      <button type='button' className='link-btn clear-btn' onClick={clearCart}>
        clear shopping cart
      </button>
    </div>
  )
}

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    column-gap: 0.25rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`
export default CartContent
