import React from 'react';
import { Button, Container, Col, Row, CardImg } from 'reactstrap'
import './style.css'

function MenuButton(props) {
    return (
        <Col md="4" className="cards">
            <Button id="menuCard" onClick={props.renderButton}>
                <CardImg top width="100%" src={props.image} />
                <p className="cardTitle"> {props.title}</p>
            </Button>
        </Col>
    )
}



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

                <MenuButton renderButton={props.renderAbout} image={imageAbout} title="About Battlesphere - WIP" id="AboutPage" />
                <MenuButton renderButton="" image={imageDeckBuilder} title="Deck Builder - WIP" id="DeckBuilder" />
                <MenuButton renderButton={props.renderCardSearch} image={imageCardSearch} title="Card Search" id="CardSearch" />
                <MenuButton renderButton="" image={imageSetLists} title="Set Lists - WIP" id="SetLists" />
                <MenuButton renderButton={props.renderPlanechase} image={imagePlanechase} title="Planechase" id="Planechase" />
                <MenuButton renderButton={props.renderBattleCounter} image={imageBattleCounter} title="Battle Counter - WIP" id="BattleCounter" />
            </Row>
        </Container >
    )
}


