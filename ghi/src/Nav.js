import React, { useState } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <button className="menu-button" onClick={toggleMenu}>
        Menu
      </button>
      {isMenuOpen && (
        <ul className="menu">
          <li className="nav-li">Home</li>
          <li className="nav-li">About</li>
          <li className="nav-li">Contact</li>
        </ul>
      )}
    </nav>
  );
}

export default Nav;
