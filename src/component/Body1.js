import React from 'react';
import "../App.css"
import vid3 from "../video/vid3.mp4"

const Body1 = () => {
    return (
    <>
     <div>
       <div className="slider">
       {/* <video src={vid3} controls autoplay muted loop id="video"/> */}
       
       <div className="image-text">
       <h1 className="text-white text-uppercase display-3 fw-bolder">The Best Fitness <br/> studio in town</h1>
       <p className="text-white fw-bold my-4">Lorem ipsum,dolor sit amet consectetur adipisicing elit. Voluptates excepture ratione harum<br/> placeat sint, adipisci eaque tenetur fuga asperlores ea esse dicta, non sed ex quae quisquam<br/> laborum voluptatum,vertatis accusamus. lllo omnis harum corrupti?</p>
       <button className="btn btn-warning px-4 text-uppercase fw-bold rounded">join us</button>
    </div>
    </div>
    </div>
    </>
    )
}

export default Body1;