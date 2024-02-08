import React from 'react';
import {Card} from 'react-bootstrap';

//export const Contestant = (props) => { 
export const Contestant = ({contestant}) => { // now we access this directly
  return (
    <Card className='my-3 p3 rounded'>
        <a href={`contestant/${contestant._id}`}>
            <Card.Img src={contestant.image} varient='top'/>
        </a>
        <Card.Body>
            <a href={`contestant/${contestant._id}`}>
                <Card.Title as='div'>
                    <strong>{contestant.name}</strong>
                </Card.Title>   
            </a>
            <Card.Text as='div'>
                <div className='my-3'>
                    <strong>Events:</strong> {contestant.events.join(", ")}
                </div>
            </Card.Text>
            <Card.Text as='div'>
                <div className='my-3'>
                <strong>Background:</strong> {contestant.background}
                </div>
            </Card.Text>
        </Card.Body>
    </Card>
  )
}
