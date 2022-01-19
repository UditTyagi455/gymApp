import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Services = () => {
  return (
    <>
      <Header />
      <div className="mb-4">
         <img src="https://images.unsplash.com/photo-1563964200076-1b883de2a2ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1211&q=80" alt="pic" className="" style={{width: '100%',height: '22rem'}}/>
      </div>
      <div className="container text-center">
        <h1 className="text-center text-info">FREESTYLE™ </h1>
        <h5 >Our dedicated Freestyle™ areas and fitness experts can help you discover new training techniques and exercises that offer a dynamic and efficient full-body workout.</h5>
      </div>
      <div className="container mt-5">
        <div className="row w-20">
          <div className="col-md-4">
            <img
              src="https://image.cnbcfm.com/api/v1/image/105999935-1562097549646sport-stretching-leisure-hobby-woman-strong-exercise-workout-gym-weightlifting_t20_v7r7a7.jpg?v=1594825333&w=1600&h=900"
              alt="gymimage"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://static.toiimg.com/thumb/msid-78118340,imgsize-896783,width-800,height-600,resizemode-75/78118340.jpg"
              alt="gymimage"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://image.cnbcfm.com/api/v1/image/105999935-1562097549646sport-stretching-leisure-hobby-woman-strong-exercise-workout-gym-weightlifting_t20_v7r7a7.jpg?v=1594825333&w=1600&h=900"
              alt="gymimage"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="container" style={{marginTop: "6rem"}}>
          <div className="row justify-content-around">
            <div className="col-md-6">
              <h2 style={{ fontSize: "3rem" }}>FREESTYLE™ GROUP TRAINING</h2>
              <p style={{ marginTop: "2rem" }}>
                Find motivation from training with others for an efficient and
                progressive workout. Offering interactive and energetic
                sessions, Freestyle™ Group Training incorporates the latest
                equipment and trained fitness staff. These classes are a great
                way to work the whole body and improve overall fitness.
              </p>
              <button className="btn btn-info">Find out more</button>
            </div>
            <div className="col-md-4">
              <img
                src="https://m.economictimes.com/thumb/msid-77342362,width-1200,height-900,resizemode-4,imgsize-419941/gym.jpg"
                alt=" hello-gym"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row justify-content-around d-flex">
            <div className="col-md-6">
              <h2 style={{ fontSize: "3rem" }}>GROUP EXERCISE CLASSES</h2>
              <p style={{ marginTop: "2rem" }}>
                Our range of classes will inspire you to explore new training
                styles and techniques, while keeping you motivated with other
                like-minded members. We have a wide choice of classes that are a
                great complement to any training programme. See our class
                timetable for details.
              </p>
              <button className="btn btn-info">Explore all our classes</button>
            </div>
            <div className="col-md-4">
              <img
                src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61c3a5dff172f9cdf4dd232b%2FFit-woman-performing-front-squat-with-heavy-barbell-in-her-home-garage-gym-during%2F960x0.jpg%3Ffit%3Dscale"
                alt=" hello-gym2"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        {/* third one */}
        <div className="container mt-5">
          <div className="row justify-content-around d-flex">
            <div className="col-md-6">
              <h2 style={{ fontSize: "3rem" }}>CARDIO TRAINING</h2>
              <p style={{ marginTop: "2rem" }}>
                Whether you want increased energy or reduced stress, cardio
                training (otherwise known as cardiovascular or CV training)
                helps you live a fitter life while strengthening your heart and
                lungs. From interval workouts to endurance exercises, cardio
                training can also help to lower blood pressure and cholesterol
                levels.
              </p>
              {/* <button className="btn btn-info">Explore all our classes</button> */}
            </div>
            <div className="col-md-4">
              <img
                src="https://images.livemint.com/img/2021/08/10/1200x900/20201025_MUM-PC-MN_Gym_Reopen_015_1628583917333_1628583934428.JPG"
                alt=" hello-gym2"
                className="img-fluid w-20"
              />
            </div>
          </div>
        </div>
        {/* Fourth one */}
        <div className="container mt-5">
          <div className="row justify-content-around d-flex">
            <div className="col-md-6">
              <h2 style={{ fontSize: "3rem" }}>STRENGTH TRAINING</h2>
              <p style={{ marginTop: "2rem", fontSize: "1.2 rem" }}>
                Shape your body and burn fat with strength training. With the
                right equipment such as free weights or resistance machines and
                advice from our experts, you can improve your overall health
                while increasing muscle and bone strength.
              </p>
              {/* <button className="btn btn-info">Explore all our classes</button> */}
            </div>
            <div className="col-md-4">
              <img
                src="https://www.mensjournal.com/wp-content/uploads/2020/05/gym.jpg?quality=86&strip=all"
                className="img-fluid w-20"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
