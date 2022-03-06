import { Box, CircularProgress } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "../styles/home.css";
import { getUsers } from "../utils/api";
import UserLogin from "./UserLogin";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [users, setUsers] = useState([]);

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
      <UserLogin />
    </div>
  );
};

export default Home;
