import React from "react";
import web from "../img/dev2.jpg";
import  Common from "../Components/Commen/commenpage"
const About = () => {
    return (
        <div style={{marginTop:"15px"}}>
                <Common 
                name="Welcome to About " 
                 imgscr={web} 
                 visit="/contact" 
                 btnName=""/>
        </div>
    );
}

export default About;
