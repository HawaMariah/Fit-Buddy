// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import React from "react";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
// import Homepage from "./Homepage";
// import Login from "./Login";
// import Signup from "./Signup";

// import "./App.css";

// import YouTubeVideo from './YouTubeVideo';

// import SelectFitType from './SelectFitType';

// function App() {
//   function handleClick() {
//     // Replace the URL below with the desired URL you want to redirect to
//     const desiredURL = 'https://www.healthline.com/nutrition';
//     window.location.href = desiredURL;
//   }

//   return (
//     <>
//     <Router>
//       <div>
//         <Navbar />
//         <Sidebar />
//         <div>
//           <Routes>
//             <Route exact path="/" element={<Homepage />} />
//             <Route exact path="/login" element={<Login />} />
//             <Route exact path="/signup" element={<Signup />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//     <div className="App">
//       <div className='fit'>
//         <h1 id="topic">fitnutrition</h1>
//         <p onClick={handleClick} id='aboutme'>More on nutrition</p>
//       </div>
//       <YouTubeVideo/>
//       <SelectFitType/>
//       <div className='fitFooter'>
//          <p id="abouted" style={{color:"whitesmoke"}} onClick={handleClick}>About</p>
//       </div>
//     </div>
//     </>
//   );
// }

// export default App;
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Homepage from "./Homepage";
import Login from "./Login";
import Signup from "./Signup";

import "./App.css";



import SelectFitType from "./SelectFitType";

function App() {
  

  return (
    <Router>
      <div>
        <Navbar />
        <Sidebar />
        <div>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/fittype" element={<SelectFitType />} />
          </Routes>
        </div>
        <div className="App">
          
          
        </div>
      </div>
    </Router>
  );
}

export default App;
