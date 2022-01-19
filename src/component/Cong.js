import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import {BsCheck,BsDot} from "react-icons/bs"

const Cong = () => {
    return (
        <>
           <Header/>


           <div className="container mt-5">
          <div className="row justify-content-md-center align-items-center fs-3">
           <div className="col-lg-1 col-1 text-warning"><BsCheck/></div>
           <div className="col-lg-3 col-3 text-warning"><hr style={{height: "3px"}}/></div>
           <div className="col-lg-1 col-1 text-warning"><BsCheck/></div>
           <div className="col-lg-3 col-3 text-warning"><hr style={{height: "3px"}}/></div>
           <div className="col-lg-1 col-1 text-warning"><BsDot/></div>
          </div>
         </div>
         <div className="container">
          <div className="row justify-content-md-center align-items-center">
           <div className="col-lg-1 col-1 text-warning">personal details</div>
           <div className="col-lg-3 col-3 text-warning"></div>
           <div className="col-lg-1 col-1 text-warning">Bank payment</div>
           <div className="col-lg-3 col-3 text-warning"></div>
           <div className="col-lg-1 col-1 text-warning">Membership Created</div>
          </div>
         </div>

         <div>
             <h2 className="text-dark text-capitalize text-center my-5">Congratulation, now you are a member of our gym</h2>
         </div>
         <div className="d-flex justify-content-center align-items-center mt-3">
          <img src="https://cdn.w600.comps.canstockphoto.com/congratulations-label-congratulations-vector-clip-art_csp84653112.jpg" alt="cong"/>
         </div>

         <div className="container mt-5">
          <div className="row justify-content-lg-end">
            <div className="col-lg-3"> 
              <button className="btn disabled me-3">Back</button>
              <Link to="/"><button className="btn btn-danger">Finish</button></Link>
            </div>
          </div>
        </div>

           <Footer/>
        </>
    )
}

export default Cong
