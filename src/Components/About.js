import React from "react";
import web from "../img/dev2.jpg";
import  Common from "../Components/Commen/commenpage"
const About = () => {
    return (
        <div>
                <Common 
                name="Welcome to About " 
                 imgscr={web} 
                 visit="/contact" 
                 btnName="Contact Now"/>
        </div>
    );
}

export default About;
