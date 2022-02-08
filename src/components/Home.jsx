import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/home.css'


const Home = () => {

  return <div>
      <h1 className='welcome-heading'>
          Welcome Kirsty!
      </h1>
      <Link className='welcome-btn' to={`/categories`}>continue...</Link>
  </div>;
};

export default Home;
