import NavbarTab from '../../components/Navbar';
import { Table } from 'react-bootstrap';
// import dataAdminDashboard from '../../dataAdminDashboard/data';

import React, { Component } from 'react';
import { API_URL } from '../../utils/constants';
import Axios from 'axios';

export default class AdminDashboard extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       lists: [],
    }
  }


  componentDidMount() {
    Axios
    .get(API_URL + "dashboards")
    .then(res => {
        console.log("Response :", res);
        const lists = res.data;
        this.setState({ lists });
    })
    .catch(error => {
        console.log(error);
    })
}

  render() {
    const { lists } = this.state
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
                {lists && lists.map((lists, index) => (
                  <tr>
                  <td>{lists.id}</td>
                  <td>{lists.name}</td>
                  <td>{lists.address}</td>
                  <td>{lists.postcode}</td>
                  <td>{lists.order}</td>
                  <td>{lists.status}</td>
                  
                </tr>
                    ))}
                </tbody>
                </Table>

        </div>
    </div>

    </>
    )
  }
}


 