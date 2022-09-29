import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Océane Vignot</h1>
          <h2>Développeuse Fullstack</h2>
          <div className="pdf">
            <a href="./media/oceane-vignot-cv.pdf" target="_blank">
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
