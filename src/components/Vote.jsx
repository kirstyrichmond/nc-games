import React, { useContext, useState } from 'react';
import { patchVote } from '../utils/api';
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import { UserContext } from './Contexts/User-Context';

const Vote = ({ votes, owner, review_id }) => {
    const [voteChange, setVoteChange] = useState(0)
    const { loggedInUser } = useContext(UserContext)

    console.log(votes, "<< vote: vote.jsx")
    console.log(voteChange, "<< vote change : vote.jsx");


    const upVote = () => {
        patchVote(review_id)
        setVoteChange((currChange) => currChange + 1)
    }
    
    const downVote = () => {
        patchVote(review_id)
        setVoteChange((currChange) => currChange - 1)
    }

  return (
    <div className='vote-container'>
        <div className='thumbs-up-btn'>
        <button onClick={() => upVote()} >
            <BsHandThumbsUp className='thumbs-up-outline' />
        </button>
        </div>
        <div className='vote-text'>
            { votes + voteChange}
        </div>
        <div className='thumbs-down-btn'>
        <button onClick={() => downVote()} >
            <BsHandThumbsDown className='thumbs-down-outline' />
        </button>
        </div>
    </div>
  )
};

export default Vote;
