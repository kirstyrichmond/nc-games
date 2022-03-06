import React, { useEffect, useState } from "react";
import { getUsers } from "../utils/api";
import "../styles/userlogin.css";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [pageSize, setPageSize] = React.useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers().then((userList) => {
      setUsers(userList);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <CircularProgress size={65} className="loading-spinner" />
  ) : (
    <div>
      <h2 className="users-title">Users</h2>
      <ul className="list-all-users">
        {users.map((user) => {
          return (
            <Link to={`/users/${user.username}`} key={user.username}>
              <li className="user-list-user">
                {/* <p className='user-list-name'>{user.name}</p> */}
                <img
                  className="user-list-photo"
                  src={user.avatar_url}
                  alt={user.username}
                />
                <div className="user-list-name-photo">
                  <div className="user-list-name">
                    <h3 className="user-name">{user.name}</h3>
                  </div>
                  <div>
                    <button
                      className="user-button"
                      onClick={() => navigate(`/users/${user.username}`)}
                    >
                      View profile
                    </button>
                  </div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
