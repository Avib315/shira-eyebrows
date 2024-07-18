import { NavLink, useNavigate } from 'react-router-dom'
import './adminHeader.scss'
import { MdOutlineClose, MdOutlineShoppingCart } from "react-icons/md";
import { BsCartPlusFill } from "react-icons/bs";
import logo from '../../../assets/logo.svg'
import { IoHome } from "react-icons/io5";
import { FaBars, FaClipboard } from 'react-icons/fa';
import { useState } from 'react';
import { CiLogout } from "react-icons/ci";

export default function AdminHeader() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false);
  const navList = [
    { link: "/admin/home", text: "מסך הבית", icon: <IoHome /> },
    { link: "/admin/products", text: "מוצרים", icon: <BsCartPlusFill /> },
    { link: "/admin/orders", text: "הזמנות", icon: <FaClipboard /> }
  ]
  const setNavigate = (to) => {
    setMenuOpen(false)
    navigate(to)
  }
  function logOutClickHandler() {
    // Add logout functionality here
    navigate("/admin/login")
    // Example:
    // localStorage.removeItem('token');
    // history.push('/');  // Redirect to home page after logout
  }
  return (
    <header className='AdminHeader'>
      <div className='logo'>
        <h1>Shira<img src={logo} alt="logo" />Eyebrows</h1>
      </div>
      <button onClick={() => { setMenuOpen(!menuOpen) }} className={`toggleNav${menuOpen ? " closeBtn" : " barNav"}`}>
        {menuOpen ? <MdOutlineClose /> : <FaBars />}</button>
      <nav className={`nav ${!menuOpen ? "closeNav" : "openNav"}`}>
        <ul>
          {navList.map((li) => (<li key={"li" + li.link}> <button className='navBtns' onClick={() => { setNavigate(li.link) }}><span>{li.icon}</span>{li.text}</button></li>))}
        </ul>
        <button className='logOut' onClick={logOutClickHandler}>התנתקות <span><CiLogout /></span></button>
      <div className='bg-nav sm'></div>
      </nav>
      <div className='bg-nav xl'></div>
    </header>
  )
}
