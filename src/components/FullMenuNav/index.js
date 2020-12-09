import React from "react";
import { Navbar, Nav} from "react-bootstrap";
// import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <React.Fragment scroll="no">
       
            <input type="checkbox" id="circleMenu"/>
            <label for="circleMenu">
                
                <i className="fas fa-bars"></i>
                
                </label>

            <div className="containerr">
                <div className="menu">
                    <a to="/" href="/"> Home</a>
                    <a href="about"> About</a>
                    <a href="contact"> Contact Us</a>
                    <a to="/"> Event</a>

                </div>

                
            </div>
           
      
      </React.Fragment>
    );
  }
}

export default Navigation;
