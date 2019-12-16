import React from 'react';
import './App.css';
import CreateTweet from './Components/CreateTweet/index';
import NavBar from './Components/NavBar';



function App() {
  return (
    <div className='main-wrapper'>
      <NavBar />
      <CreateTweet />
    </div>
  );
}

export default App;
