import React from 'react';
import { Table, Button } from 'react-bootstrap';
import NavbarTab from '../../components/Navbar';

function ListProduct() {
  return (
    <>
    <NavbarTab />

        <div style={{width: '80%', margin: 'auto', marginTop: '110px'}}>

            <h1 style={{marginBottom: '60px', color: 'rgba(97, 61, 43, 1)'}}>List Products</h1>

            <div style={{width: '80%', margin: 'auto',}}>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>No</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td></td>
                        <td>GUETEMALA BEANS</td>
                        <td>15</td>
                        <td>115000</td>
                        <td></td>
                        <td>

                        <Button variant="danger" style={{marginRight: '10px'}}>Danger</Button>

                        <Button variant="success">Success</Button>

                        </td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td></td>
                        <td>GUETEMALA BEANS</td>
                        <td>15</td>
                        <td>115000</td>
                        <td></td>
                        <td>

                        <Button variant="danger" style={{marginRight: '10px'}}>Danger</Button>

                        <Button variant="success">Success</Button>

                        </td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td></td>
                        <td>GUETEMALA BEANS</td>
                        <td>15</td>
                        <td>115000</td>
                        <td></td>
                        <td>

                        <Button variant="danger" style={{marginRight: '10px'}}>Danger</Button>

                        <Button variant="success">Success</Button>

                        </td>
                        </tr>
                    </tbody>
                    </Table>

            </div>
        </div>
    
    </>
  )
}

export default ListProduct