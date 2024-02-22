import React from 'react'
import header from "../assets/healtho-bg.png"
import '../App.css'

const Header = () => {
  return (
    <div className="header-section">
        <div className="title">
        Healthcare For <br/> The Next Generation
        </div>
        <div className="header-bg">
            <img className="bg-image" src={header} alt="gradient background with patient" />
        </div>
    </div>
  )
}

export default Header