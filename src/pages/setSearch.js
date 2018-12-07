import React from 'react';
import { Container, Col, Row, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Loading from '../images/loading.svg';

function SetRow(props) {
    return (
        <tr className="setRow" key={props.idx} onClick={event => props.selectSet(props.set)}>
            <td ><img className="setIcon" src={props.set.icon_svg_uri} alt="" /></td>
            <td >{props.set.name}</td>
            <td>{props.set.card_count}</td>
            <td>{props.set.released_at ? props.set.released_at : "-"}</td>
            <td>{props.set.set_type}</td>
        </tr>
    )
}

function SetTable(props) {
    return (
        <Row>
            <Col xs={{ size: "10", offset: "1" }}>
                <Table hover size="sm" className="setsTable" responsive borderless>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Set</th>
                            <th>Card Count</th>
                            <th>Release Date</th>
                            <th>Set Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.setSearchState.allSets.map((set, idx) => <SetRow set={set} idx={idx} key={idx} selectSet={props.selectSet} />)}
                    </tbody>
                </Table>
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
    let cardData = props.setSearchState.selectedCard;
    let cardLegal = props.setSearchState.selectedCard.legalities;
    return (
        <Modal isOpen={props.setSearchState.modalState} toggle={event => props.removeSetModal()} >
            <ModalHeader toggle={event => props.removeSetModal()}>
                <p>{cardData.name}</p>
                <p>{cardData.type_line}</p>
                {props.setSearchState.selectedMana}
            </ModalHeader>
            <ModalBody>{props.setSearchState.selectedCard.oracle_text}</ModalBody>
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
            <Button className="scale-in-center-2sDelay" onClick={event => props.toggleSetSearchModal(props.card)}>
                <img src={props.card.image_uris.border_crop} style={{ width: "100%" }} alt="" />
            </Button>
        </Col>
    )
}

function SetCard(props) {
    if (!props.setSearchState.loading && props.setSearchState.showSet) {
        return (
            <Row>
                <Col xs="12">
                    <Button onClick={event => props.returnToSets()} className="returnButton">Return to Sets </Button>
                </Col>
                {props.setSearchState.setData.map((card, idx) => card.image_uris ? <Card key={idx} card={card} toggleSetSearchModal={props.toggleSetSearchModal} /> : console.log(card.name + " omited from results because of an error"))}
            </Row>
        )
    } else {
        return ""
    }

}



export default function SetSearch(props) {
    return (
        <Container>

            <Row>
                <Col xs={{ size: "4", offset: "4" }}>
                    {props.setSearchState.loading ? <img src={Loading} alt="" className="loadingImage rotate-scale-up" /> : ""}
                </Col>
            </Row>
            {!props.setSearchState.loading && !props.setSearchState.showSet ? <SetTable setSearchState={props.setSearchState} selectSet={props.selectSet} /> : ""}

            <SetCard setSearchState={props.setSearchState} toggleSetSearchModal={props.toggleSetSearchModal} returnToSets={props.returnToSets} />
            <CardDataModal removeSetModal={props.removeSetModal} setSearchState={props.setSearchState} />

        </Container >
    )
}