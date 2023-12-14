import React from 'react'
import slide1 from '../image/deadcells.png'
import slide2 from '../image/2.jpg'
import slide3 from '../image/3.jpg'
import slide4 from '../image/4.jpg'
import slide5 from '../image/5.jpg'
import '../pages/style.css'

const SlideContent = () => {

    
  return (
    <div className="div-slide">
        <div id="content1">
            <div className="slides">
                <input type="radio" name="slide" id="slide1"/>
                <input type="radio" name="slide" id="slide2"/>
                <input type="radio" name="slide" id="slide3"/>
                <input type="radio" name="slide" id="slide4"/>
                <input type="radio" name="slide" id="slide5"/>

                <div className="slide s1">
                    <img src={slide1} alt=""/>
                </div>
                <div className="slide">
                    <img src={slide2} alt=""/>
                </div>
                <div className="slide">
                    <img src={slide3} alt=""/>
                </div>
                <div className="slide">
                    <img src={slide4} alt=""/>
                </div>
                <div className="slide">
                    <img src={slide5} alt=""/>
                </div>
            </div>
        </div>
        <div className="navigation">
            <label className="bar" htmlFor="slide1"></label>
            <label className="bar" htmlFor="slide2"></label>
            <label className="bar" htmlFor="slide3"></label>
            <label className="bar" htmlFor="slide4"></label>
            <label className="bar" htmlFor="slide5"></label>
        </div>
    </div>
  )
}

export default SlideContent