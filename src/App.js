import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Categories from "./components/Categories";
import ReviewList from "./components/ReviewList";
import ReviewPage from "./components/ReviewPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          {/* <Route path="/reviews?category=category_name" element={<Categories />} /> */}
          <Route path="/reviews" element={<ReviewList />} />
          <Route path="/reviews/:review_id" element={<ReviewPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
