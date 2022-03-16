import { Box, CircularProgress } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/Contexts/User-Context";
import "../styles/home.css";
import { getUsers } from "../utils/api";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
    });
  }, []);

  const login = (newUser) => {
    setLoggedInUser(newUser);
    navigate(`/categories`);
  };

  useEffect(() => {
    getUsers().then((userList) => {
      setUsers(userList);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress size={65} className="loading-spinner" />
    </Box>
  ) : (
    <div>
      <ul className="list-all-users">
        {users.map((user) => {
          return (
            <li className="list-item" key={user.username}>
              <div className="user-list-user">
                <div>
                  <img
                    className="user-list-photo"
                    src={user.avatar_url}
                    alt={user.username}
                  />
                </div>
                <div className="user-list-name-photo">
                  <div className="user-list-name">
                    <h3>{user.name}</h3>
                  </div>
                  <div>
                    {loggedInUser === null ||
                    loggedInUser.username !== user.username ? (
                      <button
                        className="user-button"
                        onClick={() => login(user)}
                      >
                        Log in
                      </button>
                    ) : (
                      <button
                        className="user-button"
                        onClick={() => login(user)}
                      >
                        Continue...
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
