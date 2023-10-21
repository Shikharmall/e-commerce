import React from 'react'
import whiteLogo from '../../assets/logo1.png'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <Link to='/'>
      <img src={whiteLogo} alt='cute buddy' />
    </Link>
  )
}
