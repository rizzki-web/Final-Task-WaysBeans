import NavbarTab from '../../components/Navbar';

import React, { Component } from 'react'

export default class AddProduct extends Component {

    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        products: [],
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

    //     this.setState ({
    //         products: [
    //             ...this.state.products,
    //             {
    //                 id: this.state.products.length+1,
    //                 name: this.state.name,
    //                 stock: this.state.stock,
    //                 price: this.state.price,
    //                 desc: this.state.desc,
    //                 image: this.state.image
    //             }
    //         ]
    //     })
    //   }

  render(id) {
    return (
        <>
        <NavbarTab />
        <AddProduct key={id}/>
        {/* {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} */}
    </>
    )
  }
}

