import React, { useEffect, useState } from 'react';
import { getCategories } from '../utils/api';
import '../styles/categories.css'
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';

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
        <><Header /><Nav /><main className='categories'>
            <Link to={`/reviews`}>
                <h3 className='all-categories'>All Categories</h3>
                </Link>
                <ul className='categories-list'>
                    {categories.map(category => {
                        return (
                            <Link to={`/reviews/${category.slug}`} key={category.slug}>
                                <li className={`category-list-item ${category.slug}`}>
                                    <h3>{category.slug}</h3>
                                    {/* <p>{category.description}</p> */}
                                </li>
                            </Link>
                        );
                    })}
                </ul>

            </main></>
  )
};

export default Categories;
