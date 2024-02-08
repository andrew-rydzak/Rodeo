import welcomeBackground from "../../../images/joseph-keil-O0vW1bBOrFI-unsplash.jpg";

let boxWrapper = {
  overflow: "hidden",
  flexWrap: "wrap",
  height: "740px",
  width: "100%",
  backgroundImage: `url(${welcomeBackground})`,
  opacity: 0.9,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top center",
};

let boxStyle = {
  width: "50vw",
  textAlign: "center",
  color: "white",
  background: "rgba(0, 0, 0, .65)",
  borderStyle: "groove",
  padding: "2rem",
  borderWidth: "1px",
  borderRadius: "1em",
  marginTop: "20vh",
  marginLeft: "10vh",
};

let buttonContainer = {
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
};

export { boxWrapper, boxStyle, buttonContainer };
