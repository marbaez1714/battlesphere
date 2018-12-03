import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap'

function PlaneCard(props) {
    return (
        <Col xs="12" md="4" className="planeCardWrapper" style={{ paddingLeft: "0.5vh", paddingRight: "0.5vh" }}>
            <Button className="cardButton scale-in-center-2sDelay" onClick={event => props.addToPlanechaseDeck(props.card, props.idx)}>
                <p className="planeName">{props.card.name}</p>
                <img className="planeCard" src={props.card.image_uris.border_crop} alt="" />
            </Button>
        </Col>
    )
}



export default function Planechase(props) {
    return (
        <Container className="PlanechaseWrapper">
            <Row>
                <Col xs="6" style={{ paddingLeft: "0.5vh", paddingRight: "0.5vh" }}><Button className="addAllButton" onClick={event => props.addAll()} style={{ borderRadius: "0" }}>Add All</Button></Col>
                <Col xs="6" style={{ paddingLeft: "0.5vh", paddingRight: "0.5vh" }}><Button className="clearAllButton" onClick={event => props.removeAll()} style={{ borderRadius: "0" }}>Clear Deck</Button></Col>

                {props.planechaseState.allPlaneCards.map((card, idx) => <PlaneCard card={card} key={idx} addToPlanechaseDeck={props.addToPlanechaseDeck} idx={idx} />)}
            </Row>
        </Container>
    )
}