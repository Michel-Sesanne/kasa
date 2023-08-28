import React from 'react';
import logoDekstop from './logoDesktop.svg';
import logoMobile from './logoMobile.svg';
import Navigation from '../Navigation/Navigation';
import './header.scss';

export default function Header() {
    const screenWidth = window.innerWidth;
    const logo = screenWidth <= 768 ? logoMobile : logoDekstop;
    return (
        <header>
            <img src={logo} alt="logo Kasa" />
            <Navigation />
        </header>
    )
    
}