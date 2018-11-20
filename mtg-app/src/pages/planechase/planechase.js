import React from 'react';
import { Container, Col, Card, CardBody, CardTitle, CardText, Row, Button } from 'reactstrap'
import './style.css'

function PlayDeck(props) {
    return (
        <Col md={{ size: 8, offset: 2 }} >
            <Card className='playDeck'>
                <CardBody>
                    <CardTitle>Your Planechase Deck</CardTitle>
                    <CardText>These cards will be shuffled and will act as your Planechase deck.</CardText>

                    {/* Buttons to 'Add All' , 'Start Game' , and 'Clear Deck' */}
                    <Row>
                        <Col md='4'><Button onClick={event => props.clearAll()} style={{ marginBottom: '1vmax', width: '100%' }}>Clear Deck</Button></Col>
                        <Col md='4'><Button onClick={event => props.addAll()} style={{ marginBottom: '1vmax', width: '100%' }}>Add All</Button></Col>
                        <Col md='4'><Button onClick={event => props.startGame()} style={{ marginBottom: '1vmax', width: '100%' }}>Start!</Button></Col>
                    </Row>

                    {/* Creates list of all Planechase cards that can be used with buttons to remove*/}
                    <Row className="selectedCards" >
                        {props.planechaseState.playDeck.map(
                            (card, idx) =>
                                <Col md='6' key={idx}>
                                    <p>
                                        <i onClick={event => props.removeCard(idx)} className="fas fa-times"></i>
                                        {"    " + card.name}
                                    </p>
                                </Col>

                        )}
                    </Row>



                </CardBody>
            </Card>
        </Col>
    )
}

function AllCards(props) {
    return (

        props.planechaseState.planechaseCards.map(
            (card, idx) =>
                <Col md="4" key={idx} className="cardContainer">
                    <Card className="planeCardContainer" onClick={event => props.addCard(card)}>
                        <CardBody>
                            <img className="planeCardImage" src={card.image} alt={card.name} />
                        </CardBody>
                    </Card>
                </Col>
        )


    )
}

function PickCards(props) {
    return (
        <Row>
            <PlayDeck planechaseState={props.planechaseState} addAll={props.addAll} removeCard={props.removeCard} clearAll={props.clearAll} startGame={props.startGame} />
            <AllCards planechaseState={props.planechaseState} addCard={props.addCard} />
        </Row>
    )
}

function PlanchaseGame(props) {
    return (
        <Row>
            <Col md='12' className="currentPlaneCardContainer" onClick={event => props.nextCard()}>
                <img className="currentPlaneCard" src={props.planechaseState.playDeck[0].image} alt={props.planechaseState.playDeck[0].name} />
            </Col>
            <Col md='12'>
                <Button className='goBackButton' onClick={event => props.restartGame()} >Rebuild Your Deck</Button>
            </Col>
        </Row >
    )
}

export default function Planechase(props) {
    return (
        <Container className='planechaseContainer'>
            {props.planechaseState.gameStart ?
                <PlanchaseGame planechaseState={props.planechaseState} restartGame={props.restartGame} nextCard={props.nextCard} /> :
                <PickCards planechaseState={props.planechaseState} addCard={props.addCard} addAll={props.addAll} removeCard={props.removeCard} clearAll={props.clearAll} startGame={props.startGame} />
            }

        </Container>
    )
}