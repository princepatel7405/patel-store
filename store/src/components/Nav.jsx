import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import "../styles/Nav.css";
import DrawerNavbar from "./DrawerNav";
const Nav = () => {
  return (
    <div className="nav-list">
      <NavLink to="/" className="nav-link">
        <h3>Home</h3>
      </NavLink>

      <NavLink to="/about" className="nav-link">
        <h3>About</h3>
      </NavLink>

      <NavLink to="/product" className="nav-link">
        <h3>Products</h3>
      </NavLink>

      <NavLink to="/contact" className="nav-link">
        <h3>Contact</h3>
      </NavLink>

      <NavLink to="/cart" className="nav-link">
        <div>
          <FiShoppingCart  className="nav-link-icon"/>
          <span className="nav-link-total-items">10</span>
        </div>
      </NavLink>
      <div className='nav-link-ham'>

      <DrawerNavbar />
      </div>
     
      

    </div>
  );
};

export default Nav;
