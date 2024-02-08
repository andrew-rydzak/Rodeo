let id = 0;
let getID = () => {
  id = id + 1;
  return id;
};

const howItWorksConsts = {
  rowOne: {
    imageSrc: require("../../../images/dulcey-lima-as9sa7c81e4-unsplash.jpg"),
    imageAlt: "dulcey-lima-unsplash",
    text: "This is a whole lot of text that can be changed at any time for any reason for update purposes",
  },

  rowTwo: {
    imageSrc: require("../../../images/dulcey-lima-as9sa7c81e4-unsplash.jpg"),
    imageAlt: "dulcey-lima-unsplash",
    text: "This is a whole lot of text that can be changed at any time for any reason for update purposes",
  },
  rowThree: {
    imageSrc: require("../../../images/meg-macdonald-PDR_DACZn4A-unsplash.jpg"),
    imageAlt: "meg-macdonald",
    text: "This is a whole lot of text that can be changed at any time for any reason for update purposes",
  },
};

const rowFourCards = [
  {
    id: getID(),
    imgSrc: require("../../../images/karsten-winegeart-VaBKpvzVOMI-unsplash.jpg"),
    title: "title one",
    text: "text one",
  },
  {
    id: getID(),
    imgSrc: require("../../../images/karsten-winegeart-VaBKpvzVOMI-unsplash.jpg"),
    title: "title two",
    text: "text two",
  },
  {
    id: getID(),
    imgSrc: require("../../../images/karsten-winegeart-VaBKpvzVOMI-unsplash.jpg"),
    title: "title three",
    text: "text three",
  },
];

export { rowFourCards, howItWorksConsts };
