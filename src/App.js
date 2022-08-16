import React from "react";
import "./style/global.scss";
import main from "./assets/main.png";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="signature">
      <div className="sinature__main__container">
        <div className="main__header__img">
          <img src={main} alt="backgroud" />
        </div>
        <div className="sign__nav__bar__wraper">
          <div className="sign__logo__main">
            <img src={logo} alt="logo" />
          </div>
          <div className="sign__nav__links__wraper">
            <a href="#" className="sign__nav__link">
              Home
              <title>Home</title>
            </a>
            <a href="#" className="sign__nav__link">
              About us
            </a>
            <a href="#" className="sign__nav__link">
              Amenities
            </a>
            <a href="#" className="sign__nav__link">
              Location
            </a>
            <a href="#" className="sign__nav__link">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
