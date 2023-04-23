import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import { ProjectsPage } from './components/Projects/ProjectsPage';
import { Portfolio } from './components/ProjectList/Portfolio';
import { Ethical } from './components/ProjectList/Ethical';
import { Fuwa } from './components/ProjectList/Fuwa';
import { Error } from './components/Error';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="projects/portfolio" element={<Portfolio />} />
      <Route path="projects/ethical" element={<Ethical />} />
      <Route path="projects/fuwafuwa" element={<Fuwa />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);