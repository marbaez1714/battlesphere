import React from 'react';
import { Col, Container, Table } from 'reactstrap';
import PieChart from 'react-minimal-pie-chart';
import converText from '../utilities/symbolSwitch';
import '../App.css';

function LegalBox(legal) {
    if (legal === "legal") {
        return <th className="cardLegal"><i className="fas fa-check"></i></th>
    } else {
        return <th className="cardNotLegal"><i className="fas fa-times"></i></th>
    }


}

function DeckTable(props) {
    return (
        <Table className="deckTable">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Color</th>
                    <th>Card Name</th>
                    <th>Mana Cost</th>
                    <th>S.</th>
                    <th>F.</th>
                    <th>F.</th>
                    <th>M.</th>
                    <th>L.</th>
                    <th>P.</th>
                    <th>V.</th>
                    <th>P.</th>
                    <th>C.</th>
                    <th>1.</th>
                    <th>D.</th>
                    <th>B.</th>
                </tr>
            </thead>
            <tbody>
                {props.deckBuilderState.deck.map((card, idx) =>
                    <tr className="deckInfo" key={idx}>
                        <th className="deckCardNumber">{idx + 1}</th>
                        <td className="deckCardColor">{card.color_identity}</td>
                        <td className="deckCardName">{card.name}</td>
                        <td className="deckCardMana">{converText(card.mana_cost)}</td>
                        {LegalBox(card.legalities.standard)}
                        {LegalBox(card.legalities.future)}
                        {LegalBox(card.legalities.frontier)}
                        {LegalBox(card.legalities.modern)}
                        {LegalBox(card.legalities.legacy)}
                        {LegalBox(card.legalities.pauper)}
                        {LegalBox(card.legalities.vintage)}
                        {LegalBox(card.legalities.penny)}
                        {LegalBox(card.legalities.commander)}
                        {LegalBox(card.legalities["1v1"])}
                        {LegalBox(card.legalities.duel)}
                        {LegalBox(card.legalities.brawl)}
                    </tr>
                )}

            </tbody>
        </Table>
    )
}



export default function DeckBuilder(props) {
    return (
        <Container>
            <Col xs="3">

                <PieChart lineWidth="30"
                    data={[
                        { title: 'X Mana', value: props.deckBuilderState.manaTotals.xMana, color: '#b0a4a6' },
                        { title: 'Y Mana', value: props.deckBuilderState.manaTotals.yMana, color: '#b0a4a6' },
                        { title: 'Z Mana', value: props.deckBuilderState.manaTotals.zMana, color: '#b0a4a6' },
                        { title: 'whiteOrBlueMana', value: props.deckBuilderState.manaTotals.whiteOrBlueMana, color: "#dfdec3" },
                        { title: 'whiteOrBlackMana', value: props.deckBuilderState.manaTotals.whiteOrBlackMana, color: "#dfdec3" },
                        { title: 'blackOrRedMana', value: props.deckBuilderState.manaTotals.blackOrRedMana, color: "black" },
                        { title: 'blackOrGreenMana', value: props.deckBuilderState.manaTotals.blackOrGreenMana, color: "black" },
                        { title: 'blueOrBlackMana', value: props.deckBuilderState.manaTotals.blueOrBlackMana, color: "blue" },
                        { title: 'blueOrRedMana', value: props.deckBuilderState.manaTotals.blueOrRedMana, color: "blue" },
                        { title: 'redOrGreenMana', value: props.deckBuilderState.manaTotals.redOrGreenMana, color: "red" },
                        { title: 'redOrWhiteMana', value: props.deckBuilderState.manaTotals.redOrWhiteMana, color: "red" },
                        { title: 'greenOrWhiteMana', value: props.deckBuilderState.manaTotals.greenOrWhiteMana, color: "green" },
                        { title: 'greenOrBlueMana', value: props.deckBuilderState.manaTotals.greenOrBlueMana, color: "green" },
                        { title: 'genericMana', value: props.deckBuilderState.manaTotals.genericMana, color: '#b0a4a6' },
                        { title: 'whiteMana', value: props.deckBuilderState.manaTotals.whiteMana, color: "#dfdec3" },
                        { title: 'blueMana', value: props.deckBuilderState.manaTotals.blueMana, color: "blue" },
                        { title: 'blackMana', value: props.deckBuilderState.manaTotals.blackMana, color: "black" },
                        { title: 'redMana', value: props.deckBuilderState.manaTotals.redMana, color: "red" },
                        { title: 'greenMana', value: props.deckBuilderState.manaTotals.greenMana, color: "green" },
                        { title: 'coloredOrLife', value: props.deckBuilderState.manaTotals.coloredOrLife, color: "#b0a4a6" },
                        { title: 'whiteOrLife', value: props.deckBuilderState.manaTotals.whiteOrLife, color: "#dfdec3" },
                        { title: 'blueOrLife', value: props.deckBuilderState.manaTotals.blueOrLife, color: "blue" },
                        { title: 'blackOrLife', value: props.deckBuilderState.manaTotals.blackOrLife, color: "black" },
                        { title: 'redOrLife', value: props.deckBuilderState.manaTotals.redOrLife, color: "red" },
                        { title: 'greenOrLife', value: props.deckBuilderState.manaTotals.greenOrLife, color: "green" },
                        { title: 'colorlessMana', value: props.deckBuilderState.manaTotals.colorlessMana, color: '#b0a4a6' },
                        { title: 'snowMana', value: props.deckBuilderState.manaTotals.snowMana, color: "white" },

                    ]}
                />
            </Col>
            <Col xs="12">
                {props.deckBuilderState.deck.length > 0 ? <DeckTable deckBuilderState={props.deckBuilderState} /> : ""}
            </Col>
        </Container >
    )
}


