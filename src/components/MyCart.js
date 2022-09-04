import Item from '../assets/item 1.png';
import Trash from '../assets/trash.png';
import { Button } from 'react-bootstrap';

import React, { Component } from 'react';
import { API_URL } from '../utils/constants';
import Axios from 'axios';

export default class MyCart extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           carts: [],
           
        }
      }

      componentDidMount() {
        Axios
        .get(API_URL + "products")
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
        <div>

        <div style={styles.cartContainer}>

                <p style={{fontSize: '20px', fontWeight: 'bold', color: 'rgba(97, 61, 43, 1)', marginBottom: '26px'}}>My Cart</p>
                
                <p style={{fontSize: '16px', color: 'rgba(97, 61, 43, 1)', marginBottom: '9px'}}>Review Your Order</p>

            <div style={{display: 'flex', flexDirection: 'row'}}>

                <div style={styles.cartProduct}>

                    <div style={{display: 'flex', flexDirection: 'row', margin: '17px 0'}}>
                        <img src={Item} alt='' style={{width: '80px', height: '80px', marginRight: '13px'}} />

                        <div>
                            <h2 style={{fontSize: '14px', fontWeight: 'bold', color: 'rgba(97, 61, 43, 1)', marginBottom: '14px', marginTop: '13px'}}>GUETEMALA BEANS</h2>

                            <p  style={{fontSize: '16px', fontWeight: 'bold', color: 'rgba(97, 61, 43, 1)'}}>- 2 +</p>
                        </div>
                    </div>

                    <div style={{textAlign: 'right'}}>
                        <p style={{fontSize: '14px', color: 'rgba(97, 61, 43, 1)', marginTop: '30px'}}>Rp. 300.000</p>

                        <img src={Trash} alt='' />
                    </div>

                    
                </div>

        

                <div style={styles.cartPay}>

                    <div style={{fontSize: '14px', 
                                color: 'rgba(97, 61, 43, 1)',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                borderBottom: '1px solid #613D2B',
                                marginBottom: '14px',
                                marginTop: '14px',
                            }}>
                        <div>
                            <p>SubTotal</p>
                            <p>Qty</p>
                        </div>

                        <div>
                            <p>300.900</p>
                            <p>2</p>
                        </div>
                    </div>

                    <div style={{display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                fontSize: '14px',
                                color: 'rgba(97, 61, 43, 1)',
                            }}>
                        <div>
                            <p>Total</p>
                        </div>
                    
                        <div>
                            <p>300.900</p>
                        </div>
                    </div>
                </div>

            </div>

            <Button style={{float: 'right', width: '240px', backgroundColor: 'rgba(97, 61, 43, 1)', border: 'none', marginTop: '38px', marginRight: '15px'}}>Primary</Button>

        </div>
        
    
    </ div>
    )
  }
}





const styles = {
    cartContainer: {
        width: '80%',
        margin: 'auto',
        marginTop: '55px',        

    },

    cartProduct: {
        width: '65%',
        marginRight: '34px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTop: '1px solid #613D2B',
        borderBottom: '1px solid #613D2B',

    },

    cartPay: {
        width: '30%',
        borderTop: '1px solid #613D2B',        
    },
}