import React from 'react';
import useScreenSize from '../../hooks/useScreenSize'
import logoDekstop from './logoDesktop.svg';
import logoMobile from './logoMobile.svg';
import Navigation from '../Navigation/Navigation';
import './header.scss';

export default function Header() {    
    const logo = useScreenSize() <= 768 ? logoMobile : logoDekstop;
    
    return (
        <header>
            <img src={logo} alt="logo Kasa" />
            <Navigation />
        </header>
    )
    
}