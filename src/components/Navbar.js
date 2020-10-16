import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    const listMenu = [ 'Home', 'About', 'Education', 'Skills', 'Contact'];
    return (
      <div className="header">
        {listMenu.map((name) => {
          return (
            <Link to={`/${name}`} key={name}>
              <div className="menu">{name}</div>
            </Link>
          );
        })}
      </div>
    );
  };
  
  export default Navbar;
    