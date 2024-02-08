import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../../components/Message";
import Loader from "../../../components/Loader";
import { register, clearUserError } from "../../../actions/userActions";
// TODO add the same back end validation for this as well
// adjust the spinner loading

export const SignUpScreen = ({ setShowSignUpScreen }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const closeButtonAction = () => {
    dispatch(clearUserError());
    setShowSignUpScreen(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const validInfo = validatePassword() && validateNames() && validateEmail();

    if (validInfo) {
      setMessage(null);
      dispatch(register(firstName, lastName, email, password));
      if (!error) {
        // TODO redirect to login success landing page
      }
    }
  };

  const validatePassword = () => {
    const match = password === confirmPassword;
    if (!match) {
      setMessage("Passwords do not match");
      return false;
    }
    const strong =
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[^a-zA-Z]/.test(password) &&
      /[0-9]/.test(password);

    if (!strong) {
      setMessage(
        <ul>
          <li key={"capital"}>
            Password must contain at least one capital letter
          </li>
          <li key={"special"}>one special character</li>
          <li key={"number"}>one number</li>
          <li key={"length"}>and be at least 8 characters long</li>
        </ul>
      );

      return false;
    }
    return true;
  };

  const validateNames = () => {
    const regName = /^[A-Za-z]+$/;

    let validFirstName = regName.test(firstName);
    let validLastName = regName.test(lastName);

    if (!validFirstName) {
      setMessage("Not a valid first name.");
      return false;
    }
    if (!validLastName) {
      setMessage("Not a valid last name.");
      return false;
    }

    // Store the name properly in DB so it does not need to be adjusted later
    //TODO make sure nothing else needs to be stored in a particular way lime email
    return true;
  };

  const validateEmail = () => {
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let validEmail = regEmail.test(email);
    if (!validEmail) {
      setMessage("Not a valid email.");
      return false;
    }
    return true;
  };

  // TODO look up how to change state then look up that new state
  return (
    <div className="form-container-styles">
      <Form className="form-text" onSubmit={submitHandler}>
        <Form.Label className="text-center" as="h1">
          Sign Up
        </Form.Label>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Required"
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase().trim())}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="firstName"
            placeholder="Required"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value.trim())}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="lastName"
            placeholder="Required"
            value={lastName}
            onChange={(e) => setLastName(e.target.value.trim())}
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="userType">
          <Form.Label className="text-center" as="h5">
            Recieve Information Regarding:
          </Form.Label>
          <Form.Check type="checkbox" label="Supporter" />
          <Form.Check type="checkbox" label="Contestant" />
        </Form.Group> */}

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <div className="form-button-container">
          <Button variant="primary" type="submit" className="form-button">
            Register
          </Button>
          <Button
            variant="secondary"
            className="form-button"
            onClick={() => {
              closeButtonAction();
            }}
          >
            Close
          </Button>
        </div>
      </Form>
    </div>
  );
};
