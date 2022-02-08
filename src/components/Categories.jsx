import React, { useEffect, useState } from 'react';
import { getCategories } from '../utils/api';
import '../styles/categories.css'
import { useParams } from 'react-router-dom';

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
                          <li className='category-list-item' key={category.category_id}>
                          <h3>{category.slug}</h3>
                          <p>{category.description}</p>
                          </li>
                          </>
                      )
                  })
              }
          </ul>
          
      </main>
  )
};

export default Categories;
