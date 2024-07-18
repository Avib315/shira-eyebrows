import './footer.scss' 
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
export default function Footer(){
  return  (
    <footer className="footer">
      <div className="footer-content">
     
        <div className="footer-section links">
          <ul>
            <li><a href="/about">אודות</a></li>
            <li><a href="/services">שירותים</a></li>
            <li><a href="/contact">יצירת קשר</a></li>
            <li><a href="/privacy">מדיניות הפרטיות</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>צרו איתי קשר</h2>
          <p>אימייל: shira8866@gmail.com</p>
          <p>טלפון:0584777215</p>
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><AiFillTikTok/></a>
            <a href="https://www.instagram.com/shira_.eyebrows?igsh=MThqZjJ5dHV5MzNwYw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Shira Eyebrows. All rights reserved.
      </div>
    </footer>
  )
}
