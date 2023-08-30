import React, { useState, useEffect } from 'react';
import logoDekstop from './logoDesktop.svg';
import logoMobile from './logoMobile.svg';
import Navigation from '../Navigation/Navigation';
import './header.scss';

export default function Header() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        // Retirez l'écouteur d'événement lorsque le composant est démonté
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const logo = screenWidth <= 768 ? logoMobile : logoDekstop;
    return (
        <header>
            <img src={logo} alt="logo Kasa" />
            <Navigation />
        </header>
    )
    
}