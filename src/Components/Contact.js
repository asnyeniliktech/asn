
import  web from '../img/dev1.jpg'
import React, { useState } from "react";


const Contact =()=> {

  const [data,setData]=useState({
  
    fullname:"",
    mobile:"",
    email:"",
    message:"",
  
  });


 const InputEvent =(event)=>{


const {name,value}=event.target;

   setData((preVal) =>{

       return {
         ...preVal,
         [name]:value
       }
   })
 };
  const formSubmit = (e) =>{
     e.preventDefault();
      // alert(`${data.fullname}`);
      <div className="alert alert-success" role="alert">
      <h4 className="alert-heading">Well done!</h4>
      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
      
      <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>


  };
  

    return (
      <div  style={{marginTop:"60px"}}>
      <section id="header" className="d-flex align-items-center">
    
          <div className="container-fluid mb-8">
      
              <div className="row">
      
                  <div className="col-10 max-auto">
      
      <div className="row">
      
      
                      <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            
                            
<form onSubmit={formSubmit}>

<div className="mb-3">
<label  className="form-label">Full Name</label>
<input 
type="text" 
className="form-control" 
id="fullname" 
name="fullname"
value={data.fullname}
onChange={InputEvent}
placeholder="Enter your Full name here."/>
</div>




<div className="mb-3">
<label   className="form-label">Mobile No</label>
<input 
type="number" 
className="form-control" 
id="mobile" 
name="mobile"
value={data.mobile}
onChange={InputEvent}
placeholder="Enter your mobile number"/>
</div>


<div className="mb-3">
<label  className="form-label">Email address</label>
<input 
type="email" 
className="form-control" 
id="email"
name="email"
value={data.email}
onChange={InputEvent} 
placeholder="name@example.com"/>
</div>

<div className="mb-3">
<label   className="form-label">Message</label>
<textarea 
className="form-control" 
id="message"

name="message"
value={data.message}
onChange={InputEvent}
rows="4"></textarea>
</div>


<div className="col-auto">
<button type="submit" className="btn btn-outline-primary mb-3">Send</button>
</div>

</form>
                      </div>
      
      
      
      <div className="col-lg-6 order-1 order-lg-2 header-img">
      
      
      <img src={web}  className="img-fluid animated"    alt="home img"/>

<div  className="btn " style={{marginTop:"80px", fontSize:"25px" }}>
Call Us <p className="btn-outline-success ">+923404435784</p>
</div>
      
      </div>

       
      </div>
                  </div>
      
              </div>
          </div>
      
      </section>
      </div>
    );
}

export default Contact;






 








