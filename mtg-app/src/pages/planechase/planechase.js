import React from 'react';
import { Button, Card, CardHeader, CardSubtitle, CardBody, Container, Col, Row, Table } from 'reactstrap';
import './style.css'

function DeckBuilder(props) {
    return (
        <Container>
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

function PlanechaseGame(props) {
    return (
        <Container>
            <h1 >heheheehehe</h1>
            <img src={props.planechaseState.gameData[0].image} style={{ transform: "rotate(90deg)" }} />
            <Button className="startButton" onClick={event => props.changePlanechaseView()}>Start Your Game!</Button>
        </Container >

    )
}

export default function Planechase(props) {
    return (
        <div>
            {props.planechaseState.builderVisibility ? <DeckBuilder changePlanechaseView={props.changePlanechaseView} clearPlanechaseDeck={props.clearPlanechaseDeck} planechaseState={props.planechaseState} /> : ''}
            {props.planechaseState.gameVisibility ? <PlanechaseGame planechaseState={props.planechaseState} changePlanechaseView={props.changePlanechaseView} /> : ''}
        </div>
    )
}
