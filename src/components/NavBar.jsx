import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">MyShop</div>
        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Catalog</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
