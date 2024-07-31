import './header.scss'
import logo from '../../assets/logo.svg'
import { IoBagHandleSharp } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
import useCartStore  from '../../functions/useCartStore';

export default function Header({ }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openCart , cartData} = useCartStore();

  function openCartMenu() {
    openCart()
  }
  return (
    <header className='Header'>
      <nav className={`nav ${!menuOpen ? "closeNav" : "openNav"}`}>
        <ul>
          <li> <NavLink to={"/"}>  מסך הבית</NavLink> </li>
          <li><NavLink to={"/shop"}> חנות</NavLink> </li>
          <li> <NavLink to={"/checkout"}> קורסים </NavLink> </li>
        </ul>
        <div className='bg-nav'></div>
      </nav>
      <div className='btnContainer'>
        <button onClick={() => { setMenuOpen(!menuOpen) }} className={`${menuOpen ? "closeBtn" : "barNav"}`}>
          {menuOpen ? <MdOutlineClose /> : <FaBars />}</button>
      </div>
      <h1>Shira<img src={logo} alt="logo" />Eyebrows</h1>
      <div className='btnContainer2'>
        <button className={"toCartIcon"} onClick={openCartMenu}><IoBagHandleSharp />  <span>({cartData?.items?.length})</span></button>
      </div>

    </header>
  )
}
