import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/nav.css";

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <li className="nav-item">
      <div onClick={() => setOpen(!open)}>{props.icon}</div>
      {open && props.children}
    </li>
  );
};

export default NavItem;
