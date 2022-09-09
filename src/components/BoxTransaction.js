import React from 'react';
import Qr from '../assets/qr.png';
import Item1 from '../assets/item_1.png';
import Logo from '../assets/icon.png';
import { Button } from 'react-bootstrap';


export default function BoxTransaction() {
  return (
    <div>
        <div style={styles.container}>
            <div style={{display: 'flex', flexDirection: 'row', color: 'rgba(97, 61, 43, 1)'}}>
                <img src={Item1} alt='' style={{width: '80px', height: '120px', marginRight: '13px'}}/>

                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h1 style={{fontSize: '14px', fontWeight: 'bold', color: 'rgba(97, 61, 43, 1)', marginBottom: '3px'}}>GUATEMALA Beans</h1>
                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
                        <p style={{fontSize: '14px', fontWeight: 'bold', color: 'rgba(97, 61, 43, 1)' }}>Saturday, </p>
                        <p style={{fontSize: '12px', color: 'rgba(97, 61, 43, 1)'}}>2 September 2022</p>
                    </div>

                    <p style={{fontSize: '10px', marginBottom: '4px'}}>Price : Rp.300.900</p>
                    <p style={{fontSize: '10px', marginBottom: '4px'}}>Qty : 2</p>
                    <p style={{fontSize: '10px', fontWeight: 'bold', marginBottom: '4px'}}>Sub Total : Rp.601.800</p>

                </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column'}}>

                <img src={Logo} alt='' style={{width: '73px', height: '22px', margin: 'auto' }}/>

                <img src={Qr} alt='' style={{width: '50px', height: '50px', margin: 'auto'}}/>

                <Button style={{fontSize: '10px', backgroundColor: 'rgba(97, 61, 43, 1)', border: 'none', color: 'white', width: '112px', height: '22px'}}>Complete</Button>
            </div>
        </div>
    </div>
  )
}

const styles ={
    container: {
        borderRadius: '8px',
        backgroundColor: 'rgba(246, 230, 218, 1)',
        width: '524px',
        height: '145px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 15px',
    },
}

