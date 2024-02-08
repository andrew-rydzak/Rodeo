import bcrypt from "bcryptjs";

const users = [
  // TODO make sure emails are put in all caps into db etc ....
  {
    firstName: "John",
    lastName: "John",
    userType: "Contestant",
    password: bcrypt.hashSync("John", 10),
    email: "John@email.com",
    image: "../images/cowboy.jpg",
    events: [
      "Bareback Riding",
      "Steer Wrestling",
      "Tie-Down Roping",
      "Saddle Bronc Riding",
    ],
    background:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    firstName: "Bill",
    lastName: "Bill",
    userType: "Contestant",
    password: bcrypt.hashSync("Bill", 10),
    email: `Bill@email.com`,
    image: "../images/cowboy.jpg",
    events: [
      "Bareback Riding",
      "Steer Wrestling",
      "Tie-Down Roping",
      "Saddle Bronc Riding",
    ],
    background:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    firstName: "Ted",
    lastName: "Ted",
    userType: "Supporter",
    email: `Ted@email.com`,
    password: bcrypt.hashSync("Ted", 10),
    image: "../images/cowboy.jpg",
    events: [
      "Bareback Riding",
      "Steer Wrestling",
      "Tie-Down Roping",
      "Saddle Bronc Riding",
    ],
    background:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    firstName: "Andrew",
    lastName: "Andrew",
    userType: "Staff",
    password: bcrypt.hashSync("Andrew", 10),
    email: `Andrew@email.com`,
    image: "../images/cowboy.jpg",
    isAdmin: true,
    events: [
      "Bareback Riding",
      "Steer Wrestling",
      "Tie-Down Roping",
      "Saddle Bronc Riding",
    ],
    background:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

// module.exports = users; // is common js for export
export default users;
