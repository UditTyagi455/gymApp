import React from 'react'
import Header from "./Header";
import Footer from "./Footer"

const Aboutus = () => {
    return (
        <>
          <Header />
            <div className="container">
               <h1 className="text-center">About us</h1>

               <div className="container-fluid">
		     <div className="row">
				  <div className="col-lg-12 col-md-12 col-sm-12 text-center">
					   <div>
                        <img src="https://images.unsplash.com/photo-1492138786289-d35ea832da43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"  alt="images" className="aboutimage"/>
					   </div>
				  </div>
			 </div>
		  </div>


		  <div className="container-fluid mt-3 text-center">
			 <div className="row">
				 <div className="col-lg-12 col-md-12 col-sm-12 col-12">
					 <div className="d-flex flex-row justify-content-around">
						 <div className="aboutdiv1">

						 </div>

						 <div className=" dream-div2">
						 <h2 className=""><u>TEAM MANAGER!</u></h2>
						   <p style={{fontSize: "25px"}}>-  Udit Tyagi  -</p> 
					   <p style={{wordSpacing:"-2px",
						 fontSize:"21px"
						 }}>Find motivation from training with others for an efficient and progressive workout. Offering interactive and energetic sessions, Freestyle™ Group Training incorporates the latest equipment and trained fitness staff. These classes are a great way to work the whole body and improve overall fitness.</p>

						 </div>
					 </div>
				 </div>
			 </div>
		 </div>




		 <div className="container-fluid mt-3">
			 <div className="row">
				 <div className="col-lg-12 col-md-12 col-sm-12 col-12">
					 <div className="d-flex flex-row justify-content-around">
						 

						 <div className="about-personel">
						 <p style={{fontSize:"20px"
						 }}>Oue personel style is what sets us apart here is what you canexpect :</p>
						   <p>We our experience is the fresher of the gym website is a company and the usefull</p> 
						   <p>In this code is a write is the react js and the html css and helpfull</p> 
					   <p style={{fontSize:"19px",
						  }}>In this my website are the gym web
						 site and design by of the my experience of the data 
						 are the content is used of the web is a lorem web
						 In this my website are the gym web
						 site and design by of the my experience of the data 
						 are the content is used of the web is a lorem web</p>

						 </div>
						 <div className="aboutdiv2">

						 </div>
					 </div>
				 </div>
			 </div>
		 </div>



		 <div className="container-fluid mt-5">
		    <h3 className="text-center"><u>OUR TEAM</u></h3>
		     <div className="container mt-3">
				  <div className="row d-flex justify-content-center">
			
                            <div className='col-lg-6 my-4' style={{width: '40rem'}}>
								<img src="https://assets.entrepreneur.com/content/3x2/2000/20151120174008-man-procrastination-laptop-distant-typing-online.jpeg" alt="images" className="img-fluid" />
							</div>

							 <div className='col-lg-6 my-4' style={{width: '40rem'}}>
								<img src="https://www.personio.com/wp-content/uploads/2020/12/Gefa%CC%88hrdungsbeurteilung_blog-1024x576.jpg" alt="images" className="img-fluid" />
							</div>

							 <div className='col-lg-6 my-4' style={{width: '40rem'}}>
								<img src="https://www.involta.com/getmedia/fa5c6f84-0d25-4418-942c-2a423462dc11/orgazational-change-group-meeting.jpg?width=1000&height=667&ext=.jpg" alt="images" className="img-fluid" />
							</div>

							 <div className='col-lg-6 my-4' style={{width: '40rem'}}>
								<img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_603992138_315591.jpg" alt="images" className="img-fluid" />
							</div>

							 <div className='col-lg-6 my-4' style={{width: '40rem'}}>
								<img src="https://s4.reutersmedia.net/resources/r/?m=02&d=20180409&t=2&i=1249721131&w=780&fh=&fw=&ll=&pl=&sq=&r=LYNXMPEE381IZ" alt="images" className="img-fluid" />
							</div>						    
 					   
				  </div>
			 </div>
		 </div>



               {/* here */}
            </div>
            <Footer />
        </>
    )
}

export default Aboutus
