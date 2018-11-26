import React from 'react';
import { Button, Container, Col, Row, Card, CardBody, CardHeader, CardFooter, CardSubtitle } from 'reactstrap';
import './style.css'

function PlayerCard(props) {
    return (
        <Col md='4' className="playerCard">
            <Card>
                <CardHeader tag="h3">{props.playerInfo[0]}</CardHeader>
                <CardBody>
                    <CardSubtitle>
                        <Button onClick={event => props.increaseNumber(parseInt(props.playerInfo[0]), 1)}><i className="fas fa-plus " style={{ color: "white" }} /></Button>
                        {props.playerInfo[1]}
                        <Button><i className="fas fa-minus" style={{ color: "white" }} /></Button>
                    </CardSubtitle>

                </CardBody>
                <CardFooter><Button onClick={event => props.removePlayer(props.index)}>Remove</Button></CardFooter>

            </Card>
        </Col>
    )
}





export default function BattleCounter(props) {
    return (

        <Container className="battleCounterContainer">
            <Row>
                <Col md={{ size: "3", offset: "3" }}>
                    <Button className="addPlayerButton" onClick={event => props.addPlayer()}>Add Player  <i className="fas fa-plus" style={{ color: "white", marginLeft: '1rem' }} /></Button>
                </Col>
                <Col md={{ size: "3" }}>
                    <Button className="addPlayerButton" onClick={event => props.removeAllPlayers()}>Remove All<i className="fas fa-minus" style={{ color: "white", marginLeft: '1rem' }} /></Button>
                </Col>
            </Row>
            <Container className="counterContainer">
                <Row>
                    {props.battleCounterState.players.map((player, idx) => <PlayerCard playerInfo={player} key={idx} index={idx} removePlayer={props.removePlayer} increaseNumber={props.increaseNumber} />)}
                </Row>
            </Container>
        </Container>

    )
}
