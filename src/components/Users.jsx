import React, { useEffect, useState } from 'react'
import { getUsers } from '../utils/api'
import '../styles/users.css'
import { Link } from 'react-router-dom'

const Users = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
      getUsers().then(userList => {
        setUsers(userList)
      })
  }, [users])

  return (
      <>
    <div>
        <h2 className='users-title'>Users</h2>
        <ul className='user-list'>
            {
                users.map(user => {
                    return (
                        <>
                        <Link to={`/users/${user.username}`}>
                        <li className='user-list-user' key={user.username}>
                            <h3 className='user-list-username'>{user.username}</h3>
                            {/* <p className='user-list-name'>{user.name}</p> */}
                            <img className='user-list-photo' src={user.avatar_url} alt={user.username} />
                        </li>
                        </Link>
                        </>
                    )
                })
            }
        </ul>
    </div>
    </>
  )
}

export default Users