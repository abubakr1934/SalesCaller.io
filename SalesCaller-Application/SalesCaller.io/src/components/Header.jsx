import React from 'react';
import '../App.css';
import { IoLogIn } from "react-icons/io5";
import { LiaSignInAltSolid } from "react-icons/lia";

const Header = () => {
  return (
    <div className="whole-header">
      <div className="container1 flex-container">
        <header className="d-flex justify-content-between align-items-center py-3 fixed-top nav-color">
          <div className="navbar-wrapper d-flex align-items-center">
            <ul className="nav nav-pills align-items-center">
              <li className="nav-item">
                <a href="#" className="nav-link p-0" aria-current="page">
                  <img src="https://salescaller.io/website_assets/images/HeaderLogo.svg" alt="Home" className="home-image" />
                </a>
              </li>   
              <li className="navnav nav-item">
                <a href="#" className="nav-link text-white"><b style={{ fontWeight: "bold", fontSize: "1.1rem", fontFamily: "Arial, sans-serif" }}>Home</b></a>
              </li>
              <li className="navnav dropdown">
                <a href="javascript:void(0)" className="nav-link text-white drop-btn">For Business</a>
                <div className='dropdown-content'>
                  <a href="#"> Finance</a>
                  <a href="#">Real Estate</a>
                  <a href="#">Automotive Industry</a>
                  <a href="#">Healthcare</a>
                  <a href="#">B2B Sales Management</a>
                </div>
              </li>
              <li className="navnav "><a href="#" className="nav-link text-white">Pricing</a></li>
              <li className="navnav "><a href="#" className="nav-link text-white">Features</a></li>
              <li className="navnav "><a href="#" className="nav-link text-white">Contact us</a></li>
              <li className="navnav "><a href="#" className="nav-link text-white">Blogs</a></li>
            </ul>
          </div>
          <div className="header-button">
            <button type="button" className="btn-clr"><span> <IoLogIn /> Login</span></button>
            <button type="button" className="btn-clr"><span><LiaSignInAltSolid />Signup</span></button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
