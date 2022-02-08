import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllReviews, getReviewById } from '../utils/api';

const ReviewPage = () => {
    const [singleReview, setSingleReview] = useState({})
    const { review_id } = useParams()
    
    
    useEffect(() => {
        getReviewById(review_id).then(review => {
            setSingleReview(review)
            console.log(review)
        })
    }, [review_id])
    
    
        console.log(review_id, "<< review id: review page");
        console.log(singleReview, "<< single review")

  return (
      <div>
          <h2>Review</h2>
          <div>
          <h3 className='review-list-title'>{singleReview.title}</h3>
                <p className='review-list-owner'>{singleReview.owner}</p>
                <img className='review-list-photo' src={singleReview.review_img_url} alt={singleReview.title} />
                <p className='review-list-category'>{singleReview.category}</p>
                <p className='review-list-created-at'>{singleReview.created_at}</p>
                <p className='review-list-votes'>Votes: {singleReview.votes}</p>
                <p className='review-list-comment-count'>Comments: {singleReview.comment_count}</p>
          </div>
      </div>
  )
};

export default ReviewPage;
