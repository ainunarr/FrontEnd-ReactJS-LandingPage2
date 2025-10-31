import React, { Component } from "react";
import { NavStyle, UlStyle, AStyle } from "./StyledHeader";
import logo from './cafe.webp';

class Header extends Component {
    render() {
        return (
            <header>
                <NavStyle>
                    <img src={logo} style={{ height: "50px", width: "50px" }} alt="Logo"></img>
                    <UlStyle>
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
    }
}

export default Header;