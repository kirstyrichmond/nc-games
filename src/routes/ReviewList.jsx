import React, { useContext, useEffect, useState } from "react";
import { getAllReviews, getCategories, postReview } from "../utils/api";
import "../styles/review-list.css";
// import ReviewPage from './ReviewCard';
import { Link, useNavigate, useParams } from "react-router-dom";
import SortAndOrderBy from "../components/SortAndOrderBy";
import moment from "moment";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  CircularProgress,
  Icon,
  Modal,
  Typography,
} from "@mui/material";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../components/Contexts/User-Context";
// import PostReviewModal from '../components/PostReviewModal';
<FontAwesomeIcon icon="fa-solid fa-circle-plus" />;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  // const [openModal, setOpenModal] = useState(false)
  const [isLoading, setIsLoading] = useState(true);

  const PostReview = ({ handleClose, reviews }) => {
    const { loggedInUser } = useContext(UserContext);
    // const [addReview, setAddReview] = useState("")
    const [newReviewTitle, setNewReviewTitle] = useState("");
    const [newReviewPhoto, setNewReviewPhoto] = useState("");
    const [newReviewBody, setNewReviewBody] = useState("");
    const [newReviewDesigner, setNewReviewDesigner] = useState("");
    const [newReviewCategory, setNewReviewCategory] = useState("");

    const handleTitleChange = (event) => {
      setNewReviewTitle(event.target.value);
    };

    const handlePhotoChange = (event) => {
      setNewReviewPhoto(event.target.value);
    };

    const handleBodyChange = (event) => {
      setNewReviewBody(event.target.value);
    };

    const handleDesignerChange = (event) => {
      setNewReviewDesigner(event.target.value);
    };

    const handleCategoryChange = (event) => {
      setNewReviewCategory(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      const newReview = {
        title: newReviewTitle,
        owner: loggedInUser.username,
        review_img_url: newReviewPhoto,
        review_body: newReviewBody,
        designer: newReviewDesigner,
        category: newReviewCategory,
      };

      postReview(newReview)
        .then((review) => {
          const updatedList = [...review, ...reviews];
          setReviews(updatedList);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return (
      <>
        <div></div>
        <div>
          <h3>Add review:</h3>
          <form onSubmit={handleSubmit}>
            {/* <label>Title:</label> */}
            <input
              required
              type="text"
              value={newReviewTitle}
              id="reviewTitle"
              name="reviewTitle"
              placeholder="title"
              onChange={handleTitleChange}
            />
            <br />
            {/* <label>Photo URL:</label> */}
            <input
              type="url"
              value={newReviewPhoto}
              id="reviewPhoto"
              name="reviewPhoto"
              placeholder="photo URL"
              onChange={handlePhotoChange}
            />
            <br />
            {/* <label>Description:</label> */}
            <input
              type="text"
              value={newReviewBody}
              id="reviewBody"
              name="reviewBody"
              placeholder="description"
              onChange={handleBodyChange}
            />
            <br />
            {/* <label>Designer:</label> */}
            <input
              type="text"
              value={newReviewDesigner}
              id="reviewDesigner"
              name="reviewDesigner"
              placeholder="designer"
              onChange={handleDesignerChange}
            />
            <br />
            <select
              value={newReviewCategory}
              name="reviewCategory"
              id="reviewCategory"
              onChange={handleCategoryChange}
            >
              <option value="" disabled defaultValue>
                Select Category
              </option>
              <option key="strategy" value="strategy">
                strategy
              </option>
              <option key="hidden-roles" value="hidden-roles">
                hidden-roles
              </option>
              <option key="dexterity" value="dexterity">
                dexterity
              </option>
              <option key="push-your-luck" value="push-your-luck">
                push-your-luck
              </option>
              <option key="roll-and-write" value="roll-and-write">
                roll-and-write
              </option>
              <option key="deck-building" value="deck-building">
                deck-building
              </option>
              <option key="engine-building" value="engine-building">
                engine-building
              </option>

              {/* {
                            categories.map((categoryOption) => {
                              return (
                                  <option>
                                      {categoryOption.category}
                                  </option>
                              )
                          })
                          } */}
            </select>
            <br />
            <button type="submit" value="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  };

  const { category } = useParams();

  useEffect(() => {
    getAllReviews(category).then((getReviewsFromApi) => {
      setReviews(getReviewsFromApi);
      setIsLoading(false);
    });
  }, [category]);

  // useEffect(() => {
  //     getAllReviews().then((data) => {
  //       setReviews(data);
  //     })

  //   }, []);

  const updateReviews = (reviews) => {
    setReviews(reviews);
  };

  return isLoading ? (
    <CircularProgress size={65} className="loading-spinner" />
  ) : (
    <>
      <div className="review-list-main">
        <h2 className="all-reviews-header">
          {category ? category : "all reviews"}
        </h2>
        <div className="sort-by">
          <SortAndOrderBy updateReviews={updateReviews} category={category} />
          <PostReview reviews={reviews} />
        </div>

        <div className="post-review"></div>
        <ul className="reviews-list">
          {reviews.map((review) => {
            return (
              <Link to={`/review/${review.review_id}`} key={review.review_id}>
                <li className="review-list-item">
                  <div className="name-created-at">
                    <div className="review-list-owner">
                      <p>{review.owner}</p>
                    </div>
                    <div className="review-list-created-at">
                      <p>
                        {moment(review.created_at).startOf("hour").fromNow()}
                      </p>
                    </div>
                  </div>
                  <img
                    className="review-list-photo"
                    src={review.review_img_url}
                    alt={review.title}
                  />
                  <h3 className="review-list-title">{review.title}</h3>
                  <div>
                    <div className="review-list-votes">
                      <p> {review.votes} votes</p>
                      <div className="review-list-category">
                        <p>{review.category}</p>
                      </div>
                      <div className="comment-count">
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
      </div>
    </>
  );
};

export default ReviewList;
