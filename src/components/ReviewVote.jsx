import React, { useContext, useState } from 'react';
import { patchReviewVote } from '../utils/api';
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import { UserContext } from './Contexts/User-Context';
import '../styles/vote.css'

const ReviewVote = ({ votes, owner, review_id }) => {
    const [voteChange, setVoteChange] = useState(0)
    const { loggedInUser } = useContext(UserContext)
    const isDisabled = loggedInUser.username === owner

    const upVote = () => {
        patchReviewVote(review_id, 1)
        setVoteChange((currChange) => currChange + 1)
    }
    
    const downVote = () => {
        patchReviewVote(review_id, -1)
        setVoteChange((currChange) => currChange - 1)
    }

  return (
    <div className='vote-container'>
        <div className='thumbs-up-btn'>
        <button disabled={isDisabled} onClick={() => upVote()} >
            <BsHandThumbsUp className='thumbs-up-outline' />
        </button>
        </div>
        <div className='vote-text'>
            { votes + voteChange}
        </div>
        <div className='thumbs-down-btn'>
        <button disabled={isDisabled} onClick={() => downVote()} >
            <BsHandThumbsDown className='thumbs-down-outline' />
        </button>
        </div>
    </div>
  )
};

export default ReviewVote;
