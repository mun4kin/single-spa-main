import React from 'react';
import './navbarApp.css';
import { HashRouter, Link } from 'react-router-dom';

const Navbar: React.FC = () => {

  return (
    <>
      <div className='navbar-app'>
        <HashRouter>
          <Link className='nav__link' to='/worktime'>Worktime</Link>
          <Link className='nav__link' to='/app2'>App 2</Link>
        </HashRouter>
      </div>
    </>
  );
};

export default Navbar;
