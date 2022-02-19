import React, { useContext, useState } from 'react'
import { patchCommentVote } from '../utils/api'
import { UserContext } from './Contexts/User-Context'
import { BsHandThumbsDown, BsHandThumbsUp, BsHandThumbsUpFill, BsHandThumbsDownFill } from "react-icons/bs";
import '../styles/vote.css'

const CommentVote = ({ comment }) => {
    const { author, comment_id, votes } = comment
    const [voteChange, setVoteChange] = useState(0)
    const { loggedInUser } = useContext(UserContext)
    const isDisabled = loggedInUser?.username === author
    const [upVote, setUpVote] = useState(false)
    const [downVote, setDownVote] = useState(false)

    // console.log(author, comment_id, votes);

    // const upVote = () => {
    //     patchCommentVote(comment_id, 1)
    //     setVoteChange((currChange) => currChange + 1)
    // }

    const upVoteFunc = () => {
        if (!upVote) {
            patchCommentVote(comment_id, 1).then(() => {
                setVoteChange((currChange) => currChange + 1)
                setUpVote(true)
                setDownVote(false)
            })
        }
        else {
            console.log(voteChange, "<< vote change down");
            setVoteChange((currChange) => currChange - 1)
            patchCommentVote(comment_id, -1)
            setUpVote(false)
            setDownVote(false)
        }
    }
    
    // const downVote = () => {
    //     patchCommentVote(comment_id, -1)
    //     setVoteChange((currChange) => currChange - 1)
    // }

    const downVoteFunc = () => {
        if (!downVote) {
            patchCommentVote(comment_id, -1).then(() => {
                console.log(voteChange, "<< vote change down");
                setVoteChange((currChange) => currChange - 1)
                setDownVote(true)
                setUpVote(false)
            })

        } else {
            console.log(voteChange, "<< vote change up");
            setVoteChange((currChange) => currChange + 1)
            patchCommentVote(comment_id, 1)
            setDownVote(false)
            setUpVote(false)
        }
    }


  return (

    <div className='vote-container'>
         <div className='thumbs-down-btn'>

{
    <button disabled={isDisabled} className='vote-button' onClick={() => upVoteFunc()} >
    {
        (loggedInUser.username !== author) && upVote ? <BsHandThumbsUpFill className='thumbs-down-fill' />
        :
        <BsHandThumbsUp className='thumbs-down-outline' />
    }
</button> 
}
        </div>
        <div className='vote-text'>
            { votes + voteChange}
        </div>
        <div className='thumbs-down-btn'>

        {
            <button disabled={isDisabled} className='vote-button' onClick={() => downVoteFunc()} >
            {
                (loggedInUser.username !== author) && downVote ? <BsHandThumbsDownFill className='thumbs-down-fill' />
                :
                <BsHandThumbsDown className='thumbs-down-outline' />
            }
        </button>
        }
                </div>
    </div>
  )
}

export default CommentVote