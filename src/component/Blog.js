import React,{useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import {AiFillCalendar} from "react-icons/ai";
import { quotesApi } from '../Apidata/QuotesApi';

const Blog = () => {

    const [apiQuotes] =useState(quotesApi)
    return (
        <>
        <Header/>
         <div className="my-5">
         <hr style={{width: "20%",margin: "0px auto",height: "3px",color: "red"}}/>
         <h1 className="text-center text-uppercase mt-4">20 FITNESS MOTIVATION QUOTES</h1>
         <h5 className="text-center"><AiFillCalendar/> auguest 30,2021</h5>
         </div> 
         <div className="container main-quotes">
           <div className="row">
             <div className="col-lg-10">
               <img src="https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="quotesimg" width="100%" height="400rem"/>
               <div className="mt-5">
                 <p className="text-start">20 motivational quotes to inspire greatness in the gym.<br/><br/>

Lacking motivation to get back into the gym? Back in the gym already but feel stagnated? Or maybe you’re just looking for new inspiration for a the new year. Whatever your situation, reading words of wisdom from successful people can be super-inspiring.<br/><br/>

With that in mind, here are  20 amazing  motivational quotes from notable figures to help you kick start your new year — and your fitness goals.<br/><br/>

Some are from sports people, some entrepreneurs, world leaders and famous thinkers, but in each of these quotes is something to inspire you in your fitness pursuits.</p>
  <div className="my-5">
                 
                {
                    apiQuotes.map(curEle =>{
                        const {id,quotes,writer} =curEle;
                        return(
                        <>
                           <h4>{id}. '{quotes}'</h4>
                           <span>-- {writer}</span>
                           <br/><br/>
                        </>
                        )
                    })
                }
            </div>
               </div>
               <hr/>
               <img src="./img/myimg2.jpg" alt="mypic" width="110rem" height="110rem" className="rounded-circle m-5"/>
               <span className="fs-3 fw-bolder"> Udit Tyagi</span>
             </div>
           </div>
         </div>
         
         <Footer/> 
        </>
    )
}

export default Blog