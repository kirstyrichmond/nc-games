import React, { useEffect, useState } from 'react'
import { getUsers } from '../utils/api'
import '../styles/users.css'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Nav from '../components/Nav'

const Users = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [pageSize, setPageSize] = React.useState(5);

  useEffect(() => {
      getUsers().then(userList => {
        setUsers(userList)
        setIsLoading(false)
      })
  }, [])

  return isLoading ? (
    <h3>loading...</h3>
 ) : (
  <><Header /><Nav /><>
        <div>


          <h2 className='users-title'>Users</h2>
          <ul className='user-list'>
            {users.map(user => {
              return (
                <Link to={`/users/${user.username}`} key={user.username}>
                  <li className='user-list-user'>
                    <h3 className='user-list-username'>{user.username}</h3>
                    {/* <p className='user-list-name'>{user.name}</p> */}
                    <img className='user-list-photo' src={user.avatar_url} alt={user.username} />
                  </li>
                </Link>
              )
            })}
          </ul>
        </div>
      </></>
  )
}

export default Users