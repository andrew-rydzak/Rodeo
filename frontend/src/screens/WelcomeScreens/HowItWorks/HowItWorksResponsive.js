import React from "react";
import {
  responsiveRowStyle,
  responsiveImageContainerStyle,
  responsiveImageStyle,
  textResponsiveStyle,
} from "./how-it-works-styles";
import { howItWorksConsts } from "./how-it-works-constants";

const HowItWorksResponsive = () => {
  return (
    <section>
      <section
        id="howItWorksRowOne"
        style={{
          ...responsiveRowStyle,
        }}
      >
        <div
          style={{
            ...responsiveImageContainerStyle,
          }}
        >
          <img
            alt={howItWorksConsts.rowOne.imageAlt}
            src={howItWorksConsts.rowOne.imageSrc}
            style={{ ...responsiveImageStyle }}
          />
        </div>
        <p style={{ ...textResponsiveStyle }}>{howItWorksConsts.rowOne.text}</p>
        <div className="down-arrow"></div>
      </section>
      <section
        id="howItWorksRowTwo"
        style={{
          ...responsiveRowStyle,
        }}
      >
        <div style={{ ...responsiveImageContainerStyle }}>
          <img
            alt={howItWorksConsts.rowTwo.imageAlt}
            src={howItWorksConsts.rowTwo.imageSrc}
            style={{
              ...responsiveImageStyle,
            }}
          />
        </div>
        <p style={{ ...textResponsiveStyle }}>{howItWorksConsts.rowTwo.text}</p>
        <div className="down-arrow"></div>
      </section>
    </section>
  );
};

export default HowItWorksResponsive;
