// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useContext, useState } from 'react'
// import { getUsers, postUser } from '../utils/api'
// import { UserContext } from './Contexts/User-Context'
// import { useEffect } from 'react/cjs/react.development'

// const UserRegister = () => {
//     const { loggedInUser, setLoggedInUser} = useContext(UserContext)
//     const [allUsers, setAllUsers] = useState([])
//     const [nameInput, setNameInput] = useState('')
//     const [usernameInput, setUsernameInput] = useState('')
//     const [imgUrlInput, setImgUrlInput] = useState('')
//     const navigate = useNavigate()

//     // useEffect(() => {
//     //     getUsers().then((userList) => {
//     //         setAllUsers(userList)
//     //     })
//     // }, [])


//     const handleSubmit = (event) => {
//         event.preventDefault()

//         const addUser = {
//             name: nameInput,
//             username: usernameInput,
//             review_img_url: imgUrlInput
//         }

//         postUser(addUser).then((newUser) => {
//             setLoggedInUser(newUser)
//             navigate(`/categories`)
//         })
//     }

//   return (
//     <div>
//         <h2>Register:</h2>
//         <form onSubmit={handleSubmit}>
//            <input required
//            type='text'
//            value={nameInput}
//            placeholder='name'
//            onChange={(event) => setNameInput(event.target.value)} />   

//            <input required
//            type='text'
//            value={usernameInput}
//            placeholder='username'
//            onChange={(event) => setUsernameInput(event.target.value)} />   
           
//            <input required
//            type='url'
//            value={imgUrlInput}
//            placeholder='img url'
//            onChange={(event) => setImgUrlInput(event.target.value)} />   
//            <button type='submit'>Register</button>
//         </form> 
//     </div>
//   )
// }

// export default UserRegister