// import React, { useState, useEffect, useContext } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { getCategories } from '../utils/api';
// import { UserContext } from './Contexts/User-Context';
// import '../styles/nav.css'
// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// import { faHamburger } from '@fortawesome/free-solid-svg-icons';


// const Nav = () => {
//     const [categories, setCategories] = useState([])
//     let location = useLocation()
//     const [sidebar, setSidebar] = useState(false)

//     const { loggedInUser } = useContext(UserContext)


//     useEffect(() => {
//         getCategories().then((categoriesFromApi) => {
//             setCategories(categoriesFromApi)
//         })
//     }, [])

//     const showSidebar = () => {
//         console.log("<< open / close sidebar");
//         setSidebar(!sidebar)
//     }


//   return (
//    <div className='nav'>
//        <div className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
//        <Link className='logo' to={`/categories`}>NC Games</Link>

//         <button className='hamburger' id='hamburger'>
//         <MenuRoundedIcon onClick={showSidebar}/>
//         </button>

//        <Link className='nav-link' to={`/categories`}>Categories</Link>
//        <Link className='nav-link' to={`/reviews`}>Reviews</Link>
//        <Link className='nav-link' to={`/users`}>
//            Users
//        </Link>
//        <div className='nav-link nav-profile'>
//            {/* <p>{loggedInUser.name}</p> */}
//            <img className='nav-profile-pic' alt={loggedInUser.name} src={loggedInUser.avatar_url} />
//        </div> 
//        </div>
//   </div>
//   )
// };

// export default Nav;

import React, { useContext, useState } from 'react'
import '../../styles/nav.css'
import { UserContext } from '../Contexts/User-Context'

const Navbar = (props) => {
  const { loggedInUser } = useContext(UserContext)
    const [open, setOpen] = useState(false)

    const showSidebar = () => {
              console.log("<< open / close sidebar");
              setOpen(!open)
          }

    const DropdownItem = (props) => {
        return (
            <a href='#' className='menu-item'>
                <span className='icon-button'>
                    { props.leftIcon }
                </span>
                { props.children }
                <span className='icon-right'>
                    { props.rightIcon }</span> 
            </a>
        )
    }

  return (
      <div className='navbar'>
        <h2 className='logo'>NC Games</h2>
        <ul className='navbar-list'>
            { props.children }
        </ul>
        </div>
  )
}

export default Navbar
