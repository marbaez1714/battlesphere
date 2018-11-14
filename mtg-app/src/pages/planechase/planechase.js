import React from 'react';
import { Button, Card, CardHeader, CardSubtitle, CardBody, Container, Col, Row, Table } from 'reactstrap';
import './style.css'
export default function Planechase(props) {
    return (
        <Container style={{ visibility: props.planechaseState.visibility }}>
            <Row className="cardBackContainer">
                <Col md="6" className="imageContainer">
                    <img style={{ width: "95%" }} src={props.planechaseState.cardBack} alt='' />
                </Col>
                <Col md="6" className="yourDeck">
                    <Card className="deckCard" style={{ height: "100%" }}>
                        <CardHeader tag="h3">Your Planechase Deck:</CardHeader>
                        <CardBody>
                            <CardSubtitle>Number of cards: {props.planechaseState.playDeck.length}</CardSubtitle>
                            <ul>
                                {props.planechaseState.playDeck}
                            </ul>
                            <Button onClick={event => props.clearPlanechaseDeck()}>Clear</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md="12" className="startContainer">
                    <Button className="startButton" onClick={event => props.changePlanechaseView()}>Start Your Game!</Button>
                </Col>
            </Row>

            <Table striped className="planeCards">
                <tbody>
                    {props.planechaseState.formattedCards}
                </tbody>
            </Table>
        </Container >
    )
}
