import React, { useState } from 'react';


import './App.css';
// import {Route,Router} from 'react-router-dom';
import Home from './components/pages/Home';

import Sidebar from './components/pages/Sidebar';

function App() {

  const [dt,setDt] = useState('');
  
  const tweetDisplay = (tweet) => {
    // axios.get("http://localhost:5000/exercises")
    //   .then(res => {
    //     console.log(res.data);
    //     setDt(res.data);
    //   })
    setDt(tweet);
  }

  return (
    <div className="App">
      <Sidebar tweetDisplay={ tweetDisplay}/>
      <Home data={dt}/>
    </div>
  );
}

export default App;
