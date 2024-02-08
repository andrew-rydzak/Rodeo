import React from "react";

const HowItWorksCard = (props) => {
  let item = {
    marginTop: "10px",
    color: "white",
  };
  let imageStyle = {
    borderRadius: "50%",
    maxWidth: "90%",
    maxHeight: "90%",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxHeight: "400px",
        maxWidth: "300px",
      }}
    >
      <img
        alt="karsten-winegear"
        className="image-holder"
        src={props.imgSrc}
        style={{ ...item, ...imageStyle }}
      />
      <h5
        className="title-holder"
        style={{ ...item, padding: "15px 20px 20px" }}
      >
        {props.title}
      </h5>
      <p className="text-holder" style={{ ...item, padding: "0 20px 20px" }}>
        {props.text}
      </p>
    </div>
  );
};

export default HowItWorksCard;
