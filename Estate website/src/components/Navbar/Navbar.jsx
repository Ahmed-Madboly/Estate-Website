import { useState,useRef, useEffect } from 'react';
import './navbar.css'
import {BiMenuAltRight} from "react-icons/bi";
import {MdOutlineClose} from "react-icons/md"

function Navbar() {
    const [active,setActive] = useState(false)
    const menuRef = useRef();

    useEffect(()=>{
        const handleClick = (e)=>{
            if(!menuRef.current.contains(e.target)){
                setActive(prev=>false)
            }
        }
        document.addEventListener("mousedown",handleClick)
        return ()=>{
            document.removeEventListener("mousedown",handleClick)
        }
    })
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <img src="./madbouly.png"  width={160} alt=""/>
                </div>
                <div className="menu-icon" onClick={()=>setActive(prev=>!prev)}>
                    {
                        !active?(<BiMenuAltRight/>):(<MdOutlineClose/>)
                    }
                </div>
                <div ref={menuRef} className={active?"menu active":"menu"}>
                    <a href="#">Recidencies</a>
                    <a  href="#">Our Value</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Get Started</a>
                    <button className="button n-button">Contact</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar