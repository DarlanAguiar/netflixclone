import React from 'react';

import Logo from "../img/Netflix-Logo.png";
import logoUser from "../img/logo_usuario.png"
import "./Header.css"


const Header = ({black}) => {
  return ( 
    <header className={black ? "black" : ""}>
      <div className='header--logo'>
        <a href='/'>
          <img src={Logo} alt='logo netflix'/>
        </a>
      </div>
      <div className='header--user'>
        <a href='/'>
          <img src={logoUser} alt='imagem usuario'/>
        </a>
      </div>
    </header>
   );
}
 
export default Header;