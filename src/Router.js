// Default route file for the application.

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Componets/Pages/Home/HomePage.js';
// import About from './components/About';
// import Contact from './components/Contact';

const AppRouter = () => (
 <Router>
    <Routes>
        
      <Route path="/" element={ <Home />} exact />
      {/* <Route path="/about" element={ <About />} /> */}
      {/* <Route path="/contact" element={ <Contact />} /> */}
    </Routes>
 </Router>
);

export default AppRouter;