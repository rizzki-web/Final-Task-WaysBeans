import {Button} from 'react-bootstrap';
import NavbarTab from '../components/Navbar';
// import Item1 from '../assets/item 1.png';
// import dataProduct from '../dataProducts/product';
import React, { Component } from 'react';
import { API_URL } from '../utils/constants';
import Axios from 'axios';

export default class DetailProduk extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           lists: [],
        }
      }

      componentDidMount() {
        Axios
        .get(API_URL + "products/"+1)
        .then(res => {
            console.log("Response :", res);
            const lists = res.data;
            this.setState({ lists });
        })
        .catch(error => {
            console.log(error);
        })
    }


  render(id) {
    const { lists } = this.state
    return (
        <div style={{height: '100vh'}}>
        <NavbarTab />
    
        {lists && lists.map((lists, index) => (
        <div style={styles.detailContainer} key={id}>
        
            <div>
                <img src={"assets/" + lists.image} style={styles.imgDetail} alt=''/>
            </div>
            
    
            <div style={styles.descProduk}>
                
                <h1 style={{fontSize: '48px', color: 'rgba(97, 61, 43, 1)', marginBottom: '3px'}}>{lists.name}</h1>
                <p style={{fontSize: '14px', color: 'rgba(151, 74, 74, 1)', marginBottom: '35px'}}>Stock:{lists.stock}</p>
                <p style={{fontSize: '16px', marginBottom: '51px', textAlign: 'justify'}}>{lists.desc}</p>
    
                <p style={{fontSize: '22px', color: 'rgba(151, 74, 74, 1)', textAlign: 'right', marginBottom: '35px' }}>{lists.price}</p>
    
                    <Button style={styles.btn} href='/myCart'>
                    Add to Cart
                    </Button>
            </div>
             
        </div>
        ))}
            
        </div>
    )
  }
}

const styles = {

    detailContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '90%',
        margin: 'auto',
    },

    imgDetail: {
        marginTop: '52px',
        marginRight: '54px',
        width: "336px",
        height: "455px",
    },

    descProduk: {
        marginTop: '52px',
        width: '544px',
    },

    btn: {
        backgroundColor: 'rgba(97, 61, 43, 1)',
        borderRadius: '5px',
        borderColor: 'rgba(97, 61, 43, 1)',
        width: '100%',
    },
}

