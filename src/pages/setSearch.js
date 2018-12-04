import React from 'react';
import { Container, Col, Row, Table } from 'reactstrap'


function SetRow(props) {
    return (
        <tr key={props.idx}>
            <td style={{ paddingLeft: (props.set.set_type === "token" ? "2rem" : "") }}><img className="setIcon" src={props.set.icon_svg_uri} alt="" /></td>
            <td style={{ paddingLeft: (props.set.set_type === "token" ? "2rem" : "") }}>{props.set.name}</td>
            <td>{props.set.card_count}</td>
            <td>{props.set.released_at ? props.set.released_at : "-"}</td>
            <td>{props.set.set_type}</td>
        </tr>
    )
}



export default function SetSearch(props) {
    return (
        <Container>
            <Row>
                <Col xs={{ size: "10", offset: "1" }}>
                    <Table hover size="sm" className="setsTable" responsive>
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
                            {props.setSearchState.allSets.map((set, idx) => <SetRow set={set} idx={idx} key={idx} />)}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}