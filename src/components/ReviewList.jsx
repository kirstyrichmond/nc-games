import React, { useEffect, useState } from 'react';
import { getAllReviews } from '../utils/api';
import '../styles/review-list.css'
import ReviewPage from './ReviewPage';
import { Link } from 'react-router-dom';

const ReviewList = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        getAllReviews().then((getReviewsFromApi) => {
            setReviews(getReviewsFromApi)
        })
    }, [])

    console.log(reviews, "<< reviews: reviewList");
    

  return (
  <><div>
          <h1>All Reviews</h1>
          <ul className='reviews-list'>
              {reviews.map(review => {
                  return (
                      <>
                      <Link to={`/reviews/${review.review_id}`} >
                          <li className='review-list-item' key={review.review_id}>
                              <h3 className='review-list-title'>{review.title}</h3>
                              <p className='review-list-owner'>{review.owner}</p>
                              <img className='review-list-photo' src={review.review_img_url} alt={review.title} />
                              <p className='review-list-category'>{review.category}</p>
                              <p className='review-list-created-at'>{review.created_at}</p>
                              <p className='review-list-votes'>Votes: {review.votes}</p>
                              <p className='review-list-comment-count'>Comments: {review.comment_count}</p>

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
