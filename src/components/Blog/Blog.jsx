import React, { useEffect } from 'react'
import './blog.css'
import './Blog.scss'
import {BiRightArrowAlt} from 'react-icons/bi'
import img from '../../Assets/image (10).jpg.jpg'
import img2 from '../../Assets/image (11).jpg.jpg'
import img3 from '../../Assets/image (12).jpg.jpg'
import img4 from '../../Assets/image (13).jpg.jpg'



import Aos from 'aos'
import 'aos/dist/aos.css'


const Post=[
  {id:1,
    postImage:img,
    title:'Beautiful Morocco,let us travel!',
    desc:'The Kingdom of Morocco is a Muslim Country in the western North Africa , with the coastLines on the Atlantic Ocean and Mediterranean Sea'
  },
  {id:2,
    postImage:img2,
    title:'Romantic moments under Eiffel Tower',
    desc:'With vast swaths of the desert in its east and west and the rich Nile River Valley at its heart ,is site to one of the world earliest and greatest civilizations'
  },
  {id:3,
    postImage:img3,
    title:'Let us have an adventure outside Tunisia.',
    desc:'Tunisia is a small Arab country in the North Africa that represents both the aspirations of freedom and struggles against terrorism that roil the religion'
  }
,
  {id:4,
    postImage:img4,
    title:'Best country in the East Africa',
    desc:'When Kenya claimed its independence from the U.K. in 1963, Leaders of the newly formed republic promoted a sence of the national unity using the motto.'
  }
]

const Blog = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
  <section className="blog container section">
<div className="secContainer">
  <div className="secIntro">
    <h2 data-aos='fade-up' data-aos-duration="2000" className='secTitle'>
      Our Best Blog?
    </h2>
    <p data-aos='fade-up' data-aos-duration="2500">
      An insight to the incredible experience in the world.
    </p>
  </div>

  <div className="mainContainer grid">
     {
       Post.map(({id,postImage,title,desc})=>{
        return(
          <div data-aos='fade-up' data-aos-duration="2000" className="singlePost grid">
       <div className="imgDiv">
        <img src={postImage} alt={title} />
       </div>

       <div className="postDetails">
        <h3 data-aos='fade-up' data-aos-duration="3000">
          {title}
        </h3>
        <p data-aos='fade-up' data-aos-duration="4000">
         {desc}
        </p>
       <a href="#" className='flex' data-aos='fade-up' data-aos-duration="4500">
        Read More
        <BiRightArrowAlt className="icon"/>
       </a>
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

export default Blog
