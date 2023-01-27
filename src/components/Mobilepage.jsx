import React from 'react'
import img2 from '../assets/photo_2023.jpg'

const Mobilepage = () => {
    return (
        <div className='mainBlock p-5'>
            <div className='heading-p3 p-5'>
                <h1 className='f'><b>Score10</b> is More Than a Credit Score</h1>
            </div>
            <div className='heading-p3'>
                <img className='img1' src={img2} alt='' />
            </div>
            <div className='Good-day'>
                <p className='iphoneDescription'>
                    Our proprietary Score helps to identify tenants who are more likely to pay rent on time,
                    treat the property with care, and stay for longer periods of time.
                    Because it is based on analysis of key rental data,
                    it is more reliable than a standard credit score for evaluating your applicants
                </p>
            </div>

        </div>
    )
}

export default Mobilepage