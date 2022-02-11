import React from 'react'
import { useContext } from 'react/cjs/react.development';
import { deleteComment } from '../utils/api'
import CommentVote from './CommentVote';
import { UserContext } from './Contexts/User-Context';
import Vote from './ReviewVote';

const CommentCard = ({ comment }) => {
  const { loggedInUser } = useContext(UserContext)
  
  const handleDelete = (event) => {
      deleteComment(comment.comment_id)
      event.preventDefault()
    }

  return (
    <>
    <CommentVote comment={comment} />
    <div>
    {
            loggedInUser.username === comment.author ? <button onClick={handleDelete} >Delete
        </button> : null
        }
    </div></>
  )
}

export default CommentCard