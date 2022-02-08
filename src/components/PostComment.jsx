import React, { useContext, useState } from 'react';
import { postComment } from '../utils/api';
import { UserContext } from './Contexts/User-Context';

const PostComment = ({ review_id, comments, setComments }) => {
    const [newComment, setNewComment] = useState('')
    const { loggedInUser } = useContext(UserContext)

    console.log(review_id, "review id")
    console.log(comments, "comments")
    console.log(setComments, "setComments")
    console.log(loggedInUser.username, "logged in user")
    console.log(newComment, "<< new comment");

    const handleSubmit = (event) => {
        event.preventDefault()

        postComment(review_id, loggedInUser.username, newComment).then((newComment) => {
            console.log(newComment, "<< i want to post comment here")
            // return setComments((oldComments) => {
            //     const updatedComments = [newComment, ...oldComments]
            //     return updatedComments
            // })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleChange = (event) => {
        setNewComment(event.target.value)
    }

  return (
      <>
    <form onSubmit={handleSubmit}>
                      <input className='comment-form-textarea'
                        // name={newComment}
                        // id={newComment}
                        value={newComment}
                        onChange={handleChange}
                        placeholder='Write comment here...'
                      />
                      <button type='submit' className='comment-form-button'>
                            Submit
                      </button>
                  </form>
                  </>
  )
};

export default PostComment;
