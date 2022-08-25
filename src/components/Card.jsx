import React from "react";
import nature from "../assets/nature.png";
import signature from "../assets/signature.png";

function Card() {
  return (
    <div>
      <div id="nature__section" className="nature__container">
        <div className="nature__logo__start">
          <img src={signature} alt="signature" />
        </div>
        <div className="nature__container__left">
          <div className="nature__container__left__text">
            <div className="nature__container__left__text__heading">
              Closer to Nature
            </div>
            <div className="nature__container__left__text__sub__heading">
              While easing you into a calmer pace of life, Signature Hotels
              Murree's all-valley facing lavish suites blend modern silhouettes
              with contemporary space to create inviting retreats.
            </div>
          </div>
        </div>
        <div className="nature__container__right">
          <div className="nature__container__right__img">
            <img src={nature} alt="nature" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
