import "./styles/App.css";
import Home from "./routes/Home";
import Navbar from "./components/Nav/Navbar";
import NavItem from "./components/Nav/NavItem";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Categories from "./routes/Categories";
import ReviewList from "./routes/ReviewList";
import ReviewPage from "./routes/ReviewCard";
import { useEffect, useState } from "react";
import { UserContext } from "./components/Contexts/User-Context";
import Users from "./routes/Users";
import User from "./routes/User";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import DropdownMenu from "./components/Nav/DropdownMenu";
import NotFoundError from "./routes/Errors/NotFoundError";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const saveLoggedInUser = () => {
    localStorage.setItem("user", JSON.stringify(loggedInUser));
  };

  const getLoggedInUser = () => {
    if (localStorage.getItem("user") === null) {
      localStorage.setItem("user", JSON.stringify(null));
    } else {
      let userLocal = JSON.parse(localStorage.getItem("user"));
      setLoggedInUser(userLocal);
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  useEffect(() => {
    saveLoggedInUser();
  }, [loggedInUser, loggedIn]);

  useEffect(() => {
    window.scrollTo(50, 50);
  }, []);

  const isLoggedIn = loggedInUser !== null;

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ loggedInUser, setLoggedInUser, isLoggedIn }}
      >
        <div className="App">
          <Navbar>
            <NavItem icon={<MenuRoundedIcon />}>
              <DropdownMenu />
            </NavItem>
          </Navbar>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/categories" element={<Categories />} />
            <Route exact path="/reviews/:category" element={<ReviewList />} />
            <Route exact path="/reviews" element={<ReviewList />} />
            <Route exact path="/review/:review_id" element={<ReviewPage />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/users/:username" element={<User />} />
            <Route path="*" element={<NotFoundError />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
