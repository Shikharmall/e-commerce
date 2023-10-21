import React,{useState,useEffect} from 'react'
import Product from '../Product'
import { getAllProductsLimit } from '../../api/AllProducts'
import { itemDataType } from '../../utils/itemData'

export const FeaturedProductsCards = () => {

  const [allProducts,setAllProducts] = useState<itemDataType[]>([]);

  const getallproductslimit = async(limit: number) => {
    try {

      const prod = await getAllProductsLimit(limit);
      setAllProducts(prod);

    } catch (error) { 
      console.log(error);
    }
  };

  useEffect(()=>{
    getallproductslimit(3);
  },[]);

  return (
    <div className='section-center featured'>
      {
        (allProducts && allProducts.length > 0)
        ?
        allProducts.map((product,index) => (
          <Product key={index} product={product} />
        ))
        :
        null
      }
    </div>
  )
}
