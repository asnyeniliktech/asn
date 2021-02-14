import React from "react";
import Card from "./Card/Card";
import dev1 from "../img/dev2.jpg";
import dev2 from "../img/dev4.jpg";
import dev3 from "../img/dev3.jpg";
const Services =()=> {
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">
            Our services

        </h1>
        
        <div className="container-fluid mb-5">

            <div className="row">

                <div className=" col-12 max-auto">

<div className="row">

 {/* {

     sData.map((data,index)=>{

       return <Card key={index} title={data.title} imgscr={data.scr}/>
     })

 } */}


 <Card title="Web Development" imgscr={dev3}/>
 <Card  title="Appp Development" imgscr={dev2}/>
 <Card  title="Software Development" imgscr={dev1}/>
 <Card title="Web Development" imgscr={dev3}/>
 <Card  title="Appp Development" imgscr={dev2}/>
 <Card  title="Software Development" imgscr={dev1}/>

</div>
                </div>

            </div>
        </div>


      </div>
    </div>
  );
}

export default Services;
