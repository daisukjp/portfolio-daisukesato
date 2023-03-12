// import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Portfolio } from './components/service/Portfolio';
import { Ethical } from './components/singlePage/Ethical';
import { Error } from './components/Error';

ReactDOM.render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/ethical" element={<Ethical />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);