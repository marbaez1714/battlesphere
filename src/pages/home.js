import React from 'react';
import { Container, Card, CardBody, CardTitle, CardSubtitle, CardText, CardHeader, Col, Input, Form, InputGroup, InputGroupAddon, Button, Row, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

function HomeCard(props) {
    return (
        <Col xs="6" md="4" className="homeCardWrapper" style={{ paddingLeft: "0.5vh", paddingRight: "0.5vh", marginTop: "1vh", marginBottom: "1vh" }}>
            <Button className="homeCard"> <img className="homeImage" src={props.image} onClick={event => props.changePage(props.idx)} />
                <p className="homeText">{props.name}</p>
            </Button>
        </Col>
    )
}

export default function Home(props) {
    let imageDeckBuilder = "https://img.scryfall.com/cards/art_crop/en/soi/231.jpg?1517813031",
        imageAbout = "https://img.scryfall.com/cards/art_crop/en/c18/212.jpg?1535504874",
        imageCardSearch = "https://img.scryfall.com/cards/art_crop/en/vma/70.jpg?1517813031",
        imageSetLists = "https://img.scryfall.com/cards/art_crop/en/hou/166.jpg?1517813031",
        imagePlanechase = "https://img.scryfall.com/cards/art_crop/en/c16/143.jpg?1517813031",
        imageBattleCounter = "https://img.scryfall.com/cards/art_crop/en/ust/127.jpg?1522207829"
    return (
        <Container className="homeWrapper">
            <Row>
                <HomeCard image={imageCardSearch} name="Card Search" idx={2} changePage={props.changePage} />
                <HomeCard image={imagePlanechase} name="Planechase" idx={3} changePage={props.changePage} />
                <HomeCard image={imageBattleCounter} name="Battlecounter" idx={4} changePage={props.changePage} />
                <HomeCard image={imageSetLists} name="Set Search" idx={5} changePage={props.changePage} />

            </Row>
        </Container>

    )
}