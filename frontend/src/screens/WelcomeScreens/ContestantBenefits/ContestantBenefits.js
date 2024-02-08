import React from "react";
import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { informationCardStyles } from "../../../styles/information-card";
import { constants as consts } from "../../../constants/constants";
import {
  rowStyles,
  mainCardStyles,
  headerStyle,
  mainTitle,
  imageStyles,
} from "./contestant-benefits-styles";

export const ContestantBenefits = () => {
  return (
    <section
      style={{
        ...informationCardStyles,
        backgroundColor: "rgb(250 246 240)",
        maxWidth: "100%",
        width: "100%",
      }}
      id="contestants"
      className="section-header"
    >
      <div
        style={{
          ...informationCardStyles,
          backgroundColor: "rgb(250 246 240)",
        }}
      >
        <div style={mainTitle}>
          <h2>Contestants</h2>
        </div>

        <Row style={rowStyles}>
          <Col sm={12} md={6} lg={4}>
            <Card className="my-3 p3 rounded" style={mainCardStyles}>
              <Card.Img
                variant="top"
                style={imageStyles}
                src={require("../../../images/" +
                  "joseph-hersh-1ZAduPYISHI-unsplash.jpg")}
              />
              <Card.Body>
                <Card.Header as="h5" style={{ ...headerStyle }}>
                  Member Benefits
                </Card.Header>
                <ul>
                  {consts?.memberBenefits
                    ? consts.memberBenefits.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))
                    : ""}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="my-3 p3 rounded" style={mainCardStyles}>
              <Card.Img
                variant="top"
                style={imageStyles}
                src={require("../../../images/" +
                  "melissa-walsh-3UMBe7S9ges-unsplash.jpg")}
              />
              <Card.Body>
                <Card.Header as="h5" style={headerStyle}>
                  What to expect
                </Card.Header>
                <ul>
                  {consts?.whatToExpect
                    ? consts.whatToExpect.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))
                    : ""}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="my-3 p3 rounded" style={mainCardStyles}>
              <Card.Img
                style={imageStyles}
                variant="top"
                src={require("../../../images/" +
                  "joseph-hersh-1ZAduPYISHI-unsplash.jpg")}
              />
              <Card.Body>
                <Card.Header as="h5" style={headerStyle}>
                  Lifetyle
                </Card.Header>
                <ul>
                  {consts?.lifestyle
                    ? consts.lifestyle.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))
                    : ""}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};
