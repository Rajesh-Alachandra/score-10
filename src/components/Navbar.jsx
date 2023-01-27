import React from 'react'
import { Link } from 'react-router-dom'
import img from "../assets/Score-10-logo 1.png"
import img1 from "../assets/1382 1.png"
import Home from './Home'
import Mobilepage from './Mobilepage'
import Footer from './Footer'
import Property from './Property'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg py-3 shadow-sm">
                <div className="container">
                    <Link className="navbar-brand fw-bold fs-4  " to="">
                        <img src={img} alt="img" className="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-5 mb-lg-3">
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to=""
                                >
                                    Categories
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">
                                    How it Works
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                        <div className="login">
                            <Link to="" className="btn btn-outline-primary text-color white  my-2">
                                <i className="fa fa-user-plus me-1"></i>  Get Register
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="card bg-dark text-white">

                <img src={img1} className="card-img" alt="bgImg" height={'700px'} />

                <div className="card-img-overlay d-flex flex-column justify-content-center ">

                    <div className="container">

                        <h5 className="card-title display-5 fw-bolder mb-0"> Verify your TENANTS ID <br />and Address</h5>

                        <h1 className="card-text display-3 fw-bolder">FREE now</h1>
                        <p className='card-para px'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Dolore voluptates quos adipisci nulla iste dolorem rerum ducimus? Ut laudantium nam<br />  saepe voluptatum doloribusofficiis consectetur enim unde, placeat exercitationem nostrum.</p><br />

                        <button className='btn btn-primary btn-lg px-4'> join the waitlist</button>

                    </div>

                </div>
            </div>
            <Home />
            <Mobilepage />
            <Property />
            <Footer />

        </div>
    )
}

export default Navbar