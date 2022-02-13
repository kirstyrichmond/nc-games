import React from 'react'
import { useContext, useState } from 'react/cjs/react.development'
import { patchCommentVote } from '../utils/api'
import { UserContext } from './Contexts/User-Context'
import { BsHandThumbsDown, BsHandThumbsUp, BsHandThumbsUpFill, BsHandThumbsDownFill } from "react-icons/bs";

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
        <div className='thumbs-up-btn'>
        {
            loggedInUser.username !== author ? <button onClick={() => upVoteFunc()} >
            {
                upVote ? <BsHandThumbsUpFill className='thumbs-up-fill' />
                :
                <BsHandThumbsUp className='thumbs-up-outline' />
            }
        </button> : null
        }
        </div>
        <div className='vote-text'>
            { votes + voteChange}
        </div>
        <div className='thumbs-down-btn'>

        {
            loggedInUser.username !== author ? <button onClick={() => downVoteFunc()} >
            {
                downVote ? <BsHandThumbsDownFill className='thumbs-down-fill' />
                :
                <BsHandThumbsDown className='thumbs-down-outline' />
            }
        </button> : null
        }
                </div>
    </div>
  )
}

export default CommentVote