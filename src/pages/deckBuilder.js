import React from 'react';
import { Container, Table } from 'reactstrap';
import '../App.css';


function DeckTable(props) {
    return (
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Color</th>
                        <th>Card Name</th>
                        <th>Mana Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}



export default function DeckBuilder(props) {
    return (
        <DeckTable />
    )
}