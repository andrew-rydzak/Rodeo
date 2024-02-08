import React from "react";
import { Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { button } from "../../../styles/button";
import { boxWrapper, boxStyle, buttonContainer } from "./welcome-styles";

export const WelcomeScreen = () => {
  let isSmallScreen = useMediaQuery({ query: "(max-width: 550px)" });

  let boxStyleResponsive = isSmallScreen
    ? {
        ...boxStyle,
        width: "80%",
        marginLeft: "10%",
      }
    : { ...boxStyle };

  let buttonResponsive = isSmallScreen
    ? {
        ...button,
        fontSize: ".8em",
        width: "fit-content",
      }
    : { ...button };

  let boxWrapperResponsive = isSmallScreen
    ? {
        ...boxWrapper,
        height: "500px",
      }
    : { ...boxWrapper };
  return (
    <div style={boxWrapperResponsive}>
      <div style={boxStyleResponsive}>
        <div>
          <h2 style={{ fontSize: "clamp(1.1rem, 4vw, 4rem)" }}>
            Welcome To Our Rodeo
          </h2>
          <p
            style={{
              fontSize: "clamp(1em, 1.5vw, 3rem)",
            }}
          >
            this is a lot of text to get you excited!!!
          </p>
        </div>
        <div style={buttonContainer}>
          <Button style={buttonResponsive}>Learn More</Button>
          <Button style={buttonResponsive}>Sign Up</Button>
        </div>
      </div>
    </div>
  );
};
