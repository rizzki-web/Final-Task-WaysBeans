import React from 'react';
import NavbarTab from '../../components/Navbar';
import { Table } from 'react-bootstrap';

export default function AdminDashboard() {
  return (
    <>
    <NavbarTab />

    <div style={{width: '80%', margin: 'auto', marginTop: '110px'}}>

        <h1 style={{marginBottom: '60px', color: 'rgba(97, 61, 43, 1)'}}>Admin Dashboard</h1>

        <div style={{width: '80%', margin: 'auto',}}>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Post Code</th>
                    <th>Products Order</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Jakarta</td>
                    <td>15500</td>
                    <td>GUATEMALA BEANS</td>
                    <td>Success</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Mark</td>
                    <td>Jakarta</td>
                    <td>15500</td>
                    <td>GUATEMALA BEANS</td>
                    <td>Success</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Mark</td>
                    <td>Jakarta</td>
                    <td>15500</td>
                    <td>GUATEMALA BEANS</td>
                    <td>Success</td>
                    </tr>
                </tbody>
                </Table>

        </div>
    </div>

    </>
  )
}

 