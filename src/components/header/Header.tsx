import React, { useState } from "react";

import "./header.css";

import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { FaTimes } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="header">
        <nav className="nav container">
          {/* NAV LOGO */}
          <a href="index.html" className="nav__logo">
            RHARDEV
          </a>

          {/* NAV MENU */}
          <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  <i className="nav__icon">
                    <BiHomeAlt />
                  </i>
                  <span>Home</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="nav__icon">
                    <AiOutlineUser className="nav__icon" />
                  </i>
                  <span>About</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="nav__icon">
                    <BsFileEarmarkText className="nav__icon" />
                  </i>
                  <span>Skills</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <MdOutlineDesignServices className="nav__icon" />
                  <span>Services</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <BiBriefcaseAlt2 className="nav__icon" />
                  <span>Portfolio</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <TbMessageCircle className="nav__icon" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>

            <i className="nav__close" onClick={handleToggleMenu}>
              <FaTimes className="" />
            </i>
          </div>

          {/* NAV TOGGLE */}
          <div className="nav__toggle" onClick={handleToggleMenu}>
            <i>
              <AiOutlineAppstore />
            </i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
