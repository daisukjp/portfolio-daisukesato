import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Service from "./components/projectHome/Service";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <div
          style={{
            maxWidth: "800px",
            marginRight: "auto",
            marginLeft: "auto",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Service />
            <Skills />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
