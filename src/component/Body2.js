import React,{useState} from 'react'
import {BsFillBagFill} from 'react-icons/bs'
import {CgGym} from 'react-icons/cg';
import {RiMedicineBottleLine} from "react-icons/ri"
import {body2api} from "../Apidata/body2Api"

const Body2 = () => {

    const [apiData,setApiData] =useState(body2api);

    return (
        <div className="container my-5">
            <div className="row d-flex justify-content-center">
              {
                apiData.map(curEle =>{
                  const {id,picname,icon,textColor,text,text2} =curEle ;
                  return(
            <div className="col-md-4 col-8 mb-3" key={id}>  
                 <div class="card" style={{width: "100%",height: "60vh"}}>
                 <img src={picname} class="card-img-top" alt="car1img" height="100%"/>    
                 
                 <div className="card-text1 d-flex justify-content-center align-items-center flex-column">
                   <section className="icons fs-1 text-white"><BsFillBagFill/></section>
                   <h1 className={`${textColor} text-uppercase fw-bold`}>{text}</h1>
                   <p className={`${textColor} text-center`}>{text2}</p>
                 </div>
                 </div>
            </div>
                  )
                })
              }
            </div>
        </div>
    )
}

export default Body2
