import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CartTotals = () => {


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

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>₹ {Number(ordertotall)}</span>
          </h5>
          <p>
            shipping fee: <span>FREE!</span>
          </p>
          <hr />
          {/* Supposed to be totalAmount + shipping fee, but there's no shipping fee at the moment */}
          <h4>
            order total: <span>₹ {Number(ordertotall)}</span>
          </h4>
        </article>
        <CheckoutButton />
      </div>
    </Wrapper>
  )
}

const CheckoutButton = () => {
  return (
    <Link to='/checkout' className='btn'>
      proceed to checkout
    </Link>
  )
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  @media (max-width: 576px) {
    && {
      article {
        padding: 1.5rem;
      }
      h4,
      h5,
      p {
        display: grid;
        grid-template-columns: 150px 1fr;
      }
      h4 {
        font-size: 1rem;
      }
    }
  }

  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`

export default CartTotals
