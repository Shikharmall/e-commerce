import React, { useEffect ,useState} from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort, PageHero } from '../components'
import { useFilterContext } from '../context/filter_context'
import { itemDataType } from '../utils/itemData'
import { getAllProducts } from '../api/AllProducts'

const ProductsPage = () => {

  const { clearFilters, isClickFromServices, resetIsClickFromServices } = useFilterContext();

  useEffect(() => {
    if (isClickFromServices) {
      // if this page mounts because clicking a button in Services, should not run clearFilters()
      // no set time out is needed to reset the variable
      resetIsClickFromServices()
    } else {
      // when component mounts clear the filter
      clearFilters()
    }
    // eslint-disable-next-line
  }, []);


  //type FiltersProps = {
  //  searchbynamefunc1: (value: string) => Promise<void>;
  //  searchbyname1: string; // Assuming searchbyname is a string
  //  // ... other props
  //};

  const [searchbyname,setSearchbyname] = useState<string>("");

  const searchbynamefunc = async(value: string) => {
    try {

      setSearchbyname(value);

    } catch (error) { 
      console.log(error);
    }
  };

  const [allProducts,setAllProducts] = useState<itemDataType[]>([]);

  const filteredProducts = allProducts.filter(product => {
    const productName = product.title.toLowerCase();
    const searchTerm = searchbyname.toLowerCase();
    return productName.includes(searchTerm);
  });


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


  return (
    <main>
      <PageHero title='products' />
      <Wrapper className='page'>
        <div className='section-center products'>
          <Filters searchbynamefunc1={searchbynamefunc} searchbyname1={searchbyname} />
          <div>
            <Sort />
            <ProductList allProducts1={filteredProducts}/>
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage
