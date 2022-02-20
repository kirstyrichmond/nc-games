import React, { useEffect, useState } from 'react';
import { getCategories } from '../utils/api';
import '../styles/categories.css'
import { Link, useParams } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { slug } = useParams()

    useEffect(() => {
        getCategories().then((categoriesFromApi) => {
            setCategories(categoriesFromApi)
            setIsLoading(false)
        })
    }, [slug])

    return isLoading ? (
        <h3>loading...</h3>
     ) : (
        <><main className='categories-container'>
            <Link to={`/reviews`}>
                </Link>
                <ul className='categories-list'>
                    <li className='category-list-item all-categories'>
                    All Categories
                    </li>
                    {categories.map(category => {
                        return (
                            <Link to={`/reviews/${category.slug}`} key={category.slug}>
                                <li className={`category-list-item ${category.slug}`}>
                                    <h3>{category.slug}</h3>
                                    {/* <p>{category.description}</p> */}
                                </li>
                                <div>
                                    
                                </div>
                            </Link>
                        );
                    })}
                </ul>

            </main></>
  )
};

export default Categories;
