import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineYoutube} from "react-icons/ai"
import {FiFacebook} from "react-icons/fi"
import {FiInstagram} from "react-icons/fi"
import {FiTwitter} from "react-icons/fi"
import {ImWhatsapp} from "react-icons/im"

const Footer = () => {
    return (
        <>
        <div className="footer-data bg-dark mt-5">
         <footer className="container con-data bg-dark text-white p-5">
           <div className="row">
               <div className="col-lg-3">
                   <Link to="/"><h2 className="text-uppercase">the <span className="text-warning ">gym</span></h2></Link>
               </div>
               <div className="col-lg-2 text-capitalize">
                   <p>Need help</p>
                   <p>Help center</p>
                   <p>email support</p>
                   <p>gift certificates</p>
                   <p>send us feedback</p>
               </div>
               <div className="col-lg-2 text-capitalize">
                   <p className="fw-bold">digital resources</p>
                   <p>articles</p>
                   <p>E-books</p>
               </div>
               <div className="col-lg-2 text-capitalize">
                   <p className="fw-bold">contact with us</p>
                   <section className="d-flex fs-5">
                     <AiOutlineYoutube/>
                     <FiFacebook className="ms-2"/>
                     <FiInstagram className="ms-2"/>
                     <FiTwitter className="ms-2"/>
                     <ImWhatsapp className="ms-2"/>
                   </section>
                   <p>forum</p>
               </div>
               <div className="col-lg-3 text-capitalize">
                   <p>join our newsletter</p>
                   <p>get exclusive news ,features and updates from the shredder weight loss academy</p>
               </div>
           </div>
           <div className="text-center mt-5">@2021.All Rights Reserved</div>
         </footer>
         </div>
        </>
    )
}

export default Footer
