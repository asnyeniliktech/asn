import React from "react";
import web from "../img/dev1.jpg";
import  HomePage from "../Components/Commen/HomePage"
const Home = () => {
    return (
        <div style={{backgroundImage: `url(${web})`}}>
               <HomePage 
                 name="Grow your business with " 
                 imgscr={null} 
                 visit="/services" 
                 btnName="Get Started"/>
        </div>
    );
}

export default Home;
