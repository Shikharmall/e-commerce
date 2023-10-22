import { Link } from 'react-router-dom'
import { GiClothes } from 'react-icons/gi'
import { MdLaptop} from 'react-icons/md';
import { FaGem} from 'react-icons/fa';

export const ServicesCards = () => {
  return (
        <div className='services-center'>
          <article  className='service'>
            <span className='icon'><GiClothes /></span>
            <h4></h4>
            <Link to='/products'>
              <button
                className='btn'
                type='button'
                name='home-page-category'
              >
                click here for Clothings
              </button>
            </Link>
          </article>

          <article className='service'>
            <span className='icon'><MdLaptop/></span>
            <h4></h4>
            <Link to='/products'>
              <button
                className='btn'
                type='button'
                name='home-page-category'
              >
                click here for Electronic
              </button>
            </Link>
          </article>

          <article className='service'>
            <span className='icon'><FaGem/></span>
            <h4></h4>
            <Link to='/products'>
              <button
                className='btn'
                type='button'
                name='home-page-category'
              >
                click here for Jewelery
              </button>
            </Link>
          </article>
        </div>
  )
}
