import React from "react";
import { NavLink } from "react-router-dom";
const Common= (props) => {
    return (
        <div>
            <section id="header" className="d-flex align-items-center">

                <div className="container-fluid mb-5">

                    <div className="row">

                        <div className="col-10 max-auto">

<div className="row">


                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>
                                    {props.name}
                                    <strong className="brand-name"> ASN </strong> Yenilik Tech
</h1>
 
                                <h2 className="my-3">
                                    We are the team of talented developer making websites
</h2>

                                <div className="mt-3">
                                    <NavLink to= {props.visit} className="btn get-started  ">
                                    {props.btnName}
                                   </NavLink>
                                </div>
                            </div>



<div className="col-lg-6 order-1 order-lg-2 header-img">

{(props.imgscr)? <img src={props.imgscr}  className="img-fluid animated mb-2"    alt="home img"/> : null}

</div>
</div>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    );
}

export default Common;
