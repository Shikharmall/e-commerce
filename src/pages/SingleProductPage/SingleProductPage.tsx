import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import { ProductImages, Loading, PageHero } from '../../components'
import styled from 'styled-components'
import { BackToProductsButton } from './BackToProductsButton'
import { SingleProductContent } from './SingleProductContent'
import ErrorPage from '../ErrorPage'
import { getProduct } from '../../api/AllProducts'
import { itemDataType } from '../../utils/itemData'

const SingleProductPage = () => {

  const { id } = useParams<{ id: string }>();
  const [oneProduct,setOneProduct] = useState<itemDataType[]>([]);
  const [loading11,setLaoading11] = useState(false);

  const getoneproduct = async(productid: string) => {

    setLaoading11(true);

    try {

      const prod = await getProduct(productid);
      setOneProduct([...oneProduct,prod]);
      setLaoading11(false);

    } catch (error) { 
      console.log(error);
    }
  };

  useEffect(()=>{
    if (typeof id === 'string') { 
      getoneproduct(id);
    }
  },[id]);

  if (loading11) {
    return <Loading />
  }

  if (/*singleProductError*/0) {
    return <ErrorPage />
  } else {
    return (
      <Wrapper>
        <PageHero title={oneProduct[0]?.title?.substring(0,15)+"..."} isSingleProduct />
        <div className='section section-center page'>
          <BackToProductsButton />
          <div className='product-center'>
            <ProductImages images={oneProduct[0]?.image} />
            <SingleProductContent oneProduct1={oneProduct}/>
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default SingleProductPage

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
    &:first-letter {
      text-transform: capitalize;
    }
  }
  .info {
    width: 300px;
    display: grid;
    grid-template-columns: 180px 1fr;
    margin-bottom: 1.25rem;
    &:first-letter {
      text-transform: capitalize;
    }
    span {
      font-weight: 700;
    }
  }

  .star{
    color: gold;
    display: flex;
    font-size: 25px;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`
