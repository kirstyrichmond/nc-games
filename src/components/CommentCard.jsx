import React from 'react'
import { useContext, useEffect } from 'react';
import { deleteComment, getComments } from '../utils/api'
import CommentVote from './CommentVote';
import { UserContext } from './Contexts/User-Context';
// import Vote from './ReviewVote';

const CommentCard = ({ comment, review_id, setComments }) => {
  const { loggedInUser } = useContext(UserContext)
  const isDisabled = loggedInUser?.username === comment.owner
  
  const handleDelete = (event) => {
      deleteComment(comment.comment_id).then(() => {
        getComments(review_id).then(comments => {
          setComments(comments)
        })
      })
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