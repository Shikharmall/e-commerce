import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {

  const storedValuecarttt = localStorage.getItem('carttt');
  const storedValuecarttt1 = storedValuecarttt ? JSON.parse(storedValuecarttt) : [];

  if (storedValuecarttt1.length < 1) {
    return (
      <PageWrapper>
        <div className='empty'>
          <h2>your cart is empty</h2>
          <Link to='products' className='btn'>
            fill your cart
          </Link>
        </div>
      </PageWrapper>
    )
  } else {
    return (
      <PageWrapper>
        <StripeCheckout />
      </PageWrapper>
    )
  }
}

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>{children}</Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  display: grid;
  place-items: center;

  .empty {
    text-align: center;
  }
`
export default CheckoutPage
