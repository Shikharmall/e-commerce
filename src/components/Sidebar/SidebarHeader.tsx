import React from 'react'
import logo from '../../assets/logo_white.png'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

export const SidebarHeader: React.FC<{handleclose1: ()=>void}> = ({handleclose1}) => {
  //const { closeSidebar } = useProductsContext()
  return (
    <div className='sidebar-header'>
      <Link to='/' onClick={handleclose1}>
        <img src={logo} className='logo' alt='cute buddy' />
      </Link>
      <button type='button' className='close-btn' onClick={handleclose1}>
        <FaTimes />
      </button>
    </div>
  )
}
