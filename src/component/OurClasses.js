import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Link} from "react-router-dom"
import { OurApi } from '../Apidata/OurservicesApi';

const ourClasses = () => {
  
    return (
        <>
        <Header/>
         <div className="slider2">
         <div className="image-text2">
       <h1 className="text-dark display-3 text-white fw-bolder">Our <span className="text-warning">Classes</span></h1>
      </div>
      </div>     
           <div className="container my-5">
               <div className="row gx-2">
                   {
                       OurApi.map((curEle) =>{
                           const {id,pic,text} =curEle;
                           return(
                            <div className="col-lg-4 position-relative my-5" key={id}>
                               <div className="card" style={{width: "100%"}}>
                               <img src={pic} class="card-img-top" alt="hello"/>
                               </div>
                                <Link to="/newcomp"><div className="service-text fs-5 fw-bolder bg-warning text-uppercase">{text}</div></Link>
                            </div>
                           )
                       })
                 }
               </div>
           </div>
           <Footer/> 
        </>
    )
}

export default ourClasses
