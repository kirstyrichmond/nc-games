import React, { useContext, useEffect, useState } from 'react';
import { patchReviewVote } from '../utils/api';
import { BsHandThumbsDown, BsHandThumbsUp, BsHandThumbsUpFill, BsHandThumbsDownFill } from "react-icons/bs";
import { UserContext } from './Contexts/User-Context';
import '../styles/vote.css'

const ReviewVote = ({ votes, owner, review_id }) => {
    const [voteChange, setVoteChange] = useState(0)
    const { loggedInUser } = useContext(UserContext)
    const isDisabled = loggedInUser?.username === owner
    const [upVote, setUpVote] = useState(false)
    const [downVote, setDownVote] = useState(false)
    
    const saveUpVote = () => {
        localStorage.setItem("votes", JSON.stringify(upVote))
    }

    const getSavedUpVote = () => {
        if (localStorage.getItem("votes") === null) {
            localStorage.setItem("votes", JSON.stringify(null));
        } else {
            let votesLocal = JSON.parse(localStorage.getItem("votes"));
            setUpVote(votesLocal);
            // setLoggedIn(true);
        }
    }

    useEffect(() => {
        getSavedUpVote()
    }, [])

    useEffect(() => {
        saveUpVote()
    }, [upVote])

    const upVoteFunc = () => {
        if (!upVote) {
            patchReviewVote(review_id, 1).then(() => {
                console.log(voteChange, "<< vote change up");
                setVoteChange((currChange) => currChange + 1)
                setUpVote(true)
                setDownVote(false)
            })
        }
        else {
            console.log(voteChange, "<< vote change down");
            setVoteChange((currChange) => currChange - 1)
            patchReviewVote(review_id, -1)
            setUpVote(false)
            setDownVote(false)
        }
}
    
    const downVoteFunc = () => {
        if (!downVote) {
            patchReviewVote(review_id, -1).then(() => {
                console.log(voteChange, "<< vote change down");
                setVoteChange((currChange) => currChange - 1)
                setDownVote(true)
                setUpVote(false)
            })

        } else {
            console.log(voteChange, "<< vote change up");
            setVoteChange((currChange) => currChange + 1)
            patchReviewVote(review_id, 1)
            setDownVote(false)
            setUpVote(false)
        }
    }

  return (
    <div className='vote-container'>
        <div className='thumbs-up-btn'>
        <button disabled={isDisabled} onClick={() => upVoteFunc()} >
            {
                upVote ? <BsHandThumbsUpFill className='thumbs-up-fill' />
                :
                <BsHandThumbsUp className='thumbs-up-outline' />
            }

        </button>
        </div>
        <div className='vote-text'>
            { votes + voteChange}
        </div>
        <div className='thumbs-down-btn'>
        <button disabled={isDisabled} onClick={() => downVoteFunc()} >
            {
                downVote ? <BsHandThumbsDownFill className='thumbs-down-fill' />
                :
                <BsHandThumbsDown className='thumbs-down-outline' />
            }
        </button>
        </div>
    </div>
  )
};

export default ReviewVote;
