import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import Logo from '../assets/icon.png'


export default function NavbarTab() {
  return (
    <Navbar bg="light" expand="lg" style={styles.navbar}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={Logo} alt=''/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <div>
            <Button style={styles.btn1}>Login</Button>
            <Button style={styles.btn2}>Register</Button>
        </div>
        
      </Container>
    </Navbar>
  );
}

const styles = {
    navbar: {
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.25)'

    },

    btn1: {
        color: 'rgba(97, 61, 43, 1)',
        backgroundColor: 'white',
        border: 'solid 1px rgba(97, 61, 43, 1)',
        padding: '5px 25px',
    },

    btn2: {
        backgroundColor: 'rgba(97, 61, 43, 1)',
        color: 'white',
        border: 'solid 1px rgba(97, 61, 43, 1)',
        marginLeft: '15px',
        padding: '5px 25px',
    },

    divbtn: {
        display: 'flex',        
    }
}
