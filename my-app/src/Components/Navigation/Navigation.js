import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <button
        className={` ${isMenuOpen ? 'nav__menu_close' : 'nav__menu'}`}
        onClick={isMenuOpen ? handleCloseMenu : handleOpenMenu}
      />
      <div className={`nav ${isMenuOpen ? 'nav__open' : 'nav__hidden'}`}>
        <Link to="/" className="button nav__link">
          Home
        </Link>
        <Link to="/map" className="button nav__link">
          Map
        </Link>
        <Link to="about" className="button nav__link">
          About
        </Link>
      </div>
    </nav>
  );
}
