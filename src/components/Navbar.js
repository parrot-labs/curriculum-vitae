import React, { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom'
import './Sticky.scss';

const Navbar = () => {
    const listMenu = [ 'Home', 'About', 'Education', 'Skills', 'Contact'];
    const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };

  }, []);

  const handleScroll = () => {
    if (ref && ref.current && ref.current.getBoundingClientRect()) {
        setSticky(ref.current.getBoundingClientRect().top);
    }
  };

    return (
      <div className={`sticky__wrapper ${isSticky && 'sticky'}`} ref={ref}>
      <div className="sticky--inner"></div>
      <div className="header">
        {listMenu.map((name) => {
          return (
            <Link to={`/${name}`} key={name}>
              <div className="menu">{name}</div>
            </Link>
          );
        })}
      </div>
      </div>
    );
  };
  
  export default Navbar;
    