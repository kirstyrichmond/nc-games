import { Alert, Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/nav.css";
import { UserContext } from "../Contexts/User-Context";

const Navbar = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const showSidebar = () => {
    setOpen(!open);
  };

  const DropdownItem = (props) => {
    return <div>{props.children}</div>;
  };

  return (
    <div className="navbar">
      <h2 className="logo">NC Games</h2>
      {loggedInUser ? (
        loggedInUser.username && (
          <ul className="navbar-list">{props.children}</ul>
        )
      ) : (
        <p>.</p>
      )}
    </div>
  );
};

export default Navbar;
