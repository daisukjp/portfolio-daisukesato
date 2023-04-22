import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import { ProjectsPage } from './components/Projects/ProjectsPage';
import { Portfolio } from './components/service/Portfolio';
import { Ethical } from './components/singlePage/Ethical';
import { Fuwa } from './components/singlePage/Fuwa';
import { Error } from './components/Error';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/ethical" element={<Ethical />} />
      <Route path="/fuwa" element={<Fuwa />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);