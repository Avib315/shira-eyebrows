import './header.scss'
import logo from '../../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import { MdDashboard, MdOutlineClose } from "react-icons/md";
import { BsCartPlusFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { FaBars, FaClipboard } from 'react-icons/fa';
import { useState } from 'react';
import { CiLogout } from "react-icons/ci";
import { UseUserInfo } from '../../store/UseUserInfo';

export default function Header() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false);
  const logout = UseUserInfo(state => state.logout)
  const navList = [
    { link: "/", text: "מסך הבית", icon: <IoHome /> },
    { link: "/dashboard", text: "דשבורד", icon: <MdDashboard /> },
    { link: "/products", text: "מוצרים", icon: <BsCartPlusFill /> },
    { link: "/orders", text: "הזמנות", icon: <FaClipboard /> }
  ]
  const setNavigate = (to) => {
    setMenuOpen(false)
    navigate("/admin" + to)
  }
  function logOutClickHandler() {
    logout()
  }
  return (
    <header className='header'>
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
