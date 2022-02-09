import React, { useEffect, useState } from 'react';
import { getAllReviews } from '../utils/api';
import '../styles/review-list.css'
import ReviewPage from './ReviewPage';
import { Link, useParams } from 'react-router-dom';
import SortAndOrderBy from './SortAndOrderBy';

const ReviewList = () => {
    const [reviews, setReviews] = useState([])

    const { category } = useParams()

    useEffect(() => {
        getAllReviews(category).then((getReviewsFromApi) => {
            setReviews(getReviewsFromApi)
        })
    }, [category])

    const updateReviews = (reviews) => {
        setReviews(reviews)
    }
    

  return (
  <><div className='review-list-main'>
          <h2 className='all-reviews-header'>{category ? category : "all reviews"}</h2>
          <div className='sort-by'>
              <SortAndOrderBy updateReviews={updateReviews} category={category} />
          </div>
          <ul className='reviews-list'>
              {reviews.map(review => {
                  return (
                      <>
                      <Link to={`/review/${review.review_id}`} >
                          <li className='review-list-item' key={review.review_id}>
                              <h3 className='review-list-title'>{review.title}</h3>
                              <img className='review-list-photo' src={review.review_img_url} alt={review.title} />
                              <p className='review-list-owner'>{review.owner}</p>
                              <p className='review-list-category'>{review.category}</p>
                              <p className='review-list-votes'>Votes: {review.votes}</p>
                              <p className='review-list-comment-count'>Comments: {review.comment_count}</p>
                              <p className='review-list-created-at'>{review.created_at}</p>

                          </li>
                          </Link>
                      </>
                  );
              })}
          </ul>
      </div></>
  )
};

export default ReviewList;
