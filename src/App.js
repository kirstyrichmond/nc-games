import "./styles/App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Categories from "./components/Categories";
import ReviewList from "./components/ReviewList";
import ReviewPage from "./components/ReviewPage";
import { useState } from "react";
import { UserContext } from "./components/Contexts/User-Context";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "happyamy2016",
    name: "Kirsty Richmond",
    avatar_url:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFELvuGKHDIAA/profile-displayphoto-shrink_400_400/0/1627666728379?e=1649894400&v=beta&t=EpTh-4qe_hDTcsEgeWF3bVXa7_U6cj2B7IMZ0Ho1tUc",
  });

  const isLoggedIn = loggedInUser !== null;

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ loggedInUser, setLoggedInUser, isLoggedIn }}
      >
        <div className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/reviews/:category" element={<ReviewList />} />
            <Route path="/reviews" element={<ReviewList />} />
            <Route path="/review/:review_id" element={<ReviewPage />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
