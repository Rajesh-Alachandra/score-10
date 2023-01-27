import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/Score-10-logo 1.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <img src={img} alt="" className='footer-image' />
            </div>
            <div className='container'>
                <ul className='listItems no-dots'>
                    <li>
                        <Link className='firstList' to='#'>Categories</Link>
                    </li>
                    <li>
                        <Link className='remainingtList' to='#'>About</Link>
                    </li>
                    <li>
                        <Link className='remainingtList' to='#'>How it Works</Link>
                    </li>
                    <li>
                        <Link className='remainingtList' to='#'>Blog</Link>
                    </li>
                </ul>
            </div>
            <div className='footer-para'>
                <p className='container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eius perferendis culpa pariatur corporis nulla, quibusdam, <br />itaque dolore repudiandae autem quod ipsa repellat dignissimos fugit explicabo. Mollitia ducimus nisi corporis?</p>
            </div>
        </div>
    )
}

export default Footer