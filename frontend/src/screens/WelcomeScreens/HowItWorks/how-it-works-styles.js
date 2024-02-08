let howItWorksSection = { backgroundColor: "#13100e", minHeight: "140vh" };

let rowStyle = {
  display: "flex",
  minHeight: "200px",
};

let rowItem = {
  padding: "5px",
  width: "50vw",
  display: "flex",
};

let imageStyle = {
  width: "100%",
  height: "auto",
  objectFit: "cover",
  borderStyle: "groove",
  borderWidth: "1px",
  borderRadius: "1em",
};

let arrowBoxRightStyle = {
  height: "50%",
  borderTop: "dashed",
  borderRight: "dashed",
  borderColor: "#c29d62",
  width: "80%",
  alignSelf: "flex-end",
  borderTopRightRadius: "1em",
};

let arrowBoxDownStyle = {
  height: "90%",
  borderTop: "dashed",
  borderLeft: "dashed",
  borderColor: "#c29d62",
  width: "60%",
  marginLeft: "50%",
  alignSelf: "flex-end",
  borderTopLeftRadius: "1em",
};

let arrowContainerStyle = {
  height: "35px",
  border: "solid",
  borderColor: "transparent",
};

let arrowStyle = {
  marginLeft: "100%",
  marginTop: "-20px",
  height: "20px",
  width: "20px",
};

let responsiveRowStyle = {
  ...rowStyle,
  flexDirection: "column",
  alignItems: "center",
  height: "auto",
};
let responsiveImageContainerStyle = { width: "100%", textAlign: "center" };
let responsiveImageStyle = {
  ...imageStyle,
  width: "80%",
  height: "80%",
  objectPosition: "70% 50%",
};

let textResponsiveStyle = {
  color: "white",
  padding: "2vw",
  width: "80%",
};

export {
  rowItem,
  imageStyle,
  rowStyle,
  arrowBoxRightStyle,
  arrowBoxDownStyle,
  arrowContainerStyle,
  arrowStyle,
  howItWorksSection,
  responsiveRowStyle,
  responsiveImageContainerStyle,
  responsiveImageStyle,
  textResponsiveStyle,
};
