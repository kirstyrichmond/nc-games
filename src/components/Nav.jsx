import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../utils/api';
import { UserContext } from './Contexts/User-Context';
import '../styles/nav.css'

const Nav = () => {
    const [categories, setCategories] = useState([])

    // const { loggedInUser } = useContext(UserContext)


    useEffect(() => {
        getCategories().then((categoriesFromApi) => {
            setCategories(categoriesFromApi)
        })
    }, [])

  return (
   <div className='nav'>
       <Link className='nav-link' to={`/categories`}>All categories | </Link>
       <Link className='nav-link' to={`/reviews`}>All Reviews  </Link>
       {/* <div className='nav-profile'>
           <p>{loggedInUser.name}</p>
           <img className='nav-profile-pic' alt={loggedInUser.name} src={loggedInUser.avatar_url} />
       </div> */}
  </div>
  )
};

export default Nav;
