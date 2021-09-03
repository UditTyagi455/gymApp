import React from 'react'
import {api2} from "../Apidata/HeroSection3Api"

const HeroSection3 = () => {
    return (
        <>
            <div className="text-center my-5 fs-3 text-uppercase fw-bolder"><span className="text-warning">why</span> choose us</div>
            <div className="container my-5">
              <div className="row gx-3 d-flex justify-content-center">
               {
                   api2.map(curEle =>{
                       const {id,icon,text,text2} =curEle;
                       return(
                           <div className="col-lg-4 col-8 cards rounded d-flex flex-column justify-content-center align-items-center" key={id}>
                            <img src={icon} alt="hi" width="60%" height="60%" className="rounded-circle"/>
                            <h5 className="fw-bold fs-5 text-center text-uppercase">{text}</h5>
                            <p className="px-5">{text2}</p>
                           </div>
                       )
                   })
               }
              </div>
            </div>
        </>
    )
}

export default HeroSection3
