// Displayed on larger screens
import React from "react";
import {
  rowItem,
  imageStyle,
  rowStyle,
  arrowBoxRightStyle,
  arrowBoxDownStyle,
  arrowContainerStyle,
  arrowStyle,
} from "./how-it-works-styles";

import { howItWorksConsts } from "./how-it-works-constants";

const HowItWorksMain = () => {
  return (
    <section id="howItWorksMain">
      <section id="howItWorksRowOne" style={rowStyle}>
        <div style={{ ...rowItem, width: "33vw", marginLeft: "5vw" }}>
          <img
            alt={howItWorksConsts.rowOne.imageAlt}
            src={howItWorksConsts.rowOne.imageSrc}
            style={{ ...imageStyle, objectPosition: "70% 50%" }}
          />
        </div>
        <div style={rowItem}>
          <div style={arrowBoxRightStyle}></div>
        </div>
      </section>
      <div
        id="downArrowRow"
        style={{
          ...arrowContainerStyle,
          width: "78.1%",
        }}
      >
        <div className="down-arrow" style={arrowStyle}></div>
      </div>

      <section id="howItWorksRowtwo" style={rowStyle}>
        <div style={rowItem}>
          <div style={{ textAlign: "center", width: "63%", marginLeft: "5vw" }}>
            <p style={{ color: "white", marginTop: "-20px" }}>
              {howItWorksConsts.rowThree.text}
            </p>
          </div>
        </div>
        <div
          style={{
            ...rowItem,
            width: "33vw",
            marginLeft: "10vw",
          }}
        >
          <img
            alt={howItWorksConsts.rowTwo.imageAlt}
            src={howItWorksConsts.rowTwo.imageSrc}
            style={{ ...imageStyle, objectPosition: "70% 50%" }}
          />
        </div>
      </section>

      <section id="howItWorksRowThree" style={{ ...rowStyle, height: "auto" }}>
        <div
          style={{
            ...rowItem,
            width: "33vw",
            marginLeft: "5vw",
          }}
        >
          <img
            alt={howItWorksConsts.rowThree.imageAlt}
            src={howItWorksConsts.rowThree.imageSrc}
            style={{
              ...imageStyle,
              margin: "auto",
              display: "block",
              objectPosition: "20% 50%",
            }}
          />
        </div>
        <div style={{ ...rowItem, width: "22vw" }}>
          <div style={arrowBoxDownStyle}></div>
        </div>
        <div
          style={{
            ...rowItem,
            justifyContent: "center",
            width: "32vw",
          }}
        >
          <div
            style={{
              textAlign: "center",
              width: "33vw",
            }}
          >
            <p style={{ color: "white", padding: "1vw" }}>
              {howItWorksConsts.rowThree.text}
            </p>
          </div>
        </div>
      </section>
      {/* TODO fix the pointy down arrows so they stop breaking the site from desktop to mobile */}
      <div
        id="downArrowRow"
        style={{ ...arrowContainerStyle, width: "49.15%" }}
      >
        <div className="down-arrow" style={arrowStyle}></div>
      </div>
    </section>
  );
};

export default HowItWorksMain;
