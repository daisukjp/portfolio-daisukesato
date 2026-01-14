import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./components/about/AboutPage";
import { ProjectsPage } from "./components/Projects/ProjectsPage";
import { Portfolio } from "./components/ProjectList/Portfolio";
import { Ethical } from "./components/ProjectList/Ethical";
import { Fuwa } from "./components/ProjectList/Fuwa";
import { Error } from "./components/Error/Error";
import AlbumMain from "./components/album/AlbumMain";
import ImageUp from "./components/album/ImageUp";

import TaggedImagePage from "./components/album/page/TaggedImagePage";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="image" element={<AlbumMain />} />
      <Route path="image/upload" element={<ImageUp />} />
      <Route path="image/:tag" element={<TaggedImagePage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="projects/portfolio" element={<Portfolio />} />
      <Route path="projects/ethical" element={<Ethical />} />
      <Route path="projects/fuwafuwa" element={<Fuwa />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </HashRouter>
);
