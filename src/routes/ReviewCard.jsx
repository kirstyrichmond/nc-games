import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  deleteReview,
  getAllReviews,
  getComments,
  getReviewById,
  postComment,
} from "../utils/api";
import "../styles/review-card.css";
import Vote from "../components/ReviewVote";
import { UserContext } from "../components/Contexts/User-Context";
import PostComment from "../components/PostComment";
import DeleteComment from "../components/CommentCard";
import moment from "moment";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import { Box, CircularProgress } from "@mui/material";
// import Comments from './Comments';
// import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";

const ReviewPage = () => {
  const [singleReview, setSingleReview] = useState({});
  const { review_id } = useParams();
  const { loggedInUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //     // getComments(review_id).then(commentsResponse => {
  //     //     // setComments(comments)
  //     //     const displayComments = [commentsResponse, comments]
  //     //     return displayComments
  //     // })
  // }, [review_id, comments])

  useEffect(() => {
    getReviewById(review_id)
      .then((review) => {
        setSingleReview(review);
        console.log(review.comment_count, "<< review");
        // if(review.comment_count > 0) {
        //     getComments(review_id).then(commentsResponse => {
        //         console.log("<< are comments");
        //         // setComments(comments)
        //         const displayComments = [commentsResponse, comments]
        //         return displayComments
        //     })
        // }
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [comments]);

  const handleDelete = () => {
    deleteReview(singleReview.review_id).then(() => {
      navigate(`/reviews`);
    });
  };

  if (error) {
    return (
      <div>
        <p className="message">That review does not exist.</p>
        <p className="redirect-message">
          Click{" "}
          <a className="redirect" href="/reviews">
            {" "}
            here{" "}
          </a>{" "}
          to head back to the reviews.
        </p>
      </div>
    );
  } else {
    return isLoading ? (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress size={65} className="loading-spinner" />
      </Box>
    ) : (
      <>
        <>
          <div className="review-card">
            <div>
              {loggedInUser?.username === singleReview.owner ? (
                <button onClick={() => handleDelete()}>Delete</button>
              ) : null}
            </div>
            <div className="name-created-at">
              <div className="review-list-owner">
                <p>{singleReview.owner}</p>
              </div>
              <div className="review-list-created-at">
                <p className="review-list-created-at">
                  {moment(singleReview.created_at).startOf("hour").fromNow()}
                </p>
              </div>
            </div>

            <h3 className="review-list-title">{singleReview.title}</h3>
            <img
              className="review-list-photo"
              src={singleReview.review_img_url}
              alt={singleReview.title}
            />
            {/* <p className='review-list-owner'>{singleReview.owner}</p> */}
            {/* <p className='review-list-votes'>Votes: {singleReview.votes}</p> */}
            <p>{singleReview.designer}</p>
            <p>{singleReview.review_body}</p>
            <Link to={`/reviews/${singleReview.category}`}>
              <p className="review-list-category">{singleReview.category}</p>
            </Link>
            {/* <p className='review-list-created-at'>{moment(singleReview.created_at).startOf('hour').fromNow()}</p> */}
            <div className="vote-comment-count">
              <Vote
                votes={singleReview.votes}
                owner={singleReview.owner}
                review_id={review_id}
              />
              <div className="comment-count">
                <ChatBubbleOutlineRoundedIcon />
                {singleReview.comment_count}
              </div>
            </div>
          </div>
          <div className="comments-container">
            <h3>Comments({singleReview.comment_count})</h3>
            <div>
              <PostComment
                singleReview={singleReview}
                review_id={review_id}
                comments={comments}
                setComments={setComments}
                loggedInUser={loggedInUser}
              />
            </div>
            <div>
              {comments.map((comment) => {
                return (
                  <li key={comment.body} className="comment-card">
                    <div className="comment-name-date">
                      <p>{comment.author}</p>
                      {/* <p>Votes: {comment.votes}</p> */}
                      <p>
                        posted{" "}
                        {moment(comment.created_at).startOf("hour").fromNow()}
                      </p>
                    </div>
                    <h4 className="comment-body">{comment.body}</h4>
                    <DeleteComment
                      comment={comment}
                      review_id={review_id}
                      setComments={setComments}
                    />
                  </li>
                );
              })}
            </div>
          </div>
        </>
      </>
    );
  }
};

export default ReviewPage;
