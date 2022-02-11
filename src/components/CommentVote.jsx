import React from 'react'
import { useContext, useState } from 'react/cjs/react.development'
import { patchCommentVote } from '../utils/api'
import { UserContext } from './Contexts/User-Context'
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";

const CommentVote = ({ comment }) => {
    const { author, comment_id, votes } = comment
    const [voteChange, setVoteChange] = useState(0)
    const { loggedInUser } = useContext(UserContext)
    // const isDisabled = loggedInUser.username === author

    // console.log(author, comment_id, votes);

    const upVote = () => {
        patchCommentVote(comment_id, 1)
        setVoteChange((currChange) => currChange + 1)
    }
    
    const downVote = () => {
        patchCommentVote(comment_id, -1)
        setVoteChange((currChange) => currChange - 1)
    }


  return (

    <div className='vote-container'>
        <div className='thumbs-up-btn'>
        {
            loggedInUser.username !== author ? <button onClick={() => upVote()} >
            <BsHandThumbsUp className='thumbs-up-outline' />
        </button> : null
        }
        </div>
        <div className='vote-text'>
            { votes + voteChange}
        </div>
        <div className='thumbs-down-btn'>

        {
            loggedInUser.username !== author ? <button onClick={() => downVote()} >
            <BsHandThumbsDown className='thumbs-down-outline' />
        </button> : null
        }
                </div>
    </div>
  )
}

export default CommentVote