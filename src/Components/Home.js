import React from "react";
import web from "../img/dev1.jpg";
import  Common from "../Components/Commen/commenpage"
const Home = () => {
    return (
        <div>
               <Common 
                name="Grow your business with " 
                 imgscr={web} 
                 visit="/about" 
                 btnName="Get Started"/>
        </div>
    );
}

export default Home;
