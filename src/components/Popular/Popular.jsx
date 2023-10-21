import React, { useEffect } from 'react'
import './popular.css'
import './Popular.scss'
import {BsArrowLeft} from "react-icons/bs"
import {BsArrowRight} from "react-icons/bs"
import {BsDot} from "react-icons/bs"
import img from '../../Assets/image (1).jpg.jpg'
import img2 from '../../Assets/image (2).jpg.jpg'
import img5 from '../../Assets/image (5).jpg.jpg'
import img7 from '../../Assets/image (7).jpg.jpg'
import img9 from '../../Assets/image (9).jpg.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'





const Data=[
  {
    id:1,
    imgSrc:img2,
    destTitle:'Machu Picchu',
    location:'Peru',
    grade:'CULTURAL RELAX',
  },
  {
    id:2,
    imgSrc:img5,
    destTitle:'Guanajuato',
    location:'Mexico',
    grade:'CULTURAL RELAX',
  },
  {
    id:3,
    imgSrc:img7,
    destTitle:'Angkor Wat',
    location:'Cambodia',
    grade:'CULTURAL RELAX',
  },
  {
    id:4,
    imgSrc:img9,
    destTitle:'Taj Mahal',
    location:'India',
    grade:'CULTURAL RELAX',
  }
]
 
const Popular = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
  <section className='popular section container'>
       <div className="secContainer">

        <div className="secHeader flex">
          <div data-aos='fade-right' data-aos-duration="2500" className="textDiv">
              <h2 className="secTitle">
                Popular Destination 
              </h2>
              <p>
                From historical cities to natural speculators, come see the best of the world!
              </p>
          </div>
          <div data-aos='fade-left' data-aos-duration="2000" className="iconsDiv flex">
          <BsArrowLeft className="icon leftIcon"/>
          <BsArrowRight className="icon"/>
          </div>
        </div>
        <div className="mainContent grid">
        {
          Data.map(({id,imgSrc,destTitle,location,grade})=>{
            return(
              <div  data-aos='fade-up' data-aos-duration="2000" className="singleDestination">
              <div className="destImage">
                <img src={imgSrc} alt="Image title" />
    
                <div className="overlayInfo">
                  <h3>{destTitle}</h3>
                  <p>{location}</p>
                  <BsArrowRight className="icon"/>
                </div>
              </div>
              <div className="destFooter">
                <div className="number">
                  0{id}
                </div>
                <div className="destText flex">
                  <h6>
                    {location}
                  </h6>
                  <span className='flex'>
                     <span className="dot">
                     <BsDot className="icon"/>
                     </span>
                     MF Production
                  </span>
                </div>
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

export default Popular
