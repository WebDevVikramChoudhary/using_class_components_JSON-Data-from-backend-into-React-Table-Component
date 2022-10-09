import React from "react";

import { Link } from "react-router-dom";
import "../App.css";

class About extends React.Component {
  render() {
    return (
      <section>
        <Link className="link" to="/">
          About
        </Link>
        <Link className="link" to="/Products">
          Products
        </Link>

        <h1>About: this application provides information about the Products</h1>
      </section>
    );
  }
}
export default About;
