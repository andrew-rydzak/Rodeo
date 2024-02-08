import { React } from "react";
import { constants as consts } from "../../../constants/constants";
import { Card, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { item, welcomeImageWrapper, buttonStyle } from "./mission-styles";
const MissionScreen = () => {
  let isSmallScreen = useMediaQuery({ query: "(max-width: 800px)" });
  let buttonResponsive = isSmallScreen
    ? {
        ...buttonStyle,
        fontSize: ".8em",
        borderWidth: ".5px",
      }
    : { ...buttonStyle };

  let welcomeImageWrapperResponsive = isSmallScreen
    ? { display: "none" }
    : { ...welcomeImageWrapper };

  return (
    <section
      style={{
        display: "flex",
        flexWrap: "nowrap",
        backgroundColor: "#624e44",
        height: "fit-content",
      }}
      id="mission"
    >
      <Card
        className="text-center section-header"
        style={{
          ...item,
          color: "white",
          border: "none",
          backgroundColor: "#624e44",
          width: "50%",
        }}
      >
        <Card.Body>
          <Card.Title as="h2">Our Mission</Card.Title>
          <Card.Text
            style={{ fontSize: "clamp(1rem, 1vw, 1.5rem)", textAlign: "left" }}
          >
            {consts.missionStatment}
          </Card.Text>
          <Button
            style={{
              ...buttonResponsive,
            }}
          >
            Learn More
          </Button>
        </Card.Body>
      </Card>
      <div style={welcomeImageWrapperResponsive}></div>
    </section>
  );
};

export default MissionScreen;
