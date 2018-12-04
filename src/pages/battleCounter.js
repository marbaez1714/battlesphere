import React from 'react';
import { Container, Card, CardBody, CardHeader, Col, Button, Row } from 'reactstrap';
import '../App.css';

function PlayerCard(props) {
    return (
        <Col xs="6" md="4" style={{ paddingLeft: "0.5vh", paddingRight: "0.5vh" }}>
            <Card className="playerCard scale-in-center" style={{ borderRadius: '0' }} key={props.idx}>
                <CardHeader><input className="playerName" placeholder={"Player " + props.playerNumber} /></CardHeader>
                <CardBody style={{ padding: "1vh" }}>
                    <Row>
                        {props.player.map((player, idx) =>
                            <Col xs="12" key={idx}>
                                <Row className="counterNumber">
                                    <Col xs="4" className="plusContainer">
                                        <i className="far fa-plus-square" onClick={event => props.plusOne(props.idx, idx)} style={{ cursor: "pointer" }} />
                                    </Col>
                                    <Col xs="4" style={{ padding: "0" }}>
                                        <p style={{ marginBottom: "0" }}>{player}</p>
                                    </Col>
                                    <Col xs="4" className="minusContainer">
                                        <i className="far fa-minus-square" onClick={event => props.minusOne(props.idx, idx)} style={{ cursor: "pointer" }} />
                                    </Col>
                                </Row>

                            </Col>
                        )}
                    </Row>

                </CardBody>
                <Button onClick={event => props.addCounter(props.idx)} style={{ borderRadius: '0' }}>Add Counter</Button>
            </Card>
        </Col>
    )
}

export default function BattleCounter(props) {
    return (
        <Container className="BattleCounterWrapper scale-in-center">
            <Row>
                <Col xs="6" style={{ paddingLeft: "0.5vh", paddingRight: "0.5vh" }}>
                    <Button onClick={event => props.addPlayer()} style={{ width: "100%", borderRadius: "0" }}>Add Player</Button>
                </Col>
                <Col xs="6" style={{ paddingLeft: "0.5vh", paddingRight: "0.5vh" }}>
                    <Button onClick={event => props.removeAllPlayers()} style={{ width: "100%", borderRadius: "0" }}>Remove All Players</Button>
                </Col>
            </Row>
            <Row>
                {props.battleCounterState.players.map((player, idx) => <PlayerCard player={player} playerNumber={idx + 1} idx={idx} addCounter={props.addCounter} plusOne={props.plusOne} minusOne={props.minusOne} key={idx} />)}
            </Row>
        </Container>
    )
}