import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"

const HeroSection2 = () => {
    return (
        <>
         <div className="d-flex mb-5 fw-bolder justify-content-center fs-1 text-uppercase">traning <span className="ms-2 text-warning"> programs</span></div>
         <div className="container">
          <div className="row d-flex justify-content-center">
           <div className="col-lg-6 col-xxl-6 col-8 mb-3 heroSection2">
               <img src="https://images.unsplash.com/photo-1485727749690-d091e8284ef3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="herosection2images" width="100%" height="400rem"/>
            <div className="other-section text-uppercase border bg-warning fw-bold">Yoga traning session <span ><AiOutlineArrowRight className="fw-bold"/></span></div>
           </div>
           <div className="col-lg-6 col-xxl-6 col-8 heroSection2">
               <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="herosection2images" width="100%" height="400rem"/>
           <div className="other-section text-uppercase border bg-warning fw-bold">cardio traning session <span><AiOutlineArrowRight/></span></div>
           </div>
          </div> 
         </div>
        </>
    )
}

export default HeroSection2
