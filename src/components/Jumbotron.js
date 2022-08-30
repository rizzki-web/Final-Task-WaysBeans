import React from 'react';
import Banner from '../assets/Jumbotron.png';


export default function Jumbotron() {
  return (
    <div>
        <div style={styles.parentbanner}>
            <img src={Banner} style={styles.banner} alt=''/>
        </div>
    </div>
  );
}

const styles = {
    parentbanner: {
        marginTop: '40px',
        display: 'flex',
       justifyContent: 'center',
    },


    banner: {
        width: '1048px',
        height: '402px',
        top: '120px',
    },
}

