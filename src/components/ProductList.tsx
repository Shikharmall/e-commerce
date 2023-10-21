import React,{ useState ,useEffect} from 'react';
import GridView from './GridView'

import {getAllProducts} from '../api/AllProducts';
import { itemDataType } from '../utils/itemData';

const ProductList: React.FC<{ allProducts1: itemDataType[] }> = ({allProducts1}) => {

  if(allProducts1.length > 0){
    return <GridView filteredProducts={allProducts1}/>
  } else {
    return <p>Sorry, no product matches your search...</p>;
  }
}

export default ProductList
