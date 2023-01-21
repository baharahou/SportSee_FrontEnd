import React from "react";
import "./BarLeft.css";
export default function BarLeft() {
  return (
    <div className="barleft">
      <div className="left__icons">
        <div className="left__icons__icon">
          <img src="/assets/LotusPosition.png" alt="lotus"></img>
        </div>
        <div className="left__icons__icon">
          <img src="/assets/Crawl.png" alt="crawl"></img>
        </div>
        <div className="left__icons__icon">
          <img src="/assets/Bicycle.png" alt="bicycle"></img>
        </div>
        <div className="left__icons__icon">
          <img src="/assets/Dumbbells.png" alt="halteres"></img>
        </div>
      </div>
      <div className="left__copyright">Copiryght, SportSee 2020</div>
    </div>
  );
}
