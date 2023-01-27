import React from 'react'
import cardImg from "../assets/cards.jpg"
import houseimage from "../assets/house.png"
import geethapic from "../assets/Frame.png"
import lineimg from "../assets/Vector (1).png"

const Home = () => {
    return (
        <div>
            <div className='d-flex flex-row'>
                <div>
                    <div>
                        <img src={geethapic} alt="" className="strike-img" />
                    </div>
                    <div className='container'>
                        <img src={cardImg} alt="" className='multi-card-image' />
                    </div>
                </div>
                <div>
                    <div className='container second-page-description'>
                        <h1 className='col-6 second-page-heading'>
                            Thoroughly Screen Your
                            Tenants
                        </h1>
                        <p className='second-page-paragraph mt-3 col-6'>
                            Score 10 offers tenant screening solutions to
                            landlords and Property managers so that thay can identify top quality applicants.
                        </p>
                        <ul className='ml-5 py-2 bullet-styling'>
                            <li className='mt-3'>
                                rent Out to verified tenants
                            </li>
                            <li className='mt-3'>
                                proper Financial Management
                            </li>
                            <li className='mt-3'>
                                Stream Line property Insurance Process
                            </li>
                            <li className='mt-3'>
                                Rent Collectionrent Out to verified tenants
                            </li>
                            <li className='mt-3'>
                                Curated Market Place with best in class  Landlord & Renter Services
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <img src={houseimage} alt="" className='house-img' />
            </div>
            <div>
                <img src={lineimg} alt="" className='line-image' />
            </div>
        </div>
    )
}

export default Home