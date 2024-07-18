import { useState } from 'react'
import './accordion.scss'
import { IoIosArrowDown } from "react-icons/io";
export default function Accordion({ title = "תיאור", children, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen)
    return (
        <div className='Accordion'>
            <button className='btnToggle' onClick={() => { setIsOpen(!isOpen) }}><h3> {title}:</h3> <span className={`arrow${isOpen ? " arrowClose" : ""}`}><IoIosArrowDown /></span></button>
            {isOpen && children }
        </div>
    )
}
