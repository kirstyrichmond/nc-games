import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'
import { UserContext } from './Contexts/User-Context';

const Header = () => {
    const { loggedInUser } = useContext(UserContext)


  return <div className='header'>
      <Link to={`/`}>
        <h1 className='header-logo'>NC-Games</h1>
      </Link>
      <div className='header-profile'>
           {/* <p className='header-name'>{loggedInUser.name}</p> */}
           <img className='header-profile-pic' alt={loggedInUser.name} src={loggedInUser.avatar_url} />
       </div>
  </div>;
};

export default Header;
