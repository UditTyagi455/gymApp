import React from 'react'

const HeroSection = () => {
    return (
        <>
          <div className="container my-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-5 col-8">
                  <img src="https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="herosectionpic" width="100%" height="400rem"/>
                </div>
                <div className="col-lg-7 col-12">
                <div className="ms-5">
                  <p className="fs-1 text-danger text-uppercase fw-bold mt-5">we are here to dream!</p>
                  <p className="fs-2 text-uppercase fw-bold">our team is here serve you</p>
                  <p>Ipsum ullamco aliqua deserunt Lorem est amet nulla nostrud in. Nulla eu anim excepteur sit labore aliquip occaecat minim Lorem labore occaecat. Tempor culpa qui esse consectetur exercitation do ea eu. Aute anim sint do adipisicing eu reprehenderit duis nisi mollit aliquip commodo in mollit eu. Consequat voluptate in aliquip eiusmod officia sint.</p>
                </div>
                </div>
              </div>
          </div>  
        </>
    )
}

export default HeroSection
