import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Row, Col } from "react-bootstrap";
import {informationCardStyles as infoStyle} from '../styles/information-card'
import {button} from '../styles/button'
import {constants as consts} from '../common/constants'
import { Container } from "react-bootstrap";

export const SupporterDesc = () => {
  return (
    <Container>
    <Row style={{...infoStyle, maxWidth:"45%"}}>
        <Card className="my-3 p3 rounded">
            <Card.Body>
            <Card.Header as='h5'>What Your Support Does</Card.Header>
            <Container>
              <ul>
                {consts?.becomeASupporter ? consts.becomeASupporter.map((benefit, index) => (<li key={index}>{benefit}</li>)) : ""}
              </ul>
              </Container>
              <Container className='text-center'>
                <Button style={button}>Lend Your Support</Button>
              </Container>
            </Card.Body>
        </Card>
    </Row>
    </Container> 
  )
}

