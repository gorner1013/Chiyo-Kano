import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

/* Pages */
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Services from "./pages/Service/ServicesPage";
import Project from "./pages/Project/ProjectPage";
import ProjectApp from "./pages/Project/ProjectApp";
import ProjectDesign from "./pages/Project/ProjectDesign";
// import ProjectGame from "./pages/Project/ProjectGame";

import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop";

function App() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //     navigate("/");
  //   }, 1000);
  // }, []);
  return (
    <>
      <RouterScrollTop />
      {loading ? (
        <div className="loading-pag">
          <div className="loader">
            <span>Peter Gorner</span>
            <span>Peter Gorner</span>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/service" element={<Services />}></Route>
          <Route exact path="/project" element={<Project />}></Route>
          <Route exact path="/project/app" element={<ProjectApp />} />
          <Route exact path="/project/design" element={<ProjectDesign />} />
          {/* <Route exact path="/project/game" element={<ProjectGame />} /> */}
        </Routes>
      )}
    </>
  );
}

export default App;
