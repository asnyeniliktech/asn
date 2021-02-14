import React from "react";
// import { NavLink } from "react-router-dom";

const Card =(props)=> {
  return (
   
     
<div className="card col-md-4 mb-2"  >
{/* style={{  height:"200px", width:"300px"  }}  */}
<img className="card-img-top "  style={{  height:"220px" , marginTop:"5px" }} src={props.imgscr} alt="Card cap"/>
<div className="card-body">
<h5 className="card-title text-center">{props.title}</h5>
<p className="card-text">{props.description} </p>
{/* <NavLink to="/" className="btn btn-primary">More details</NavLink> */}
</div>
 
</div>
 
  );
}

export default Card;
