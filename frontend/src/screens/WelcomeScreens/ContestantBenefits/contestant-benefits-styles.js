let mainBackgroundColor = "rgb(250 246 240)";
let mainTextStyle = "rgb(150 69 46)";

let rowStyles = { color: mainTextStyle };

let mainCardStyles = {
  borderColor: "transparent",
  backgroundColor: mainBackgroundColor,
};

let headerStyle = {
  fontSize: "clamp(.9rem, -0.875rem + 8.333vw, 1.25rem)",
  border: "none",
  textAlign: "center",
  backgroundColor: "transparent",
};

let mainTitle = {
  color: mainTextStyle,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  padding: "20px",
};

let imageStyles = {
  borderStyle: "groove",
  borderWidth: "1px",
  borderRadius: "1em",
  backgroundColor: mainBackgroundColor,
};

export { rowStyles, mainCardStyles, headerStyle, mainTitle, imageStyles };
