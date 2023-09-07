import { Link } from 'react-router-dom';
import useScreenSize from '../../hooks/useScreenSize'
import logoDekstop from './logoDesktop.svg';
import logoMobile from './logoMobile.svg';
import Navigation from '../Navigation/Navigation';
import './header.scss';

export default function Header() {    
    const logo = useScreenSize() <= 768 ? logoMobile : logoDekstop;
    
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="logo Kasa" />
            </Link>            
            <Navigation />
        </header>
    )    
}