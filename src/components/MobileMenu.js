import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import '../App.css'

const MobileMenu = ({ menuVisible, setMenuVisible }) => {
    console.log("menuVisible:", menuVisible);
  return (
    <section className={`mobile-menu ${menuVisible ? 'isVisible' : ''}`}>
    <IoCloseOutline className="close-icon" onClick={() => setMenuVisible(false)} />
    <nav className="mobile-nav">
        <div className="for-you-section">
            <li>For You</li>
            <div className="for-you-items">
                <li>Children</li>
                <li>Adolescents</li>
                <li>Adults</li>
                <li>Seniors</li>
            </div>
        </div>
        <div className="why-healtho-section">
            <li>Why Healtho</li>
            <div className="for-you-items">
                <li>About Us</li>
                <li>Solutions</li>
                <li>Resources</li>
            </div>
        </div>
    </nav>
    </section>
  )
}

export default MobileMenu