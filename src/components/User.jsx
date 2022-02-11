import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { getAllReviews, getUserByUsername } from '../utils/api'
import { UserContext } from './Contexts/User-Context'
import '../styles/user.css'

const User = () => {
    const [singleUser, setSingleUser] = useState({})
    const { username } = useParams()
    const { loggedInUser } = useContext(UserContext)
    const [userReviews, setUserReviews] = useState([])

    useEffect(() => {
        getUserByUsername(username).then((user) => {
            setSingleUser(user)
        })
    }, [username])

    useEffect(() => {
        getAllReviews().then((reviews) => {
            setUserReviews(reviews)
        })
    }, [])

    console.log(userReviews, "<< user reviews in user");

    const justUserReviews = userReviews.filter((review) => {
        // console.log(review, "<< review inside filter");
       return review.owner === singleUser.username ? review : null
    })

    console.log(justUserReviews, "<< only reviews by the user");


  return (
    <div>
        <h3 className='user-profile-username'>{username}</h3>
                            <p className='user-profile-name'>{singleUser.name}</p>
                            <img className='user-profile-photo' src={singleUser.avatar_url} alt={username} />
            <div>
                <h3>
                    Reviews by {singleUser.username}</h3>
                    <ul className='user-profile-review-list'>
                        {
                        justUserReviews.map((review) => {
                            return (
                                <>
                                <Link to={`/review/${review.review_id}`} >
                                <li className='user-profile-review'>
                                    <img className='user-profile-review-photo' src={review.review_img_url} alt={review.title} />
                                    <div className='user-profile-review-info'>
                                    <h4>{review.title}</h4>
                                    <p>
                                        {review.category}
                                    </p>
                                    <p>Votes: 
                                        {review.votes}
                                    </p>
                                    <p>Comments:
                                        {review.comment_count}
                                    </p>
                                    <p>
                                        {review.created_at}
                                    </p>
                                    </div>
                                </li>
                                </Link>
                                </>
                            )
                        })
                        }
                    </ul>
            </div>
    </div>
  )
}

export default User