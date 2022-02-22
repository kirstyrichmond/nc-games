import { Box, CircularProgress } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'
import '../styles/home.css'
import { getUsers } from '../utils/api';
// import { UserContext } from '../components/Contexts/User-Context';
import UserLogin from './UserLogin';
// import UserRegister from '../components/UserRegister';
// import Users from '../components/Users';


const Home = () => {
  // const { loggedInUser } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)



  const [users, setUsers] = useState([])

  useEffect(() => {
      getUsers().then(userList => {
        setUsers(userList)
        setIsLoading(false)
      })
  }, [])


  return isLoading ? (
    <Box sx={{ display: 'flex', justifyContent: 'center'}} >
    <CircularProgress size={65} className="loading-spinner" />
  </Box>
    ) : (
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
