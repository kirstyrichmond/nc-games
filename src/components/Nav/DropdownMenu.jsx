import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Contexts/User-Context'

const DropdownMenu = () => {
    const { loggedInUser } = useContext(UserContext)
    const [open, setOpen] = useState(false)

    const DropdownItem = (props) => {
        return (
            <a href='#' className='menu-item'>
                 {/* <span className='icon-button'>
                    { props.leftIcon }
                 </span> */}
                { props.children }
                 {/* <span className='icon-right'>
                     { props.rightIcon }</span>  */}
             </a>
        )
    }

  return (
    <><div className='dropdown'>
          <Link to={`/users/${loggedInUser.username}`}>
          <DropdownItem className='nav-profile'>
              <img className='nav-profile-pic' alt={loggedInUser.username} src={loggedInUser.avatar_url} />
          </DropdownItem>
      </Link>
      <Link to={`/categories`}>
      <DropdownItem onClick={() => setOpen(false)}>Categories</DropdownItem>
      </Link>
      <Link to={`/reviews`}>
      <DropdownItem>Reviews</DropdownItem>
      </Link>
      <Link to={`/users`}>
      <DropdownItem>Users</DropdownItem>
      </Link>
      <Link to={`/`}>
      <DropdownItem>Log out</DropdownItem>
      </Link>  
    </div>
    </>  
  )
}

export default DropdownMenu