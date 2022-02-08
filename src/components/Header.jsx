import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'

const Header = () => {
  return <div>
      <Link to={`/`}>
        <h1 className='header-logo'>NC-Games</h1>
      </Link>
  </div>;
};

export default Header;
