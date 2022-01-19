import React,{useState} from 'react'
import Header from "./Header";
import Footer from "./Footer"
import {BsCheck,BsDot} from "react-icons/bs";
import "../css/paymentcss.css";
import DebitCard from "./DebitCard"
import CreditCard from './CreditCard';

const Patment = () => {

    const [cardMethod,setCardMethod] =useState('');

    const handleChange = (e) =>{
          setCardMethod(e.target.value)
    }

    return (
        <>
          <Header/>   

         <div className="container mt-5">
          <div className="row justify-content-md-center align-items-center fs-3">
           <div className="col-lg-1 col-1 text-warning"><BsCheck/></div>
           <div className="col-lg-3 col-3 text-warning"><hr style={{height: "3px"}}/></div>
           <div className="col-lg-1 col-1 text-warning"><BsDot/></div>
           <div className="col-lg-3 col-3"><hr style={{height: "3px"}}/></div>
           <div className="col-lg-1 col-1"><BsDot/></div>
          </div>
         </div>
         <div className="container">
          <div className="row justify-content-md-center align-items-center">
           <div className="col-lg-1 col-1 text-warning">personal details</div>
           <div className="col-lg-3 col-3 text-warning"></div>
           <div className="col-lg-1 col-1 text-warning">Bank payment</div>
           <div className="col-lg-3 col-3"></div>
           <div className="col-lg-1 col-1">Membership Created</div>
          </div>
         </div>
         
        <div className="container mt-4">
          <h5 className="py-4 uppercase text-center fw-bold">Which Method Will You Choose ?to pay the money......</h5>
          <div className="row justify-content-md-center">
            <div className="col-md-4">
         <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" value="debit_card" onChange={handleChange}/>
            <label className="form-check-label fw-bolder" for="flexRadioDefault1">
            Debit Card
                  </label>
            </div></div>
             <div className="col-md-4">
             <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" value="credit_card" onChange={handleChange}/>
             <label className="form-check-label fw-bolder" for="flexRadioDefault2">
               Credit Card
                 </label>
            </div></div>
            </div>
            
            </div>
          
            {(() => {
  
  switch (cardMethod) {
     case 'debit_card':
         return (
           <DebitCard/>
         )
     case 'credit_card':
         return (
           <CreditCard/>
         )
     default:
         return (
           ""
         )
  }

})()}
          
          <Footer/>
        </>
    )
}

export default Patment
