import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAllReviews, getComments, getReviewById, postComment } from '../utils/api';
import '../styles/review-card.css'
import Vote from './Vote';
import { UserContext } from './Contexts/User-Context';
import PostComment from './PostComment';
// import Comments from './Comments';
// import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";

const ReviewPage = () => {
    const [singleReview, setSingleReview] = useState({})
    const { review_id } = useParams()
    const { loggedInUser } = useContext(UserContext)
    
    const [comments, setComments] = useState([])
    
    useEffect(() => {
        getComments(review_id).then(comments => {
            setComments(comments)
        })
    }, [review_id])

    useEffect(() => {
        getReviewById(review_id).then(review => {
            setSingleReview(review)
            
        })
    }, [review_id])
    
  return (
      <div>
          <div className='review-card'>
          <h3 className='review-list-title'>{singleReview.title}</h3>
                <img className='review-list-photo' src={singleReview.review_img_url} alt={singleReview.title} />
                <p className='review-list-owner'>{singleReview.owner}</p>
                {/* <p className='review-list-votes'>Votes: {singleReview.votes}</p> */}
                <p className='review-list-comment-count'>Comments: {singleReview.comment_count}</p>
                <Link to={`/reviews/${singleReview.category}`}>
                    <p className='review-list-category'>{singleReview.category}</p>
                </Link>
                <p className='review-list-created-at'>{singleReview.created_at}</p>
                <Vote votes={singleReview.votes} owner={singleReview.owner} review_id={review_id} />
                {/* <div className='vote-container'>
                   <BsHandThumbsUp className='thumbs-up-outline' />
                   <BsHandThumbsDown className='thumbs-down-outline' />
                </div> */}
          </div>
          <div className='comments-container'>
              <h3>
                  Comments...
              </h3>
              <div>
                  <h3>
                      Write comment...
                  </h3>
                  <PostComment review_id={review_id} comments={comments} setComments={setComments} loggedInUser={loggedInUser} />
              </div>
              <div>
                  {
                      comments.map(comment => {
                          return (
                              <>
                                <li key={comment.body} className='comment-card'>
                                    <h4>{comment.body}</h4>
                                    <p>{comment.author}</p>
                                    <p>Votes: {comment.votes}</p>
                                    <p>{comment.created_at}</p>
                                </li>
                              </>
                          )
                      })
                  }
              </div>
          </div>
      </div>
  )
};

export default ReviewPage;
