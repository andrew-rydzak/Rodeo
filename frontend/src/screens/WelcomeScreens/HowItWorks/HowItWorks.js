import React from "react";
import { rowStyle, howItWorksSection } from "./how-it-works-styles";
import { rowFourCards } from "./how-it-works-constants";
import HowItWorksMain from "./HowItWorksMain";
import HowItWorksCard from "./HowItWorksCard";
import { useMediaQuery } from "react-responsive";
import HowItWorksResponsive from "./HowItWorksResponsive";

const HowItWorks = () => {
  let isSmallScreen = useMediaQuery({ query: "(max-width: 800px)" });

  let HowItWorksDisplay = isSmallScreen ? HowItWorksResponsive : HowItWorksMain;

  return (
    <section
      className="section-header"
      id="how-it-works"
      style={howItWorksSection}
    >
      <h2
        style={{
          color: "white",
          textAlign: "center",
          padding: "20px",
          paddingBottom: "2.5vh",
        }}
      >
        How It Works
      </h2>
      <HowItWorksDisplay />
      <div
        id="howItWorksRowfour"
        style={{
          ...rowStyle,
          height: "fit-content",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {rowFourCards.map((card) => (
          <HowItWorksCard
            key={card.id}
            imgSrc={card.imgSrc}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
