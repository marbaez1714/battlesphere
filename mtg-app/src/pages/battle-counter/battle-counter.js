import React from 'react';
import { Container, Col, Row, Card, CardHeader, CardBody, CardSubtitle, Button } from 'reactstrap';

function PlayerCounter(props) {
    return (
        <Col md="3">
            <Card>
                <CardHeader tag="h3">{props.player.name}</CardHeader>
                <CardBody>
                    <CardSubtitle>{props.player.counters[0]}</CardSubtitle>
                </CardBody>
                <CardBody>
                    <Button>Go somewhere</Button>
                </CardBody>
            </Card>
        </Col>
    )
}


export default function BattleCounter(props) {
    return (
        <Container>
            <Row>
                <PlayerCounter player={props.battleCounterState.players[0]} idx={0} />
                <PlayerCounter player={props.battleCounterState.players[1]} idx={1} />

                {console.log(props.battleCounterState.players[0])}
            </Row>


        </Container>

    )
}
