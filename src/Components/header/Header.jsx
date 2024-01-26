/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import ME from '../../assets/me.png';
import CTA from './CTA';
import './Header.css';
import HeaderSocials from './HeaderSocials';
export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Silas AGBOGBA ZOUNON</h1>
        <h5 className="text-light">Ingenieur Logiciel</h5>
        <CTA/>
        <HeaderSocials/>


        <div className="me">
          <img src={ME} alt="me" />
        </div>

      <a href="#contact" className='scroll-down'>Glisser vers le bas</a>

      </div>
    </header>
  )
}
export default Header;