import React, { useEffect, useState } from 'react';
import { getAllReviews } from '../utils/api';
import '../styles/review-list.css'
// import ReviewPage from './ReviewCard';
import { Link, useParams } from 'react-router-dom';
import SortAndOrderBy from '../components/SortAndOrderBy';
import PostReview from '../components/PostReview';
import Header from '../components/Header';
import Nav from '../components/Nav';
import moment from 'moment';
// import PostReviewModal from '../components/PostReviewModal';

const ReviewList = () => {
    const [reviews, setReviews] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const { category } = useParams()

    useEffect(() => {
        getAllReviews(category).then((getReviewsFromApi) => {
            setReviews(getReviewsFromApi)
            setIsLoading(false)
        })
    }, [category])

    const updateReviews = (reviews) => {
        setReviews(reviews)
    }
    console.log(reviews, "<< all the reviews");
    

    return isLoading ? (
        <h3>loading...</h3>
     ) : (
        <><Header /><Nav /><div className='review-list-main'>
                <h2 className='all-reviews-header'>{category ? category : "all reviews"}</h2>
                <div className='sort-by'>
                    <SortAndOrderBy updateReviews={updateReviews} category={category} />
                </div>
                <div className='post-review'>
                    {/* <Link to ="/add-review">
        <button type="submit">Add review</button>
      </Link> */}
                    <br />
                    <button className='open-modal-button' onClick={() => { setOpenModal(true); } }>Add review</button>
                    {openModal && <PostReview closeModal={setOpenModal} />}

                </div>
                <ul className='reviews-list'>
                    {reviews.map(review => {
                        return (
                            <Link to={`/review/${review.review_id}`} key={review.review_id}>
                                <li className='review-list-item'>
                                    <h3 className='review-list-title'>{review.title}</h3>
                                    <img className='review-list-photo' src={review.review_img_url} alt={review.title} />
                                    <p className='review-list-owner'>{review.owner}</p>
                                    <p className='review-list-category'>{review.category}</p>
                                    <p className='review-list-votes'>Votes: {review.votes}</p>
                                    <p className='review-list-comment-count'>Comments: {review.comment_count}</p>
                                    <p className='review-list-created-at'>{moment(review.created_at).startOf('hour').fromNow()}</p>

                                </li>
                            </Link>

                        );
                    })}
                </ul>
            </div></>
  )
};

export default ReviewList;
