import background from "../../../images/karsten-winegeart-VaBKpvzVOMI-unsplash.jpg";
import { button } from "../../../styles/button";

let item = {
  flexGrow: "2",
};
let welcomeImageWrapper = {
  ...item,
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top center",
  width: "100%",
  maxWidth: "50%",
};

let buttonStyle = {
  ...button,
  width: "fit-content",
  borderColor: "white",
};

export { item, welcomeImageWrapper, buttonStyle };
