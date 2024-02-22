import React from 'react';
import logo from "../assets/HEALTHO.png";
import ForYou from './ForYou';
import WhyHealtho from './WhyHealtho';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = ({ setMenuVisible }) => {
  
  return (
    <>
    <nav className="navbar">
        <div className="nav-left">
            <img src={logo} alt="Healtho" />
        </div>
        <div className="nav-right">
            <li>Employers</li>
            <ForYou />
            <IoIosArrowDown className="arrow"/>
            <WhyHealtho />
            <IoIosArrowDown className="arrow"/>
        </div>
    </nav>
        <section className="nav-mobile">
            <img src={logo} className='logo-mobile' alt="Healtho" />
            <FaBars className="mobile-icon" onClick={() => setMenuVisible(true)}/>
        </section>
    </>
  )
}

export default Navbar