// import React, { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

import { Link } from "react-router-dom";
import "../App.css";

class App extends React.Component {
  state = {
    id: [],
    name: [],
    quantity: [],
    price: []
  };
  componentDidMount() {
    axios.get(`http://localhost:8000/products`).then((response) => {
      const products = response.data;
      this.setState({ products });
    });
  }

  render() {
    const DisplayData = this.state.products?.map((products) => {
      return (
        <tr key={products.id}>
          <td>{products.id}</td>
          <td>{products.name}</td>
          <td>{products.quantity}</td>
          <td>{products.price}</td>
        </tr>
      );
    });

    return (
      <>
        <Link className="link" to="/">
          About
        </Link>
        <Link className="link" to="/Products">
          Products
        </Link>

        <div>
          <h1>Product List</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>{DisplayData}</tbody>
          </table>
        </div>
      </>
    );
  }
}

export default App;
