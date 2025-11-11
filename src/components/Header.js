import React, { useState } from "react";
import { NavStyle, UlStyle, AStyle } from "./StyledHeader";
import logo from './cafe.webp';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <NavStyle>
        <img src={logo} style={{ height: "45px", width: "45px" }} alt="Logo" />
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
        <UlStyle className={isOpen ? "open" : ""}>
          <li><AStyle href="#home">Beranda</AStyle></li>
          <li><AStyle href="#about">Tentang Kami</AStyle></li>
          <li><AStyle href="#menu">Menu</AStyle></li> 
          <li><AStyle href="#shop">Belanja</AStyle></li> 
          <li><AStyle href="#contact">Kontak</AStyle></li> 
          <li><AStyle href="#testimonial">Testimoni</AStyle></li> 
        </UlStyle>
      </NavStyle>
    </header>
  );
};

export default Header;