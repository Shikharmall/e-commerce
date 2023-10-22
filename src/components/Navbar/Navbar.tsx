import React,{useState} from 'react'
import styled from 'styled-components'
import CartButtons from '../CartButtons'
import { Logo } from './Logo'
import { NavLinks } from './NavLinks'
import { FaBars } from 'react-icons/fa';

const Nav = () => {
  const [isopen,setIsopen] = useState<boolean>(false);

  const handleclose = async()=>{
    setIsopen(false);
  }

  const handleopenburger = async()=>{
    setIsopen(true);
  }
  const bothcomp = async()=>{
    //setIsopen(true);
  }

  const bothcomp11 = async()=>{
    setIsopen(false);
  }


  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Logo />
        </div>
        {/*<NavLinks className='nav-links' />*/}
        <NavLinks className='nav-links' isopen1={isopen} handleclose1={handleclose} bothcomp1={bothcomp} bothcomp111={bothcomp11}/>
      </div>
      <CartButtons />
      <HamburgerButton type='button' onClick={handleopenburger}>
        <FaBars />
      </HamburgerButton>
    </NavContainer>
  )
}

export default Nav

const HamburgerButton = styled.button`
  background: transparent;
  border: none;
  color: var(--clr-primary-5); /* Use your desired color */
  cursor: pointer;
  display: flex;
  align-items: center;
  display: none;

  svg {
    font-size: 2rem;
  }

  /* Add any additional styles you want */
  @media (max-width: 992px) {
    display:block;
  }
`;

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      /* original margin-left: -15px */
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    img{
      margin-left: 15px;

    }
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`
