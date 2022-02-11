import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../styles/home.css'
import { getUsers } from '../utils/api';
import { UserContext } from './Contexts/User-Context';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import Users from './Users';


const Home = () => {
  const { loggedInUser } = useContext(UserContext)

  const [users, setUsers] = useState([])

  useEffect(() => {
      getUsers().then(userList => {
        setUsers(userList)
      })
  }, [users])

  return (
    <div>
      {/* <UserRegister /> */}
      <UserLogin />
      {
                // users.map(user => {
                //     return (
                //         <>
                //         {/* <Link to={`/users/${user.username}`}> */}
                //         <li className='user-list-user' key={user.username}>
                //             <h3 className='user-list-username'>{user.username}</h3>
                            // {/* <p className='user-list-name'>{user.name}</p> */}
                        //     <img className='user-list-photo' src={user.avatar_url} alt={user.username} />
                        //     <button>Log in</button>
                        // </li>
                        // {/* </Link> */}
            //             </>
            //         )
                // })
            }
    </div>
  )


  // return <div>
  //     <h1 className='welcome-heading'>
  //         Welcome Kirsty!
  //     </h1>
  //     <Link className='welcome-btn' to={`/categories`}>continue...</Link>
  // </div>;
};

export default Home;
