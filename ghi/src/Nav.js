import React, { useState } from 'react';
import SignUpForm from './accounts/SignUpForm';


function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav>
      <button className="menu-button" onClick={toggleMenu}>Menu</button>
      {isMenuOpen && (
        <ul className="menu">
          <li className="nav-li">Profile</li>
          <li className="nav-li">Home</li>
          <li className="nav-li">About</li>
          <li className="nav-li">Contact</li>
          <SignUpForm />
        </ul>
      )}
    </nav>
  );
}

export default Nav;

