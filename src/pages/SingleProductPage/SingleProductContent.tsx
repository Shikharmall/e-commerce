import React from 'react'
//import { useProductsContext } from '../../context/products_context'
//import { formatPrice } from '../../utils/helpers'
import { AddToCart } from '../../components'
import { itemDataType } from '../../utils/itemData'

export const SingleProductContent: React.FC<{ oneProduct1: itemDataType[] }> = ({oneProduct1}) => {

  return (
    <section className='content'>
      <h2>{oneProduct1[0]?.title}</h2>
      <h5 className='price'>₹{oneProduct1[0]?.price}</h5>
      <p className='desc'>{oneProduct1[0]?.description}</p>
      <p className='info'>
        <span>Availability : </span>
        {(oneProduct1[0]?.rating?.rate<3.5) ? 'In stock' : 'Out of stock'}
      </p>

      <p className='info'>
        <span>Category : </span>
        {oneProduct1[0]?.category}
      </p>

      <p className='info'>
        <span>Rating : </span>
        {oneProduct1[0]?.rating?.rate}({oneProduct1[0]?.rating?.count} Reviews)
      </p>

      {true ? (
        <>
          <hr />
          {/*<AddToCart singleProduct={singleProduct} />*/}
          <AddToCart singleProduct={oneProduct1} />
        </>
      ) : undefined}
    </section>
  )
}
