import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import {FaCcMastercard,FaCcVisa} from "react-icons/fa"
import {SiAmericanexpress} from "react-icons/si"
import {FaRegDotCircle} from "react-icons/fa";
import {FiRefreshCw} from "react-icons/fi"

const DebitCard = () => {

    const [opset,setOpset] =useState(false);
    
    const [userData1,setUserData1] =useState({
      cardNum: "",
      name: "",
      expire: "",
      cvv: "",
    })

    let name,value;
    const handleChange = (e) =>{
     
      name =e.target.name;
      value =e.target.value;
      
      setUserData1({...userData1, [name]: value})
     
    }
    const handleSubmit = (e) =>{
       e.preventDefault();
       setOpset(true)
    }

    return (
        <>
          <div className="container creditCon mt-5">
          <div className="row justify-content-md-center ">
            <div className="col-lg-10 debitCard border border-1">
              <div>
                <div className="d-flex flex-row align-items-center">
                  <section className="flex-grow-1">
                  <span><FaRegDotCircle className="text-warning"/></span>
                  <span className="ms-3 fw-bold">Debit Card</span><br/>
                  </section>
                  <section className="me-3 fs-3">
                   <FaCcMastercard className="me-3"/>
                   <FaCcVisa className="me-3"/>
                   <SiAmericanexpress className="me-3"/>
                  </section>
                </div>
              <p className="ms-5" style={{fontSize: "13px"}}>Safe money transfer using your bank account, Visa, Maestro, Discover, American Express.</p>
              </div >


              {/* form section here */}
              <div className="container mb-3">
              {/* FORM SECTION START HERE */}

              <form class="row g-3 needs-validation" onSubmit={handleSubmit} novalidate>
              <div class="col-md-12">
                 <label for="validationCustom01" class="form-label">CARD NUMBER</label>
                 <input type="text" class="form-control" id="validationCustom01" value={value} name="cardNum" placeholder="1234 1234 1234" onChange={handleChange} required/>
                 <div class="valid-feedback">
                  Looks good!
                   </div>
                  </div>
                  <div class="col-md-6">
                  <label for="validationCustom03" class="form-label">NAME</label>
                   <input type="text" class="form-control" id="validationCustom03" value={value} placeholder="Name" onChange={handleChange} name="name" required/>
                 <div class="invalid-feedback">
                     Please provide a valid city.
                   </div>
                    </div>   
                    <div class="col-md-2">
                  <label for="validationCustom03" class="form-label">EXPIRE</label>
                   <input type="text" class="form-control" id="validationCustom03" value={value} placeholder="dd/mm" onChange={handleChange} name ="expire" required/>
                 <div class="invalid-feedback">
                     Please provide a valid city.
                   </div>
                    </div>  
                    <div class="col-md-6">
                  <label for="validationCustom03" class="form-label">CVV</label>
                   <input type="text" class="form-control" id="validationCustom03" value={value} placeholder="Cvv" onChange={handleChange} name="cvv" required/>
                 <div class="invalid-feedback">
                     Please provide a valid city.
                   </div>
                    </div> 
                    <div class="col-12">
                     <button class="btn btn-primary" type="submit">Pay</button>
                     </div>
              </form>

              {/* FORM SECTION END HERE */}
              </div>
              
            </div>
          </div>
        </div>  

        {/* below buttons  */}
         {
           opset ? <>
           <Card/>
           <div className="container mt-3">
            <div className="row justify-content-md-end">
              <div className="col-md-4 pe-3">
              <button className="btn btn-warning disabled me-3">Back</button>
              <Link to="/cong"><button className="btn btn-warning">Next</button></Link>
              </div>
            </div>
           </div>
           </>
           : ""
         }
        </>
    )
}

export default DebitCard;


export function Card(){
  return (
    <>
     <div className="container mt-4">
       <div className="row">
         <div className="col-md-6">
           <h3>Payment Successful!....</h3>
         </div>
       </div>
     </div>
    </>
    
  )
}
