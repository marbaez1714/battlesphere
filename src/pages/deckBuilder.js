import React from 'react';
import { Button, Col, Container, Table, Row } from 'reactstrap';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import converText from '../utilities/symbolSwitch';
import '../App.css';

// let genericColor = '#bab1ab',
//     whiteColor = "#dfdec3",
//     blueColor = "#c1d7e9",
//     blackColor = "#0d0f0f",
//     redColor = "#e49977",
//     greenColor = "#a3c095",
//     colorlessColor = "silver",
//     whiteOrBlueColor = "#d0dad6",
//     whiteOrBlackColor = "#767669",
//     blackOrRedColor = "#785443",
//     blackOrGreenColor = "#6e827a",
//     blueOrBlackColor = "#67737c",
//     blueOrRedColor = "#cdc1c1",
//     redOrGreenColor = "#c4ac86",
//     redOrWhiteColor = "#dac0c0",
//     greenOrWhiteColor = "#c4d0ae",
//     greenOrBlueColor = "#b2ccbf",
//     twoGenericOrWhite = "#d0ccb9",
//     twoGenericOrBlue = "#bcbec1",
//     twoGenericOrRed = "#c7aa9b",
//     twoGenericOrGreen = "#b3b6a4",
//     twoGenericOrBlack = "#6c6865";


function LegalBox(legal) {
    if (legal === "legal") {
        return <th className="cardLegal"><i className="fas fa-check"></i></th>
    } else {
        return <th className="cardNotLegal"><i className="fas fa-times"></i></th>
    }


}

function LegalTable(props) {
    return (
        <Table className="legalTable" bordered responsive>
            <tbody>
                <tr>
                    <th className={props.deckBuilderState.deckLegal.standard === "legal" ? "deckLegal" : "deckNotLegal"}>Standard</th>
                    <th className={props.deckBuilderState.deckLegal.future === "legal" ? "deckLegal" : "deckNotLegal"}>Future</th>
                    <th className={props.deckBuilderState.deckLegal.frontier === "legal" ? "deckLegal" : "deckNotLegal"}>Frontier</th>
                    <th className={props.deckBuilderState.deckLegal.modern === "legal" ? "deckLegal" : "deckNotLegal"}>Modern</th>
                </tr>
                <tr>
                    <th className={props.deckBuilderState.deckLegal.legacy === "legal" ? "deckLegal" : "deckNotLegal"}>Legacy</th>
                    <th className={props.deckBuilderState.deckLegal.pauper === "legal" ? "deckLegal" : "deckNotLegal"}>Pauper</th>
                    <th className={props.deckBuilderState.deckLegal.vintage === "legal" ? "deckLegal" : "deckNotLegal"}>Vintage</th>
                    <th className={props.deckBuilderState.deckLegal.penny === "legal" ? "deckLegal" : "deckNotLegal"}>Penny</th>
                </tr>
                <tr>
                    <th className={props.deckBuilderState.deckLegal.commander === "legal" ? "deckLegal" : "deckNotLegal"}>Commander</th>
                    <th className={props.deckBuilderState.deckLegal.oneVOne === "legal" ? "deckLegal" : "deckNotLegal"}>1v1</th>
                    <th className={props.deckBuilderState.deckLegal.duel === "legal" ? "deckLegal" : "deckNotLegal"}>Duel</th>
                    <th className={props.deckBuilderState.deckLegal.brawl === "legal" ? "deckLegal" : "deckNotLegal"}>Brawl</th>
                </tr>
            </tbody>
        </Table>
    )
}

function DeckTable(props) {
    return (
        <Table className="deckTable" responsive bordered>
            <thead>
                <tr>
                    <th></th>
                    <th>Color</th>
                    <th>Card Name</th>
                    <th>Mana Cost</th>
                    <th className="deckText">Text</th>
                </tr>
            </thead>
            <tbody>
                {props.deckBuilderState.deck.map((card, idx) =>
                    <tr className="deckInfo" key={idx}>
                        <th className="deckRemoveCard"><Button className="removeFromDeckButton" onClick={event => props.removeFromDeck(idx)}><i className="fas fa-times" /></Button></th>
                        <td className="deckCardColor">{card.color_identity}</td>
                        <td className="deckCardName">{card.name}</td>
                        <td className="deckCardMana">{converText(card.mana_cost)}</td>
                        <td className="deckText">{card.oracle_text}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

export default function DeckBuilder(props) {
    const data = [
        {
            name: 'Deck Colors', white: props.deckBuilderState.deckColors.white,
            blue: props.deckBuilderState.deckColors.blue,
            black: props.deckBuilderState.deckColors.black,
            red: props.deckBuilderState.deckColors.red,
            green: props.deckBuilderState.deckColors.green,
            colorless: props.deckBuilderState.deckColors.colorless
        },

    ];
    return (
        <Container className="DeckBuilder">
            <Row>
                <Col xs="12" md={{ size: "6" }}>
                    <LegalTable deckBuilderState={props.deckBuilderState} />
                </Col>
                <Col xs="6">
                    <ResponsiveContainer width="100%"  >
                        <BarChart data={data}
                            margin={{ top: 10, left: 0 }}>
                            <XAxis dataKey="name" />
                            <Tooltip cursor={false} />
                            <Bar dataKey="white" fill="#f8f6d8" />
                            <Bar dataKey="blue" fill="#c1d7e9" />
                            <Bar dataKey="black" fill="#0d0f0f" />
                            <Bar dataKey="red" fill="#e49977" />
                            <Bar dataKey="green" fill="#a3c095" />
                            <Bar dataKey="colorless" fill="silver" />
                        </BarChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
            <Col lg="12" xs="12">
                <Row>
                    {props.deckBuilderState.deck.length > 0 ? <DeckTable deckBuilderState={props.deckBuilderState} removeFromDeck={props.removeFromDeck} /> : ""}
                </Row>
            </Col>
        </Container >
    )
}



