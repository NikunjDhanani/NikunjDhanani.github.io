import Layout from './components/userLayout/Layout';
import Home from './components/userLayout/Home';
import Services from './components/userLayout/Services';
import Portfolios from './components/userLayout/Portfolios';
import Projects from './components/userLayout/Projects';
import Works from './components/userLayout/Works';
import About from './components/userLayout/About';
import Contact from './components/userLayout/Contact';

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/services' element={<Services/>} />
          <Route path='/portfolios' element={<Portfolios />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/works' element={<Works />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
