import React from 'react';
import { Container, Col, Row, Card, CardBody, CardImg, CardSubtitle, CardTitle, CardText } from 'reactstrap'
import './style.css'

export default function HomePage(props) {
    return (
        <Container>
            <Row>
                <Col md="4" className="cards">
                    <Card>
                        <CardImg top width="100%" src="https://img.scryfall.com/cards/art_crop/en/c16/143.jpg?1517813031" alt="Card image cap" />
                        <CardBody id="deckbuilder-card">
                            <CardTitle >Deck Builder</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" className="cards">
                    <Card>
                        <CardImg top width="100%" src="https://img.scryfall.com/cards/art_crop/en/c16/143.jpg?1517813031" alt="Card image cap" />
                        <CardBody id="deckbuilder-card">
                            <CardTitle >Card Search</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" className="cards">
                    <Card>
                        <CardImg top width="100%" src="https://img.scryfall.com/cards/art_crop/en/c16/143.jpg?1517813031" alt="Card image cap" />
                        <CardBody id="deckbuilder-card">
                            <CardTitle >Set Lists</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container >
    )
}


