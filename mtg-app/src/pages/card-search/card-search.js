import React from 'react';
import { InputGroup, Container, Input, Row, InputGroupAddon, Button, Form, Col, Card, CardHeader, CardBody, CardSubtitle, Table } from 'reactstrap'
import './style.css'

function SearchBox(props) {
    return (
        <Row>
            <Form className="inputBox" onSubmit={props.handleFuzzySearch} onChange={props.handleSearchChange}>
                <InputGroup  >
                    <Input />
                    <InputGroupAddon addonType="append"><Button color="secondary">Search</Button></InputGroupAddon>
                </InputGroup>
            </Form>
        </Row>
    )
}
function CardLegal(props) {
    let cardLegal = props.cardLegal;
    function legal(text, lable) {
        if (text === 'legal') {
            return <Button style={{ width: '100%' }} color="success">{lable}</Button>
        } else {
            return <Button style={{ width: '100%' }} color="secondary">{lable}</Button>
        }
    }
    return (
        <div>
            <CardBody>
                <CardSubtitle>Card Legalities:</CardSubtitle>

            </CardBody >
            <Table style={{ margin: "0" }}>
                <tbody style={{ fontSize: '1rem' }}>
                    <tr>
                        <td style={{ width: "50%" }}>{legal(cardLegal.standard, "Standard")}</td>
                        <td>{legal(cardLegal.frontier, "Frontier")}</td>
                    </tr>
                    <tr>
                        <td>{legal(cardLegal.modern, "Modern")}</td>
                        <td>{legal(cardLegal.pauper, "Pauper")}</td>
                    </tr>
                    <tr>
                        <td>{legal(cardLegal.legacy, "Legacy")}</td>
                        <td>{legal(cardLegal.penny, "Penny")}</td>
                    </tr>
                    <tr>
                        <td>{legal(cardLegal.vintage, "Vintage")}</td>
                        <td>{legal(cardLegal.oneVone, "1v1 Cmdr")}</td>
                    </tr>
                    <tr>
                        <td>{legal(cardLegal.commander, "Commander")}</td>
                        <td>{legal(cardLegal.brawl, "Brawl")}</td>
                    </tr>
                </tbody>
            </Table>
        </div>


    )
}
function CardData(props) {
    let cardData = props.cardSearchState;

    return (
        <Row>
            <Col md={{ size: 5, offset: 1 }} className="cardInformation" >
                <img className="cardImage" src={cardData.cardUri} alt="CardImage" />
            </Col>
            <Col md="5" className="cardInformation" >
                <Card className="cardData">
                    <CardHeader>{cardData.cardName}</CardHeader>
                    <CardBody>
                        <CardSubtitle>Average Price: {cardData.cardPrice}</CardSubtitle>
                    </CardBody>
                    <CardBody>
                        <CardSubtitle>Card Type: {cardData.cardType}</CardSubtitle>
                    </CardBody>

                    <CardLegal cardLegal={cardData.legalities} />

                </Card>
            </Col>
        </Row>
    )
}



export default function CardSearch(props) {
    return (
        <Container>
            <SearchBox handleFuzzySearch={props.handleFuzzySearch} handleSearchChange={props.handleSearchChange} />
            <CardData cardSearchState={props.cardSearchState} />
        </Container>
    )
}
