import "./styles/App.css";
import Header from "./components/Header";
import Home from "./routes/Home";
import Navbar from "./components/Nav/Navbar";
import NavItem from "./components/Nav/NavItem";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Categories from "./routes/Categories";
import ReviewList from "./routes/ReviewList";
import ReviewPage from "./routes/ReviewCard";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./components/Contexts/User-Context";
import Users from "./routes/Users";
import User from "./routes/User";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import DropdownMenu from "./components/Nav/DropdownMenu";

function App() {
  // const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  // const response = await axios.post()

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
    window.scrollTo(50, 50)
  }, [])

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
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/reviews/:category" element={<ReviewList />} />
            <Route path="/reviews" element={<ReviewList />} />
            <Route path="/review/:review_id" element={<ReviewPage />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:username" element={<User />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
