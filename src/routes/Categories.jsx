import React, { useContext, useEffect, useState } from "react";
import { getCategories } from "../utils/api";
import "../styles/categories.css";
import { Link, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import "../styles/userlogin.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
      setIsLoading(false);
    });
  }, [slug]);

  return isLoading ? (
    <CircularProgress size={65} className="loading-spinner" />
  ) : (
    <>
      <main className="categories-container">
        <ul className="categories-list">
          <Link to={`/reviews`}>
            <li className="category-list-item all-categories">
              All Categories
            </li>
          </Link>
          {categories.map((category) => {
            return (
              <Link to={`/reviews/${category.slug}`} key={category.slug}>
                <li className={`category-list-item ${category.slug}`}>
                  <h3>{category.slug}</h3>
                </li>
                <div></div>
              </Link>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Categories;
