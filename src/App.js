import React from 'react';
import dotenv from 'dotenv';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Feed from './components/pages/Feed';
import Landing from './components/pages/Landing';


function App() {




  return (

    <BrowserRouter>
      <Routes>
        <Route exact path={'/'} element={<Landing />} />
        <Route exact path={'/feed'} element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
