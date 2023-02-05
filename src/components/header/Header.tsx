import React from "react";

import "./header.css";

import { FaBeer } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            RHARDEV
          </a>

          <div className="nav__menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <FaBeer className="nav__icon" />
                  Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <FaBeer className="nav__icon" />
                  About
                </a>
              </li>

              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <FaBeer className="nav__icon" />
                  Skills
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <FaBeer className="nav__icon" />
                  Services
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <FaBeer className="nav__icon" />
                  Portfolio
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <FaBeer className="nav__icon" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
