import React from 'react'
import Footer from './Footer'
import Header from './Header';
import { Link } from 'react-router-dom';
import { pricingApi } from '../Apidata/PricingApi';
import {AiOutlineCheck} from "react-icons/ai"

const Pricing = () => {
    return (
        <>
          <Header/>
          <div className="slider2">
          <div className="image-text2">
       <h1 className="text-center display-3 text-uppercase text-white fw-bolder">Pricing <span className="text-warning">Plans</span></h1>
      </div>
         </div>

         <div className="my-5">
             <h1 className="text-center text-uppercase"><span className="text-warning">choose the offer</span> that suits you</h1>
             <p className="text-center pt-3">Sit et incididunt amet qui. Irure aute laborum aliqua id sint. Id commodo <br/> excepteur quis labore do irure sint est commodo.</p>
         </div>
           
           <div className="container mt-5">
               <div className="row gy-3 d-flex justify-content-center">
                   {
                       pricingApi.map((curEle) =>{
                           const {id,pic,text2,text3} =curEle;
                        return (
                            <div className="col-lg-4 col-8 position-relative" key="id">
                               <div className="card" style={{width: "100%"}}>
                               <img src={pic} class="card-img-top" alt="hello"/>
                               <div className="d-flex text-white pricingCardtext flex-column justify-content-center align-items-center">
                               <h5 className="text-uppercase text-warning">billed monthly</h5>
                               <h3 className="text-uppercase">{text2}</h3>
                               <h2 className="text-warning">{text3}</h2>
                               <span className="text-capitalize spanPricing d-flex justify-content-center align-items-start flex-column">
                               <p><AiOutlineCheck/> mobile-optimized</p>
                               <p><AiOutlineCheck/> best Hosting</p>
                               <p><AiOutlineCheck/> free custom</p>
                               <p><AiOutlineCheck/> outstanding</p>
                               <p><AiOutlineCheck/> happy customer</p>
                               </span>
                               <Link to="/form"><button className="btn btn-warning text-uppercase fw-bolder px-4 py-2">purchase</button></Link>
                               </div>
                               </div>
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

export default Pricing
