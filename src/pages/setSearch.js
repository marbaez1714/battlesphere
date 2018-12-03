import React from 'react';
import { Container, Col, Row, Table } from 'reactstrap'

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
                            {props.setSearchState.allSets.map(set =>
                                <tr>
                                    <td><img className="setIcon" src={set.icon_svg_uri} alt="" /></td>
                                    <td>{set.name}</td>
                                    <td>{set.card_count}</td>
                                    <td>{set.released_at ? set.released_at : "-"}</td>
                                    <td>{set.set_type}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}