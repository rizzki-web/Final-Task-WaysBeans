import React from 'react';
import NavbarTab from '../components/Navbar';
import Gw from '../assets/gw.png';
import BoxTransaction from '../components/BoxTransaction';

export default function ProfileUser() {
  return (
    <div style={{height: '100vh'}}>

    <NavbarTab />

    <div style={styles.containerMain}>
        <div style={styles.containerProfile}>
            <div style={{fontSize: '22px', fontWeight: 'bold', color: 'rgba(97, 61, 43, 1)', marginBottom: '26px'}}>MyProfile</div>

            <div style={{display: 'flex', flexDirection: 'row'}}>
                <img src={Gw} alt='' style={{marginRight: '28px'}}/>

                <div>
                    <p style={{fontSize: '18px',fontWeight: 'bold', color: 'rgba(97, 61, 43, 1)', marginBottom: '3px', marginTop: '12px'}}>Full Name</p>
                    <p style={{fontSize: '16px', marginBottom: '37px'}}>Rizzki Gans</p>

                    <p style={{fontSize: '18px',fontWeight: 'bold', color: 'rgba(97, 61, 43, 1)', marginBottom: '3px'}}>Email</p>
                    <p style={{fontSize: '16px', marginBottom: '27px'}}>mu.rizzki2000@gmail.com</p>
                </div>
            </div>
        </div>

        {/* //ini bagian box transaksi */}
        <div style={styles.containerTransaction}>
            <div style={{fontSize: '22px', fontWeight: 'bold', color: 'rgba(97, 61, 43, 1)', marginBottom: '26px'}}>MyTransaction</div>

            <div>
                <BoxTransaction />
            </div>
        </div>
    </div>

    
    </div>
  )
}

const styles = {
    containerMain: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 'auto',
        marginTop: '55px',
    },

    containerProfile: {
        width: '80%',
        height: '200px',
    },

    containerTransaction: {
        width: '80%',
        height: '200px',
    },
}

