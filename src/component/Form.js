import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Header from "./Header";
import "../Form.css"
import Footer from "./Footer"
import {BsDot} from "react-icons/bs";


const Form = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  const [payment,setPayment] =useState(false)

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;

    if (firstName && lastName && phone && email && address && message) {
      const res = fetch(
        "https://form-data-a7f48-default-rtdb.firebaseio.com/reactForm.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
    setPayment(true);
  };


    return (
        <>
          <Header />  

          <div className="slider2">
          <div className="image-text3">
       <h1 className="text-center display-3 text-uppercase text-white fw-bolder">Your <span className="text-warning">gym</span> membership</h1>
      </div>
       </div>

       <div className="container mt-5">
          <div className="row justify-content-md-center align-items-center fs-3">
           <div className="col-lg-1 col-1 text-warning"><BsDot/></div>
           <div className="col-lg-3 col-3"><hr style={{height: "3px"}}/></div>
           <div className="col-lg-1 col-1"><BsDot/></div>
           <div className="col-lg-3 col-3"><hr style={{height: "3px"}}/></div>
           <div className="col-lg-1 col-1"><BsDot/></div>
          </div>
         </div>
         <div className="container">
          <div className="row justify-content-md-center align-items-center">
           <div className="col-lg-1 col-1 ">personal details</div>
           <div className="col-lg-3 col-3 "></div>
           <div className="col-lg-1 col-1">Bank payment</div>
           <div className="col-lg-3 col-3"></div>
           <div className="col-lg-1 col-1">Membership Created</div>
          </div>
         </div>


       {/* Form start Here */}
       <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br /> Gym.
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt eaque alias similique.
                  </p>
                  <figure>
                    <img
                      src="https://images.unsplash.com/photo-1616317050896-e13201fae23c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                      alt="contatUsImg"
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          value={userData.address}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          value={userData.message}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para">
                        I agree that the thapatechnicalpay may contact me at the
                        email address or phone number above
                      </label>
                    </div>
              
                    <div className="row d-flex justify-content-center align-items-center flex-row">
                      <div className="col-lg-4 col-4">
                    <button className="btn btn-primary w-100 disabled"> Back </button>
                    </div>
                    <div className="col-lg-4 col-4">
                      {
                        payment? <Link to="/payment"><button className="btn btn-primary w-100">Next </button></Link> : <Link to="/payment"><button className="btn btn-primary w-100" style={{opacity: "0"}}>Next </button></Link>
                      }
                    
                    </div>
                    <div className="col-lg-4 col-4">
                      <button type="submit" className="btn btn-danger w-100" onClick={submitData}>Submit</button>
                    </div>
                    
                    </div>
                  
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* Form End Here */}
        
          <Footer />
        </>
    )
}

export default Form
