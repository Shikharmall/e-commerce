import React,{ useState ,useEffect} from 'react';
import GridView from './GridView'

import {getAllProducts} from '../api/AllProducts';
import { itemDataType } from '../utils/itemData';

const ProductList = () => {

  const [allProducts,setAllProducts] = useState<itemDataType[]>([]);

  const getallproducts = async() => {
    try {

      const prod = await getAllProducts();
      setAllProducts(prod);

    } catch (error) { 
      console.log(error);
    }
  };

  useEffect(()=>{
    getallproducts();
  },[]);

  if(allProducts.length > 0){
    return <GridView filteredProducts={allProducts}/>
  } else {
    return <h1>Loading...</h1>;
  }
}

export default ProductList
