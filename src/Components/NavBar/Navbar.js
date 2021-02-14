import React from "react";
import {NavLink } from "react-router-dom";
const Navbar =()=> {
  return (
    <div>
        {/* <div className="container-fluid nav_ng">

            <div className="row">

                <div className="col-10 max-auto">

                </div>

            </div>
        </div> */}
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink exact className="navbar-brand" to="/">ASN Yenilik </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink exact activeClassName="menu_active"  className="nav-link" to="/">Home <span className="sr-only">(current)</span> </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link" to="/services">Services </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active"    className="nav-link" to="/about">About </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact Us </NavLink>
      </li>
    
      
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>


      
    </form>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
