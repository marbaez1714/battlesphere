import React from 'react';
import { Container, Col, Input, Form, InputGroup, InputGroupAddon, Button, Row, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import '../App.css';

function SearchBox(props) {
    return (
        <Row className="searchBox">
            <Col xs="12" className="scale-in-center">
                <Form className="inputBox" onChange={props.handleSearchInputChange} onSubmit={props.handleSearch}>
                    <InputGroup  >
                        <Input style={{ borderRadius: "0" }} />
                        <InputGroupAddon addonType="append"><Button color="secondary" style={{ borderRadius: "0" }}>Search</Button></InputGroupAddon>
                    </InputGroup>
                </Form>
            </Col>
        </Row>
    )
}

function LegalBox(props) {
    if (props.legal === "legal") {
        return (
            <Col xs="6">
                <Button color="success" className="legalButton">{props.game}</Button>
            </Col>
        )
    } else {
        return (
            <Col xs="6">
                <Button color="secondary" className="legalButton">{props.game}</Button>
            </Col>
        )
    }
}

function CardDataModal(props) {
    let cardData = props.cardSearchState.selectedCard;
    let cardLegal = props.cardSearchState.selectedCard.legalities;
    return (
        <Modal isOpen={props.cardSearchState.modalState} toggle={event => props.removeModal()} >
            <ModalHeader toggle={event => props.removeModal()}>
                <p>{cardData.name}</p>
                <p>{cardData.type_line}</p>
                {props.cardSearchState.selectedMana}
            </ModalHeader>
            <ModalBody>{props.cardSearchState.selectedCard.oracle_text}</ModalBody>
            <ModalFooter>
                <Row>
                    <LegalBox key="1" legal={cardLegal ? cardLegal.standard : ''} game="Standard" />
                    <LegalBox key="2" legal={cardLegal ? cardLegal.future : ''} game="Future" />
                    <LegalBox key="3" legal={cardLegal ? cardLegal.frontier : ''} game="Frontier" />
                    <LegalBox key="4" legal={cardLegal ? cardLegal.modern : ''} game="Modern" />
                    <LegalBox key="5" legal={cardLegal ? cardLegal.legacy : ''} game="Legacy" />
                    <LegalBox key="6" legal={cardLegal ? cardLegal.pauper : ''} game="Pauper" />
                    <LegalBox key="7" legal={cardLegal ? cardLegal.vintage : ''} game="Vintage" />
                    <LegalBox key="8" legal={cardLegal ? cardLegal.penny : ''} game="Penny" />
                    <LegalBox key="9" legal={cardLegal ? cardLegal.commander : ''} game="Commander" />
                    <LegalBox key="10" legal={cardLegal ? cardLegal["1v1"] : ''} game="1v1" />
                    <LegalBox key="11" legal={cardLegal ? cardLegal.duel : ''} game="Duel" />
                    <LegalBox key="12" legal={cardLegal ? cardLegal.brawl : ''} game="Brawl" />

                </Row>

            </ModalFooter>


        </Modal >
    )
}

function Card(props) {
    return (
        <Col xs="6" md="3" className="searchResultsCard ">
            <Button className="scale-in-center-2sDelay" onClick={event => props.toggleSearchModal(props.card)}>
                <img src={props.card.image_uris.border_crop} style={{ width: "100%" }} alt="" />
            </Button>
        </Col>
    )
}

export default function CardSearch(props) {
    return (
        <Container className="CardSearchWrapper">
            <SearchBox handleSearchInputChange={props.handleSearchInputChange} handleSearch={props.handleNewSearch} searchSuccessNotify={props.searchSuccessNotify} />
            <Row style={{ paddingLeft: "1vh", paddingRight: "1vh" }}>
                {props.cardSearchState.cardList.map((card, idx) => <Card key={idx} card={card} toggleSearchModal={props.toggleSearchModal} />)}
            </Row>
            <CardDataModal cardSearchState={props.cardSearchState} removeModal={props.removeModal} />
        </Container>

    )
}

