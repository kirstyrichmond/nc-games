import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../utils/api';

const Nav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then((categoriesFromApi) => {
            setCategories(categoriesFromApi)
        })
    }, [])

  return (
   <div className='nav'>
       {
           categories.map(category => {
               return <Link to={`/categories/${category.slug}`}>{categories.slug}</Link>
           })
       }
  </div>
  )
};

export default Nav;
