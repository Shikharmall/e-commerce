import React, { useState, useEffect } from 'react'
import { CardElement} from '@stripe/react-stripe-js'
import styled from 'styled-components'
// Billing info and style from Stripe YouTube tutorial
import Row from './Row'
import BillingDetailsFields from './BillingDetailsFields'

export const CheckoutForm = () => {
  const totallll = localStorage.getItem('totalll');
  const [succeeded, setSucceeded] = useState(false) // if the payment succeeded
  const [error, setError] = useState('') // error message
  const [processing, setProcessing] = useState(false) // if the payment is processing
  const [disabled, setDisabled] = useState(false) // disable the pay button

  const [ordertotall,setOrdertotall] = useState<Number>(0);

  useEffect(() => {
    
    const storedValuecarttt = localStorage.getItem('carttt');
  
    if(storedValuecarttt){

      const storedValuecarttt1 = JSON.parse(storedValuecarttt);
  
      if(Array.isArray(storedValuecarttt1)){

        let totall1: number = 0;

        storedValuecarttt1.map((item,index)=>{

          totall1 = totall1 + (Number(item.amount)*Number(item.price));
          
        })

        setOrdertotall(totall1);

      }

    }

  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    //setProcessing(true)

    const billingDetails = {
      name: event.target.name.value,
      email: event.target.email.value,
      address: {
        city: event.target.city.value,
        line1: event.target.address.value,
        state: event.target.state.value,
        postal_code: event.target.zip.value,
      },
    }

    


  }

  return (
    <Wrapper>
      <form id='payment-form' onSubmit={handleSubmit}>
        <h4>enter billing details:</h4>
        <Row>
          <BillingDetailsFields />
        </Row>

        <h4>card details for test:</h4>
        <TestCardDetails>
          <li>Card number: 4242 4242 4242 4242</li>
          <li>MM/YY: 22/22</li>
          <li>CVC: 222</li>
        </TestCardDetails>

        {/* Show any error that happens when processing the payment */}
        {error ?? (
          <div className='card-error' role='alert'>
            {error}
          </div>
        )}

        <Row>
          <button
            disabled={processing || disabled || succeeded || !CardElement}
            type='submit'
          >
            <span id='button-text'>
              {processing ? (
                <div className='spinner' id='spinner' />
              ) : (
                `Pay ₹${ordertotall}`
              )}
            </span>
          </button>
        </Row>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 1rem auto;
`

const TestCardDetails = styled.ul`
  color: var(--clr-primary-7);
`

const cardStyle = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#32325d',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
  hidePostalCode: true,
}
