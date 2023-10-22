import React from 'react'
import { Link } from 'react-router-dom'

export const NavLinks: React.FC<{ className: string , isopen1: boolean,handleclose1: ()=>void , bothcomp1: ()=> void, bothcomp111: ()=> void}> = ({ className,isopen1,handleclose1,bothcomp1,bothcomp111}) => {

  if(isopen1 === true){
    bothcomp1();
  }


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
