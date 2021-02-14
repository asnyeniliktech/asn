import React from "react";
import Card from "./Card/Card";
import dev1 from "../img/dev1.jpg";
// import dev2 from "../img/dev2.jpg";
import dev3 from "../img/dev3.jpg";
// import dev4 from "../img/dev4.jpg";
import dev5 from "../img/dev5.jpg";
import dev6 from "../img/dev6.jpg";
import dev7 from "../img/dev7.jpg";
import dev8 from "../img/dev8.jpg";
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


 <Card title="Web Development" imgscr={dev5} description="We’re bunch of guys who’re adept and skillful web designers and we are master of this field. Site advancement has been an issue and we as web Development Company working enthusiastically to come up with first-rate solution. We’ll keep on working until we get the job done. Here at Elexoft, you’ll get any web of your choice and it’s our responsibility to give you our best through our website maintenance services."/>
 <Card  title="Mobile Apps Development" imgscr={dev3} description="When it comes to mobile applications and mobile development services, we are leading this world in Pakistan. Our android developers are making application keeping in minds the pros and cons. We know what is user friendly applications are and we are merging them at a platform where mobile companies can execute their versatility to produce contemporary versions of android app services in Pakistan and ipad Apps." />
 <Card  title="Software Development" imgscr={dev6} description="Dynamologic Solutions provides niche based web and app development services that help you focus on your business, corner your target market and let your potential customers seek you out. We create robust applications that guarantee high performance, stellar UI and exceptional user experience."/>
 <Card title="SEO / SMM / INTERNET MARKETING" imgscr={dev7} description="We leave no stone unturned in giving you the best digital exposure. Our unique SEO strategies, creative content writing, social media marketing, and link building provide the highest lead generation. Packed altogether, these features are incorporated to make your brand stand out of the mob in the digital world."/>
 <Card  title="Graphic Designing" imgscr={dev8} description="Our graphic designers are not only expert in graphic designing but also they’re up-to-date as far as web promotion is concerned. So here you can get multiple benefits under a table which is our specialty. Elexoft is known for producing best logo design in Pakistan."/>
 <Card  title="Web scrapers" imgscr={dev1} description="Our web scraping tools scan the web and extract the information you need. We specialize in creating custom crawl clusters that crawl through large quantities of data from multiple sources in parallel, retrieving usable data faster while breaking free of scaling constraints."/>

</div>
                </div>

            </div>
        </div>


      </div>
    </div>
  );
}

export default Services;
