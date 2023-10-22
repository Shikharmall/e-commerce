import React from 'react'
import { Link } from 'react-router-dom'

export const NavLinks: React.FC<{ className: string , handleclose1: ()=>void}> = ({ className,handleclose1}) => {


  return (
      <ul className={className}>

        <li>
          <Link to='/' onClick={handleclose1}>Home</Link>
        </li>

        <li>
          <Link to='/shipping' onClick={handleclose1}>Shipping</Link>
        </li>

        <li>
          <Link to='/products' onClick={handleclose1}>Products</Link>
        </li>

        <li>
          <Link to='/cart' onClick={handleclose1}>Cart</Link>
        </li>

      </ul>
  )
}
