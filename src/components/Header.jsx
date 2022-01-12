import React from 'react';

import Logo from "../img/Netflix-Logo.png";
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
          <img src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png' alt='imagem usuario'/>
        </a>
      </div>
    </header>
   );
}
 
export default Header;