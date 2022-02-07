import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { ReactRouter, Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
