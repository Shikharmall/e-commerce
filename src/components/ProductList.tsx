import React,{ useState ,useEffect} from 'react';
//import { useFilterContext } from '../context/filter_context'
//import { useProductsContext } from '../context/products_context'
import GridView from './GridView'
//import ListView from './ListView'
import Loading from './Loading'

import {getAllProducts} from '../api/AllProducts';
import { itemDataType } from '../utils/itemData';

const ProductList = () => {

  //const { filteredProducts, gridView } = useFilterContext();
  //const { productsLoading } = useProductsContext();

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

  //const prod = [allProducts];
  //console.log(prod);

  //if (productsLoading) {
  //  return <Loading />
  //}

  //if (allProducts.length > 0) {
  //  return <ListView filteredProducts={allProducts} />;
  //}
  //else{
  //  return (
  //    <h5 style={{ textTransform: 'none' }}>
  //     {/* Sorry, no product matches your search...*/}
  //     No product found
  //    </h5>
  //  )
  //}

  if(allProducts.length > 0){
    //return <ListView filteredProducts={allProducts} />;
    return <GridView filteredProducts={allProducts}/>
  } else {
    return <h1>Loading...</h1>;
  }

  //if (!gridView) {
  //  return <ListView filteredProducts={filteredProducts} />
  //}
  //return <GridView filteredProducts={filteredProducts}>product list</GridView>
}

export default ProductList
