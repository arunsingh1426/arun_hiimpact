import React, { useState } from 'react'

import Slider from "react-slick";

function Testimonial() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
  return (
    <>
    <div className='testimonialWrap spaceY80'>
    <div className='container position-relative'>
    <h4 className='title ctheme text-center mb20 d-dn'>
                 Let's see what our happy customer's say
                 </h4>
      <Slider 
      asNavFor={nav2} 
      ref={(slider1) => setNav1(slider1)}
      fade={true}
      arrows={false}
      responsive={[
        {
            breakpoint: 1024,
            settings: {
              dots: true,
              autoplay: true,
            }
          },
      ]}
      >
        <div className='inner d-flex'>
            <div className='left w40'>
            <img src="./img/home/testi1.png" alt="https://placehold.co/400x600" />
            </div>
            <div className='right w50'>
                 <h4 className='title ctheme'>
                 Let's see what our happy customer's say
                 </h4>
                 <div className='testStar'>
                 <span>&#x1F7CA;</span>  <span>&#x1F7CA;</span>  <span>&#x1F7CA;</span>  <span>&#x1F7CA;</span>  <span>&#x1F7CA;</span> 
                 </div>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    <h5 className='mb0 bolder'>Rajni</h5>
                    <p className='f09'>20 Junuary 2023</p>
            </div>
        </div>
        <div className='inner d-flex'>
            <div className='left w40'>
            <img src="./img/home/testi2.png" alt="https://placehold.co/400x600" />
            </div>
            <div className='right w50'>
                 <h4 className='title ctheme'>
                 Let's see what our happy customer's say
                 </h4>
                 <div className='testStar'>
                 <span>&#x1F7CA;</span>  <span>&#x1F7CA;</span>  <span>&#x1F7CA;</span>  <span>&#x1F7CA;</span>  <span>&#x1F7CA;</span> 
                 </div>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                 <h5 className='mb0 bolder'>Arun Singh</h5>
                    <p className='f09'>15 May 2022</p>
            </div>
        </div>
        <div className='inner d-flex'>
            <div className='left w40'>
            <img src="./img/home/testi3.png" alt="https://placehold.co/400x600" />
            </div>
            <div className='right w50'>
                 <h4 className='title ctheme'>
                 Let's see what our happy customer's say
                 </h4>
                 <div className='testStar'>
                 <span>&#x1F7CA;</span>  <span>&#x1F7CA;</span>  <span>&#x1F7CA;</span>  <span>&#x1F7CA;</span>  <span>&#x1F7CA;</span> 
                 </div>
                 <p> typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                 <h5 className='mb0 bolder'>Jone deo</h5>
                    <p className='f09'>21 October 2021</p>
            </div>
        </div>
        <div className='inner d-flex'>
            <div className='left w40'>
            <img src="./img/home/testi4.png" alt="https://placehold.co/400x600" />
            </div>
            <div className='right w50'>
                 <h4 className='title ctheme'>
                 Let's see what our happy customer's say
                 </h4>
                 <div className='testStar'>
                 <span>&#x1F7CA;</span>  <span>&#x1F7CA;</span>  <span>&#x1F7CA;</span>  <span>&#x1F7CA;</span>  <span>&#x1F7CA;</span> 
                 </div>
                 <p>printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                 <h5 className='mb0 bolder'>Juliya</h5>
                    <p className='f09'>28 February 2023</p>
            </div>
        </div>
      </Slider>



      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        className='nsliderNav m-dn'
      >
        <div className='sliderNav_img'>
          <img src="./img/home/testi1.png" alt="testi1" />
        </div>
        <div className='sliderNav_img'>
        <img src="./img/home/testi2.png" alt="testi1"  />
        </div>
        <div className='sliderNav_img'>
        <img src="./img/home/testi3.png" alt="testi1" />
        </div>
        <div className='sliderNav_img'>
        <img src="./img/home/testi4.png" alt="testi1" />
        </div>
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Testimonial