import React, { useContext, useEffect, useState } from "react";
import { patchReviewVote } from "../utils/api";
import {
  BsHandThumbsDown,
  BsHandThumbsUp,
  BsHandThumbsUpFill,
  BsHandThumbsDownFill,
} from "react-icons/bs";
import { UserContext } from "./Contexts/User-Context";
import "../styles/vote.css";

const ReviewVote = ({ votes, owner, review_id }) => {
  const [voteChange, setVoteChange] = useState(0);
  const { loggedInUser } = useContext(UserContext);
  const isDisabled = loggedInUser?.username === owner;
  const [upVote, setUpVote] = useState(false);
  const [downVote, setDownVote] = useState(false);

  const upVoteFunc = () => {
    if (!upVote) {
      patchReviewVote(review_id, 1).then(() => {
        setVoteChange((currChange) => currChange + 1);
        setUpVote(true);
        setDownVote(false);
      });
    } else {
      setVoteChange((currChange) => currChange - 1);
      patchReviewVote(review_id, -1);
      setUpVote(false);
      setDownVote(false);
    }
  };

  const downVoteFunc = () => {
    if (!downVote) {
      patchReviewVote(review_id, -1).then(() => {
        setVoteChange((currChange) => currChange - 1);
        setDownVote(true);
        setUpVote(false);
      });
    } else {
      setVoteChange((currChange) => currChange + 1);
      patchReviewVote(review_id, 1);
      setDownVote(false);
      setUpVote(false);
    }
  };

  return (
    <div className="vote-container">
      <div className="thumbs-up-btn">
        <button
          className="vote-button"
          disabled={isDisabled}
          onClick={() => upVoteFunc()}
        >
          {upVote ? (
            <BsHandThumbsUpFill className="thumbs-down-fill" />
          ) : (
            <BsHandThumbsUp className="thumbs-down-outline" />
          )}
        </button>
      </div>
      <div className="vote-text">{votes + voteChange}</div>
      <div className="thumbs-down-btn">
        <button
          className="vote-button"
          disabled={isDisabled}
          onClick={() => downVoteFunc()}
        >
          {downVote ? (
            <BsHandThumbsDownFill className="thumbs-down-fill" />
          ) : (
            <BsHandThumbsDown className="thumbs-down-outline" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ReviewVote;
