import React from 'react';
import { Container, Col, Card, CardBody, CardTitle, CardText, Row, Button } from 'reactstrap'
import './style.css'


export default function Planechase(props) {
    return (
        <Container className='planechaseContainer'>
            <Row>
                <Col md='12' >
                    <Card className='playDeck'>
                        <CardBody>
                            <CardTitle>Your Planechase Deck</CardTitle>
                            <CardText>These cards will be shuffled and will be your Planechase deck.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>

                {props.displayAllCards()}


            </Row>

        </Container>
    )
}