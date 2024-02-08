import { React, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import LoginScreen from "./LogInScreen/LoginScreen";
import { SignUpScreen } from "./SignUp/SignUpScreen";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
export const Header = () => {
  const [showLoginScreen, setShowLoginScreen] = useState(false);
  const [showSignUpScreen, setShowSignUpScreen] = useState(false);

  return (
    <header id="home">
      <Navbar
        fixed="top"
        expand="sm"
        className="secondaryTitle py-0 bg-pastiche"
        collapseOnSelect
        style={{
          borderBottom: "solid",
          borderColor: "grey",
          borderWidth: ".5px",
        }}
      >
        <Container fluid className="px-0">
          <Navbar.Brand
            href="#home"
            className="header-link ribbon bg-rust stint-ultra-expanded"
            style={{
              color: "white",
            }}
          >
            NRRCA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="flex-grow-1 justify-content-evenly">
              <Nav.Link href="#mission">Our Mission</Nav.Link>
              <Nav.Link href="#how-it-works">How It Works</Nav.Link>
              <Nav.Link href="#contestants">Contestants</Nav.Link>
              <Nav.Link
                href="#"
                onClick={() => {
                  setShowSignUpScreen(true);
                  setShowLoginScreen(false);
                }}
              >
                Sign Up
              </Nav.Link>
              <Nav.Link
                href="#"
                onClick={() => {
                  setShowLoginScreen(true);
                  setShowSignUpScreen(false);
                }}
              >
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showLoginScreen && (
        <LoginScreen setShowLoginScreen={setShowLoginScreen} />
      )}
      {showSignUpScreen && (
        <SignUpScreen setShowSignUpScreen={setShowSignUpScreen} />
      )}
    </header>
  );
};
//
