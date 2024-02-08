import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { Contestant } from "./Contestant.js";

//TODO pagination will be important with search!!
export const Contestants = () => {
  const [contestants, setContestants] = useState([]);

  // useEffect(() => {
  //   const fetchContestants = async () => {
  //     const { data } = await axios.get("/api/users");
  //     setContestants(data);
  //   };
  //   fetchContestants();
  // }, []);

  return (
    <>
      <h1>Contestants</h1>
      <Row>
        {contestants.map((contestant) => (
          <Col key={contestant._id} sm={12} md={6} lg={4}>
            <Contestant contestant={contestant} />
          </Col>
        ))}
      </Row>
    </>
  );
};
