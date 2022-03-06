// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { getAllReviews, getCategories, postReview } from '../utils/api'
// import { UserContext } from './Contexts/User-Context'

// const PostReview = ({ handleClose, reviews }) => {
//     const navigate = useNavigate()
//     const { loggedInUser } = useContext(UserContext)
//     // const [addReview, setAddReview] = useState("")
//     const [categories, setCategories] = useState([])
//     const [updatedReviews, setUpdatedReviews] = useState([])
//     const [newReviewTitle, setNewReviewTitle] = useState("")
//   const [newReviewPhoto, setNewReviewPhoto] = useState("")
//   const [newReviewBody, setNewReviewBody] = useState("")
//   const [newReviewDesigner, setNewReviewDesigner] = useState("")
//   const [newReviewCategory, setNewReviewCategory] = useState("")

//     useEffect(() => {
//         getCategories().then((catSelection) => {
//           setCategories(catSelection)
//         })
//       }, [])

//       const handleTitleChange = (event) => {
//         setNewReviewTitle(event.target.value)
//       }

//       const handlePhotoChange = (event) => {
//         setNewReviewPhoto(event.target.value)
//       }

//       const handleBodyChange = (event) => {
//           setNewReviewBody(event.target.value)
//         }

//         const handleDesignerChange = (event) => {
//             setNewReviewDesigner(event.target.value)
//         }
        
//         const handleCategoryChange = (event) => {
//             console.log(event.target.value, "<< category change event");
//           setNewReviewCategory(event.target.value)
//         }

//    const handleSubmit = (event) => {
//        event.preventDefault()

//        const newReview = {
//             title: newReviewTitle,
//             owner: loggedInUser.username,
//             review_img_url: newReviewPhoto,
//             review_body: newReviewBody,
//             designer: newReviewDesigner,
//             category: newReviewCategory
//        }

//        postReview(newReview).then((review) => {
//           //  console.log(review[0], "<< new review in post review");
//           //  return review[0]
//           //  getAllReviews()
//           // handleClose()
//           //   navigate('/reviews');
//           console.log(review, "<< new review");
//           console.log(reviews, "<< all reviews");
//           const updatedList = [...review, ...reviews]
//           console.log(updatedList, "<< updated reviews");
//             setUpdatedReviews(updatedList)

        
//             // getAllReviews().then((updatedComments) => {
//             //     setReviews(updatedComments)
//             // })
//             // setNewComment('')
//     })
            
              
//               // setTimeout(function () {
//               //   <p>Posted!</p>
//               //   handleClose()
//               // }, 2000)
//             // })

//           //  const { review_id } = review
//           //  navigate(`/reviews/${review_id}`)
//       //  })
//        .catch((err) => {
//            console.log(err);
//        })
       
//    }

//   return (
//       <><div>
//           {/* <div className='title-close-btn'>
//               <button onClick={() => closeModal(false)}>X</button>
//           </div> */}
//       </div><div>
//               <h3>Add review:</h3>
//               <form onSubmit={handleSubmit}>
//                   {/* <label>Title:</label> */}
//                   <input required
//                       type='text'
//                       value={newReviewTitle}
//                       id='reviewTitle'
//                       name='reviewTitle'
//                       placeholder='title'
//                       onChange={handleTitleChange} />
//                   <br />
//                   {/* <label>Photo URL:</label> */}
//                   <input
//                       type='url'
//                       value={newReviewPhoto}
//                       id='reviewPhoto'
//                       name='reviewPhoto'
//                       placeholder='photo URL'
//                       onChange={handlePhotoChange} />
//                   <br />
//                     {/* <label>Description:</label> */}
//                     <input
//                         type='text'
//                         value={newReviewBody}
//                         id='reviewBody'
//                         name='reviewBody'
//                         placeholder='description'
//                         onChange={handleBodyChange} />
//                   <br />
//                   {/* <label>Designer:</label> */}
//                     <input
//                         type='text'
//                         value={newReviewDesigner}
//                         id='reviewDesigner'
//                         name='reviewDesigner'
//                         placeholder='designer'
//                         onChange={handleDesignerChange} />
//                   <br />
//                   <select value={newReviewCategory} name="reviewCategory" id="reviewCategory" onChange={handleCategoryChange}>
//                       <option value="" disabled defaultValue>Select Category</option>
//                       <option key='strategy' value='strategy'>strategy</option>
//                       <option key='hidden-roles' value='hidden-roles'>hidden-roles</option>
//                       <option key='dexterity' value='dexterity'>dexterity</option>
//                       <option key='push-your-luck' value='push-your-luck'>push-your-luck</option>
//                       <option key='roll-and-write' value='roll-and-write'>roll-and-write</option>
//                       <option key='deck-building' value='deck-building'>deck-building</option>
//                       <option key='engine-building' value='engine-building'>engine-building</option>

//                       {/* {
//                         categories.map((categoryOption) => {
//                           return (
//                               <option>
//                                   {categoryOption.category}
//                               </option>
//                           )
//                       })
//                       } */}
//                   </select>
//                   <br />
//                   <button type='submit' value='submit' className="submit-btn">Submit</button>
//               </form>
//           </div></>
//   )
// }

// export default PostReview