import React, { useEffect } from 'react'
import './offer.css'
import './Offer.scss'
import {MdKingBed} from 'react-icons/md'
import {MdBathtub} from 'react-icons/md'
import {MdAirportShuttle} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {BsArrowRight} from 'react-icons/bs'
import img from '../../Assets/image (3).jpg.jpg'
import img8 from '../../Assets/image (4).jpg.jpg'
import img6 from '../../Assets/image (6).jpg.jpg'
import img7 from '../../Assets/image (8).jpg.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'





const Offers=[
  {
    id:1,
    imgSrc:img8,
    desTitle:'Machu Picchu',
    location:'Peru',
    price:'$7,452'
  },
  {
    id:2,
    imgSrc:img6,
    desTitle:'Guanajuato',
    location:'Mexico',
    price:'$2,558'
  },
  {
    id:3,
    imgSrc:img7,
    desTitle:'Angkor Wat',
    location:'Combodia',
    price:'$4,400'
  },
  // {
  //   id:4,
  //   imgSrc:img8,
  //   desTitle:'Taj Mahal',
  //   location:'India',
  //   price:'$300'
  // },
 
]


const Offer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
      <section className='offer container section'>
        <div className="secContainer">
           <div data-aos='fade-up' data-aos-duration="2000" className="secIntro">
            <h2 className="secTitle">
              Special Offers
            </h2>
            <p>
              From historical cities to natural speculators,come see the best of the world!
            </p>

           </div>
           <div className="mainContent grid">
               {
                Offers.map(({id,imgSrc, desTitle, location, price})=>{
                  return(
                    <div data-aos='fade-up' data-aos-duration="3000" className="singleOffer">
                    <div className="destImage">
                      <img src={imgSrc} alt={desTitle} />
                      <span className='discount'>
                         30% Off
                      </span>
                    </div>
                    <div className="offerBody">
                      <div className="price flex">
                        <h4>
                        </h4>
                          {price}
                        <span className="status">
                          For Rent
                        </span>
                      </div>
                      <div className="amenities flex">
                         <div className="singleAmenity flex">
                          <MdKingBed className="icon"/>
                          <small>2 Beds</small>
                         </div>
                         <div className="singleAmenity flex">
                          <MdBathtub className="icon"/>
                          <small>1 Bath</small>
                         </div>
                         <div className="singleAmenity flex">
                          <FaWifi className="icon"/>
                          <small>Wi-Fi</small>
                         </div>
                         <div className="singleAmenity flex">
                          <MdAirportShuttle className="icon"/>
                          <small>Shuttle</small>
                         </div>
                      </div>
                      <div className="location flex">
                          <MdLocationOn className="icon"/>
                          <small>450 Vine #310,{location}</small>
                      </div>
                      <button className='btn flex'>
                        View Details
                        <BsArrowRight className='icon'/>
                      </button>
                    </div>
                  </div>
                  )
                })
               }
           </div>
        </div>
      </section>
    )
}

export default Offer
