import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../utils/api';
import '../styles/nav.css'

const Nav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then((categoriesFromApi) => {
            setCategories(categoriesFromApi)
        })
    }, [])

  return (
   <div className='nav'>
       <Link className='nav-link' to={`/categories`}>All categories | </Link>
       {
           categories.map(category => {
               return <Link key={category.slug} className='nav-link' to={`/categories/${category.slug}`}>{category.slug} | </Link>
           })
       }
       <Link className='nav-link' to={`/reviews`}>Reviews | </Link>
  </div>
  )
};

export default Nav;
