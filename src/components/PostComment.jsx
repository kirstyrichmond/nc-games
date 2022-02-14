import React, { useEffect, useContext, useState } from 'react';
import { getComments, postComment } from '../utils/api';
import { UserContext } from './Contexts/User-Context';

const PostComment = ({ review_id, comments, setComments }) => {
    const { loggedInUser } = useContext(UserContext)
    const [newComment, setNewComment] = useState("")

    useEffect(() => {
        getComments(review_id).then(comments => {
            setComments(comments)
        })
    }, [review_id, setComments])
    
    const handleSubmit = (event) => {
        event.preventDefault()

        const commentData =  {
            username: loggedInUser.username,
            body: newComment
        }

        postComment(review_id, commentData).then(() => {
                getComments(review_id).then((updatedComments) => {
                    setComments(updatedComments)
                })
                setNewComment('')
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
      <div className='post-comment-form'>
    <form onSubmit={handleSubmit}>
                      <textarea className='comment-form-textarea'
                        // name={newComment}
                        // id={newComment}
                        value={newComment}
                        onChange={handleChange}
                        placeholder='Write comment here...'
                        rows='4'
                      />
                      <div className='comment-form-button'>
                      <button type='submit'>
                            Submit
                      </button>
                      </div>
                  </form>
                  </div>
                  </>
  )
};

export default PostComment;
