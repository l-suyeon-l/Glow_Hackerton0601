import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Findpage1 from './Component/Findpage1';
import Home from './Component/Home';
import Findpage1 from './Component/Findpage1';
import StoreInfo from './Component/StoreInfo';
import './App.css';

function App() {
  return (
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/findpage1" element={<Findpage1 />} />
    //     </Routes>
    //   </div>
    // </Router>
    <Home />
    // <Findpage1/>
    // <StoreInfo />
  );
}

export default App;
