import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../../components/Message";
import Loader from "../../../components/Loader";
import { login } from "../../../actions/userActions";
import { clearUserError } from "../../../actions/userActions";

const LoginScreen = ({ setShowLoginScreen }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const closeButtonAction = () => {
    dispatch(clearUserError());
    setShowLoginScreen(false);
  };

  return (
    <div className="form-container-styles">
      <Form className="form-text" onSubmit={submitHandler}>
        <Form.Label className="text-center" as="h1">
          Sign In
        </Form.Label>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <p>Welcome Back.</p>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Required"
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase().trim())}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <div className="form-button-container">
          <Button variant="primary" type="submit" className="form-button">
            Sign In
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

export default LoginScreen;
