import './App.css';
import YouTubeVideo from './YouTubeVideo';
import React from 'react';
import SelectFitType from './SelectFitType';

function App() {
  function handleClick() {
    // Replace the URL below with the desired URL you want to redirect to
    const desiredURL = 'https://www.healthline.com/nutrition';
    window.location.href = desiredURL;
  }

  return (
    <div className="App">
      <div className='fit'>
        <h1 id="topic">fitnutrition</h1>
        <p onClick={handleClick} id='aboutme'>More on nutrition</p>
      </div>
      <YouTubeVideo/>
      <SelectFitType/>
      <div className='fitFooter'>
         <p id="abouted" style={{color:"whitesmoke"}} onClick={handleClick}>About</p>
      </div>  
    </div>
  );
}

export default App;
