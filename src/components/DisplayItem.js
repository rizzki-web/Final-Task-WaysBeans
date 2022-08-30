import React from 'react';
import { Card } from 'react-bootstrap';
import Item1 from '../assets/item 1.png';
import Item2 from '../assets/item 2.png';
import Item3 from '../assets/item 3.png';
import Item4 from '../assets/item 4.png';


export default function Item() {
    return (
        <>
        <div style={styles.cardcontainer}>
        <Card style={{ width: '18rem',  marginRight: '28px' }} >
            <Card.Img variant="top" src={Item1} />
            <Card.Body style={styles.cardBody}>
            <Card.Title style={styles.cardTitle}>Card Title</Card.Title>
            <Card.Text style={styles.cardText}>
                Rp.299.000
            </Card.Text>
            <Card.Text style={styles.cardText}>
                Stock : 200
            </Card.Text>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem',  marginRight: '28px' }} >
            <Card.Img variant="top" src={Item3} />
            <Card.Body style={styles.cardBody}>
            <Card.Title style={styles.cardTitle}>Card Title</Card.Title>
            <Card.Text style={styles.cardText}>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Card.Text style={styles.cardText}>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem',  marginRight: '28px' }} >
            <Card.Img variant="top" src={Item2} />
            <Card.Body style={styles.cardBody}>
            <Card.Title style={styles.cardTitle}>Card Title</Card.Title>
            <Card.Text style={styles.cardText}>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Card.Text style={styles.cardText}>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem',  marginRight: '28px' }} >
            <Card.Img variant="top" src={Item4} />
            <Card.Body style={styles.cardBody}>
            <Card.Title style={styles.cardTitle}>Card Title</Card.Title>
            <Card.Text style={styles.cardText}>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Card.Text style={styles.cardText}>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        
        </div>
        
        </>
    )
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