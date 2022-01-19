import React,{useState} from 'react'
import { Link } from 'react-router-dom';


const Header = () => {

    const [show,setShow] =useState(false);

    const showToggler = () =>{
        setShow(!show);
    }

    return (
        <>
 
 <nav className="navbar navbar-dark text-white bg-dark w-full navbar-expand-lg">
 <div className="container">
    <Link className="navbar-brand fs-2" to="/">THE <span className="text-warning">GYM</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={showToggler}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse text-center fs-4 navbar-collapse ${show? "show":""}`}>
      <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/ourclasses">Our Classes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/about">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/blog">Quotes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/Pricing">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/contact">Contact us</Link>
        </li>
      </ul>
    </div>
    </div>
</nav>

        </>
    )
}

export default Header
