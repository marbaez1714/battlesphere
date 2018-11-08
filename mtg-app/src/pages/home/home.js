import React from 'react';
import { Button, Container, Col, Row, CardImg } from 'reactstrap'
import './style.css'

export default function HomePage(props) {

    let imageDeckBuilder = "https://img.scryfall.com/cards/art_crop/en/soi/231.jpg?1517813031",
        imageAbout = "https://img.scryfall.com/cards/art_crop/en/c18/212.jpg?1535504874",
        imageCardSearch = "https://img.scryfall.com/cards/art_crop/en/vma/70.jpg?1517813031",
        imageSetLists = "https://img.scryfall.com/cards/art_crop/en/hou/166.jpg?1517813031",
        imagePlanechase = "https://img.scryfall.com/cards/art_crop/en/c16/143.jpg?1517813031",
        imageBattleCounter = "https://img.scryfall.com/cards/art_crop/en/ust/127.jpg?1522207829"
    return (
        <Container>
            <Row>
                <Col md="4" className="cards">
                    <Button id="menuCard">
                        <CardImg top width="100%" src={imageAbout} />
                        <p className="cardTitle"> About Battlesphere </p>
                    </Button>
                </Col>
                <Col md="4" className="cards">
                    <Button id="menuCard">
                        <CardImg top width="100%" src={imageDeckBuilder} />
                        <p className="cardTitle"> Deck Builder </p>
                    </Button>
                </Col>
                <Col md="4" className="cards">
                    <Button id="menuCard" onClick={props.renderCardSearch}>
                        <CardImg top width="100%" src={imageCardSearch} />
                        <p className="cardTitle"> Card Search </p>
                    </Button>
                </Col>
                <Col md="4" className="cards">
                    <Button id="menuCard">
                        <CardImg top width="100%" src={imageSetLists} />
                        <p className="cardTitle"> Set Lists </p>
                    </Button>
                </Col>
                <Col md="4" className="cards">
                    <Button id="menuCard" onClick={props.renderPlanechase}>
                        <CardImg top width="100%" src={imagePlanechase} />
                        <p className="cardTitle"> Planechase </p>
                    </Button>
                </Col>
                <Col md="4" className="cards">
                    <Button id="menuCard">
                        <CardImg top width="100%" src={imageBattleCounter} />
                        <p className="cardTitle"> Battle Counter </p>
                    </Button>
                </Col>
            </Row>
        </Container >
    )
}


