import React from 'react';
import {Button} from 'react-bootstrap';
import NavbarTab from '../components/Navbar';
import Item1 from '../assets/item 1.png';

export default function DetailProduk() {
  return (
    <div style={{height: '100vh'}}>
    <NavbarTab />

    <div style={styles.detailContainer}>
        <div>
            <img src={Item1} style={styles.imgDetail} alt=''/>
        </div>
        

        <div style={styles.descProduk}>
            <h1 style={{fontSize: '48px', color: 'rgba(97, 61, 43, 1)', marginBottom: '3px'}}>GUATEMALA Beans</h1>
            <p style={{fontSize: '14px', color: 'rgba(151, 74, 74, 1)', marginBottom: '35px'}}>Stock: 500</p>
            <p style={{fontSize: '16px', marginBottom: '51px', textAlign: 'justify'}}>Hampir semua referensi sepakat mengatakan bahwa kopi pertama kali ditemukan di Ethiopia, 
                meskipun ada juga beberapa protes yang menyatakan bahwa Coffea arabica sebenarnya muncul 
                pertama kali di bagian selatan Sudan. Karena para gembala Ethiopia adalah manusia pertama 
                yang mengonsumsi kopi—walau saat itu mereka baru mengonsumsi buah/cherry-nya saja, maka 
                gagasan tentang “Ethiopia sebagai tempat asal kopi” pun semakin kuat.</p>

            <p style={{fontSize: '22px', color: 'rgba(151, 74, 74, 1)', textAlign: 'right', marginBottom: '35px' }}>Rp.300.900</p>

                <Button style={styles.btn}>Primary</Button>
        </div>
    </div>
        
    </div>
  )
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

