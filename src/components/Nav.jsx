import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getCategories } from '../utils/api';
import { UserContext } from './Contexts/User-Context';
import '../styles/nav.css'
import MobileSidebar from './MobileSidebar';

const Nav = () => {
    const [categories, setCategories] = useState([])
    let location = useLocation()

    const { loggedInUser } = useContext(UserContext)


    useEffect(() => {
        getCategories().then((categoriesFromApi) => {
            setCategories(categoriesFromApi)
        })
    }, [])


  return (

   <div className='nav'>
       <MobileSidebar />
       {/* <Link className='nav-link' to={`/categories`}>All Categories | </Link>
       <Link className='nav-link' to={`/reviews`}>All Reviews | </Link>
       <Link className='nav-link' to={`/users`}>
           All Users
       </Link> */}
       {/* <div className='nav-profile'>
           <p>{loggedInUser.name}</p>
           <img className='nav-profile-pic' alt={loggedInUser.name} src={loggedInUser.avatar_url} />
       </div> */}
  </div>
  )
};

export default Nav;
