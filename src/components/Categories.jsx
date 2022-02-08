import React, { useEffect, useState } from 'react';
import { getCategories } from '../utils/api';
import '../styles/categories.css'
import { Link, useParams } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([])
    const { slug } = useParams()

    useEffect(() => {
        getCategories().then((categoriesFromApi) => {
            setCategories(categoriesFromApi)
        })
    }, [slug])

  return (
      <main className='categories'>
          <h2>All Categories</h2>
          <ul className='categories-list'>
              {
                  categories.map(category => {
                      return (
                          <>
                          <Link to={`/reviews/${category.slug}`}>
                          <li className='category-list-item' key={category.slug}>
                          <h3>{category.slug}</h3>
                          <p>{category.description}</p>
                          </li>
                          </Link>
                          </>
                      )
                  })
              }
          </ul>
          
      </main>
  )
};

export default Categories;
