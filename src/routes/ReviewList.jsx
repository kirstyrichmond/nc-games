import React, { useEffect, useState } from 'react';
import { getAllReviews } from '../utils/api';
import '../styles/review-list.css'
// import ReviewPage from './ReviewCard';
import { Link, useParams } from 'react-router-dom';
import SortAndOrderBy from '../components/SortAndOrderBy';
import PostReview from '../components/PostReview';
import moment from 'moment';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Icon, Modal, Typography } from '@mui/material';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import PostReviewModal from '../components/PostReviewModal';
<FontAwesomeIcon icon="fa-solid fa-circle-plus" />

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ReviewList = () => {
    const [reviews, setReviews] = useState([])
    // const [openModal, setOpenModal] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const { category } = useParams()

    useEffect(() => {
        getAllReviews(category).then((getReviewsFromApi) => {
            setReviews(getReviewsFromApi)
            setIsLoading(false)
        })
    }, [category])

    useEffect(() => {
        getAllReviews().then((data) => {
          setReviews(data);
        });
      }, []);

    const updateReviews = (reviews) => {
        setReviews(reviews)
    }
    console.log(reviews, "<< all the reviews");
    

    return isLoading ? (
        <h3>loading...</h3>
     ) : (
        <><div 
        className='review-list-main'>
                <h2 className='all-reviews-header'>{category ? category : "all reviews"}</h2>
                <div className='sort-by'>
                    <SortAndOrderBy updateReviews={updateReviews} category={category} />
                </div>
                <div className='post-review'>
                    {/* <Link to ="/add-review">
        <button type="submit">Add review</button>
      </Link> */}
      {/* <FontAwesomeIcon icon="fa-regular fa-circle-plus" /> */}
                    <br />
                    
                    {/* <button className='open-modal-button' onClick={() => { setOpenModal(true); } }>
                        <Fab color="primary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </button> */}

                    <Button onClick={() => { handleOpen(true)}}>
                    <Fab color="primary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </Button>
                    <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                    <Box sx={style}>
                        <div className='title-close-btn'>
                            <button onClick={() => handleClose()}>X</button>
                        </div>
                        {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add a review:
                        </Typography> */}
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <PostReview handleClose={handleClose} />
                        </Typography>
                    </Box>

                    </Modal>
                    {/* {open && <PostReview closeModal={setOpen} />} */}

                </div>
                <ul className='reviews-list'>
                    {reviews.map(review => {
                        return (
                            <Link to={`/review/${review.review_id}`} key={review.review_id}>
                                <li className='review-list-item'>
                                    <div className='name-created-at'>
                                        <div className='review-list-owner'>
                                    <p>{review.owner}</p>
                                        </div>
                                        <div className='review-list-created-at'>
                                    <p>{moment(review.created_at).startOf('hour').fromNow()}</p>
                                        </div>
                                    </div>
                                    <img className='review-list-photo' src={review.review_img_url} alt={review.title} />
                                    <h3 className='review-list-title'>{review.title}</h3>
                                    <div>
                                        <div className='review-list-votes'>
                                    <p> {review.votes} votes</p>
                                    <div className='review-list-category'>
                                    <p>{review.category}</p>
                                    </div>
                                            <div className='comment-count'>
                                                <ChatBubbleOutlineRoundedIcon /> 
                                            {review.comment_count}
                                        </div>
                                    </div>
                                    </div>
                                </li>
                            </Link>

                        );
                    })}
                </ul>
            </div></>
  )
};

export default ReviewList;
