import NavbarTab from '../../components/Navbar';
import { Form, Button, FloatingLabel  } from 'react-bootstrap';
import Item from '../../assets/item_1.png'

import React  from 'react'


    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        products: [],
    //        id: "",
    //        name: "",
    //        stock: "",
    //        price: "",
    //        desc: "",
    //        image: "",

    //     }
    //   }

    //   handleChange = (e) => {
    //     this.setState({
    //         [e.target.name] : e.target.value
    //     })
    //   }

    //   handleSubmit = (e) => {
    //     e.preventDefault();
    //   }

    export const AddProduct = ({name, desc, price, stock, image, handleChange, handleSubmit}) => {
    return (
        <>
        <NavbarTab />

    <div style={styles.mainContainer}>

            <div style={styles.formContainer}>

                <h1 style={{fontSize: '20px', color: 'rgba(97, 61, 43, 1)', marginBottom: '31px'}}>Add Product</h1>

                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Name" style={{backgroundColor: 'rgba(97, 61, 43, 0.25)', border: '1px solid rgba(151, 74, 74, 1)', }} 
                    value={name} onChange={(e) => handleChange(e)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Stock" style={{backgroundColor: 'rgba(97, 61, 43, 0.25)', border: '1px solid rgba(151, 74, 74, 1)'}} 
                    value={stock} onChange={(e) => handleChange(e)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Price" style={{backgroundColor: 'rgba(97, 61, 43, 0.25)', border: '1px solid rgba(151, 74, 74, 1)'}} 
                    value={price} onChange={(e) => handleChange(e)}/>
                </Form.Group>

                <FloatingLabel label="Description Product">
                    <Form.Control
                    as="textarea"
                    placeholder="Description Product here"
                    style={{ height: '100px', 
                    backgroundColor: 'rgba(97, 61, 43, 0.25)',
                    border: '1px solid rgba(151, 74, 74, 1)',
                    marginBottom: '20px',
                }} value={desc} onChange={(e) => handleChange(e)}/>
                </FloatingLabel>

                <Form.Group className="mb-3">
                <Form.Control type="file" style={{ width: '60%',
                                                backgroundColor: 'rgba(97, 61, 43, 0.25)', 
                                                border: '1px solid rgba(151, 74, 74, 1)',
                                                marginBottom: '54px',
                                                }} value={image}
                                                onChange={(e) => handleChange(e)}/>
                </Form.Group>

                <Button type="submit" style={{backgroundColor: 'rgba(97, 61, 43, 1)', color: 'white', width: '260px', height: '40px', border: 'none', marginLeft: '90px'}}>
                    Add Product
                </Button>
                </Form>
            </div>

            <div style={styles.imgContainer}>
                <img src={Item} alt= '' style={{width: '326px', height: '380px', }}/>    
            </div> 

    </div>
    </>
    )
  }



const styles = {
    mainContainer: {
        width: '80%',
        margin: 'auto',
        marginTop: '60px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    formContainer: {
        width: '50%',
        marginRight: '92px',
        
    },

    imgContainer: {
        width: '50%',

    }

}

