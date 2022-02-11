import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUserByUsername, getUsers } from '../utils/api'
import { UserContext } from './Contexts/User-Context'

const UserLogin = () => {

    const [users, setUsers] = useState([])
    const { setLoggedInUser } = useContext(UserContext)
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
        {
                users.map(user => {
                    return (
                        <>
                        {/* <Link to={`/users/${user.username}`}> */}
                        <li className='user-list-user' key={user.username}>
                            <h3 className='user-list-username'>{user.username}</h3>
                            {/* <p className='user-list-name'>{user.name}</p> */}
                            <img className='user-list-photo' src={user.avatar_url} alt={user.username} />
                            <button onClick={() => login(user)}>Log in</button>
                        </li>
                        {/* </Link> */}
                        </>
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
    </div>
  )
}

export default UserLogin