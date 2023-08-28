import logoWhite from './logoWhite.svg';
import './footer.scss';

export default function Footer() {
  return (
    <footer>
      <img src={logoWhite} alt="logo Kasa en noir et blanc" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}