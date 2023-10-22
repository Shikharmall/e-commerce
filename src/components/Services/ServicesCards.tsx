import { Link } from 'react-router-dom'
import { useFilterContext } from '../../context/filter_context'
import { services } from '../../utils/constants'

import { GiClothes } from 'react-icons/gi'
import { MdLaptop} from 'react-icons/md';
import { FaGem, FaRing } from 'react-icons/fa';

export const ServicesCards = () => {
  const { updateFilters, handleClickFromServices, clearFilters } =useFilterContext()
  return (
    <div className='services-center'>
      {/*{services.map(({ id, icon, title }) => {
        return (
          <article key={id} className='service'>
            <span className='icon'>{icon}</span>
            <h4>{title}</h4>
            <Link to='/products'>
              <button
                className='btn'
                type='button'
                name='home-page-category'
              >
                click here for {title}
              </button>
            </Link>
          </article>
        )
      })}*/}
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
