import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/User-Context";

const DropdownMenu = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const logOut = () => {
    setLoggedInUser({ user: undefined });
  };

  const DropdownItem = (props) => {
    return <div className="menu-item">{props.children}</div>;
  };

  return loggedInUser ? (
    <>
      <div className="dropdown">
        <Link to={`/users/${loggedInUser.username}`}>
          <DropdownItem className="nav-profile">
            <img
              className="nav-profile-pic"
              alt={loggedInUser.username}
              src={loggedInUser.avatar_url}
            />
          </DropdownItem>
        </Link>
        <Link to={`/categories`}>
          <DropdownItem>Categories</DropdownItem>
        </Link>
        <Link to={`/reviews`}>
          <DropdownItem>Reviews</DropdownItem>
        </Link>
        <Link to={`/users`}>
          <DropdownItem>Users</DropdownItem>
        </Link>
        <Link onClick={() => logOut()} to={`/`}>
          <DropdownItem>Log out</DropdownItem>
        </Link>
      </div>
    </>
  ) : null;
};

export default DropdownMenu;
