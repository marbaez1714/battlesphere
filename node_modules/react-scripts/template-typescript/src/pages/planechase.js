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

function DeckCard(props) {
    return (
        <Col xs="6">
            <p className="deckCard"><i className="far fa-times-circle removeButton" onClick={event => props.removeCardFromGameDeck(props.card, props.idx)} />{props.card.name}</p>
        </Col>
    )
}

function ButtonGroup(props) {
    return (
        <Col xs="12" md="6" className="scale-in-center-2sDelay">
            <Col xs="12" style={{ paddingLeft: "0.5vh", paddingRight: "0.5vh" }}><Button className="addAllButton" onClick={event => props.addAll()} style={{ borderRadius: "0" }}>Add All</Button></Col>
            <Col xs="12" style={{ paddingLeft: "0.5vh", paddingRight: "0.5vh" }}><Button className="clearAllButton" onClick={event => props.removeAll()} style={{ borderRadius: "0" }}>Clear Deck</Button></Col>
            <Col xs="12" style={{ paddingLeft: "0.5vh", paddingRight: "0.5vh" }}><Button className="startGameButton" onClick={event => props.startGame()} style={{ borderRadius: "0" }} color="success">Stard Game</Button></Col>
        </Col>
    )
}

function Game(props) {
    if (props.planechaseState.gameDeck.length > 0) {
        return (
            <Row className="scale-in-center-2sDelay">
                <Col xs="12"><img className="planeCard currentCard" onClick={event => props.nextCard()} src={props.planechaseState.gameDeck[0].image_uris.normal} alt="" /></Col>
                <Button className="endGameButton" style={{ borderRadius: "0" }} onClick={event => props.endGame()}>End Game</Button>
            </Row>
        )
    } else {
        return ("")
    }
}
export default function Planechase(props) {
    return (
        <Container className="PlanechaseWrapper">
            <div style={{ display: (props.planechaseState.gameGoing ? "none" : "") }}>
                <Row>
                    <Col xs="12" md="6">
                        <div className="gameDeck scale-in-center-2sDelay">
                            <Row>
                                {props.planechaseState.gameDeck.map((card, idx) => <DeckCard card={card} idx={idx} removeCardFromGameDeck={props.removeCardFromGameDeck} />)}
                            </Row>
                        </div>
                    </Col>
                    <ButtonGroup addAll={props.addAll} removeAll={props.removeAll} startGame={props.startGame} />

                </Row>
                <Row>
                    {props.planechaseState.allPlaneCards.map((card, idx) => <PlaneCard card={card} key={idx} addToPlanechaseDeck={props.addToPlanechaseDeck} idx={idx} />)}
                </Row>
            </div>
            <div style={{ display: (props.planechaseState.gameGoing ? "" : "none") }}>
                <Game planechaseState={props.planechaseState} nextCard={props.nextCard} endGame={props.endGame} />
            </div>
        </Container>
    )
}