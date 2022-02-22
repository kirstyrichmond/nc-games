import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUserByUsername, getUsers } from '../utils/api'
import { UserContext } from '../components/Contexts/User-Context'
import Nav from '../components/Nav/Navbar'
import LogInAlert from '../components/LoginRequired'
import '../styles/userlogin.css'

const UserLogin = () => {
    const [users, setUsers] = useState([])
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        getUsers().then((usersFromApi) => {
            setUsers(usersFromApi)
        })
    }, [])

    const login = (newUser) => {
        setLoggedInUser(newUser)
        navigate(`/categories`)
    }

    

    // const [usernameInput, setUsernameInput] = useState('')
    // const {loggedInUser, setLoggedInUser, isLoggedIn} = useContext(UserContext)
    // // const [username, setUsername] = useState(null)
    // const [allUsers, setAllUsers] = useState([])
    // const navigate = useNavigate()

    // useEffect(() => {
    //     getUsers().then((userList) => {
    //         setAllUsers(userList)
    //     })
    // }, [])
    


    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     // setUsername(usernameInput)
    //     allUsers.forEach((users) => {
    //         if (users.username === usernameInput) {
    //             setLoggedInUser({ username: usernameInput})
    //             console.log(loggedInUser);
    //             navigate(`/categories`)
    //         }
    //     })
    // }
    
  return (
    <div>
        <ul className='list-all-users'>
        {
                users.map(user => {
                    return (
                        // <div className='list-all-users'>
                        <li className='list-item' key={user.username}>
                            <div className='user-list-user'>
                            <div>
                            <img className='user-list-photo' src={user.avatar_url} alt={user.username} />
                            {/* <h3 className='user-list-username'>{user.username}</h3> */}
                            </div>
                            <div className='user-list-name-photo'>
                            <div className='user-list-name'>
                            <h3>{user.name}</h3>
                            </div>
                            <div>
                            {
                                (loggedInUser === null || loggedInUser.username !== user.username) ?
                                <button className='user-button' onClick={() => login(user)}>Log in</button>
                            : 
                                <button className='user-button' onClick={() => login(user)}>Continue...</button>
                            }
                            </div>
                            </div>
                            </div>
                        </li>
                            // </div>
                    )
                })
            }

        

        {/* <h2>Log in:</h2>
        <form onSubmit={handleSubmit}>
            <input required
            value={usernameInput}
            placeholder='username'
            onChange={(event) => setUsernameInput(event.target.value)} />
            <button type='submit'>Log in</button>
        </form> */}
        </ul>
    </div>
     
  )
}

export default UserLogin