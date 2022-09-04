import { Card } from 'react-bootstrap';
// import dataProduct from '../dataProducts/product';
// import Item1 from '../assets/item 1.png';
// import Item2 from '../assets/item 2.png';
// import Item3 from '../assets/item 3.png';
// import Item4 from '../assets/item 4.png';

import React, { Component } from 'react';
import { API_URL } from '../utils/constants';
import Axios from 'axios';
import { numberWithCommas } from '../utils/utils';

export default class DisplayItem extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         items: [],
      }
    }

    componentDidMount() {
        Axios
        .get(API_URL + "products")
        .then(res => {
            console.log("Response :", res);
            const items = res.data;
            this.setState({ items });
        })
        .catch(error => {
            console.log(error);
        })
    }

  render() {
    const { items } = this.state
    return (
        <>


        <div style={styles.cardcontainer}>
            {items && items.map((items, index) => (

        <Card style={{ width: '18rem',  marginRight: '28px' }} >
            <Card.Img variant="top" src={"assets/" + items.image} />
            <Card.Body style={styles.cardBody}>
            <Card.Title style={styles.cardTitle}>{items.name}</Card.Title>
            <Card.Text style={styles.cardText}>
                {numberWithCommas (items.price)}
            </Card.Text>
            <Card.Text style={styles.cardText}>
                Stock: {items.stock}
            </Card.Text>
            </Card.Body>
        </Card>

        ))}

        </div>
        
        </>
    )
  }
}

const styles = {

    cardcontainer: {
        marginTop: '42px',
        marginBottom: '51px',
        marginLeft: '150px',
        marginRight: '120px',
        display: 'flex',
        justifyContent: 'center',   
        alignItem: 'flex-start',
    },

    cardBody: {
        backgroundColor: 'rgba(246, 230, 218, 1)',
        color: 'rgba(151, 74, 74, 1)',
    },

    cardTitle: {
        fontSize: '18px',
        color: 'rgba(97, 61, 43, 1)',
        marginBottom: '11px',
    },

    cardText: {
        marginTop: '5px',
    },
    
}