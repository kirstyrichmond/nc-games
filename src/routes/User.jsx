import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllReviews, getUserByUsername } from "../utils/api";
import { UserContext } from "../components/Contexts/User-Context";
import "../styles/user.css";
import moment from "moment";
import { Box, CircularProgress } from "@mui/material";

const User = () => {
  const [singleUser, setSingleUser] = useState({});
  const { username } = useParams();
  const { loggedInUser } = useContext(UserContext);
  const [userReviews, setUserReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserByUsername(username).then((user) => {
      setSingleUser(user);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    getAllReviews().then((reviews) => {
      setUserReviews(reviews);
    });
  }, []);

  const justUserReviews = userReviews.filter((review) => {
    return review.owner === singleUser.username ? review : null;
  });

  return isLoading ? (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress size={65} className="loading-spinner" />
    </Box>
  ) : (
    <>
      <div>
        <p className="user-profile-name">{singleUser.name}</p>
        <h3 className="user-profile-username">{username}</h3>
        <img
          className="user-profile-photo"
          src={singleUser.avatar_url}
          alt={username}
        />
        <div>
          <h3>Reviews by {singleUser.username}</h3>
          <ul className="user-profile-review-list">
            {justUserReviews.map((review) => {
              return (
                <Link to={`/review/${review.review_id}`} key={review.review_id}>
                  <li className="user-profile-review">
                    <img
                      className="user-profile-review-photo"
                      src={review.review_img_url}
                      alt={review.title}
                    />
                    <div className="user-profile-review-info">
                      <h4>{review.title}</h4>
                      <p>{review.category}</p>
                      <p>
                        Votes:
                        {review.votes}
                      </p>
                      <p>
                        Comments:
                        {review.comment_count}
                      </p>
                      <p>
                        {moment(review.created_at).startOf("hour").fromNow()}
                      </p>
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default User;
