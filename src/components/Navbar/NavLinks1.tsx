import React from 'react'
import { Link } from 'react-router-dom'

export const NavLinks1: React.FC<{ className: string}> = ({ className}) => {


  return (
      <ul className={className}>

        <li>
          <Link to='/'>Home</Link>
        </li>

        <li>
          <Link to='/shipping'>Shipping</Link>
        </li>

        <li>
          <Link to='/products'>Products</Link>
        </li>

        <li>
          <Link to='/cart'>Cart</Link>
        </li>

      </ul>
  )
}
