import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/header.css'
import { UserContext } from './Contexts/User-Context';

const Header = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const navigate = useNavigate()

    const logOut = () => {
      setLoggedInUser(null)
      navigate(`/`)
    }

  return <div className='header'>
      <Link to={`/`}>
        <h1 className='header-logo'>NC-Games</h1>
      </Link>

    {
      loggedInUser !== null ? 

      <div className='header-profile'>
        <Link to={`/users/${loggedInUser.username}`}>
           {/* <p className='header-name'>{loggedInUser.name}</p> */}
           <img className='header-profile-pic' alt={loggedInUser.name} src={loggedInUser.avatar_url} />
           </Link>
           <button onClick={() => logOut()}>log out</button>
       </div>

       : 

       null
      } 
       
  </div>;
};

export default Header;
