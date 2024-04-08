import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './Testimonial.css'

import lady from "../../../src/img/Testimonial/lady.png";
import mike from "../../../src/img/Testimonial/mike.png";
import man from "../../../src/img/Testimonial/man.png";
import ehiz from "../../../src/img/Testimonial/ehiz.jpg";
import daisy from "../../../src/img/Testimonial/daisy.jpg"
import shape from "../../../src/img/Testimonial/shape-bg.png";


import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations';

export default function Testimonial(props) {

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id)
    return
    Animations.animations.fadeInScreen(props.id)
  }

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  // Carousel
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    }
  }

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);


  return (
    <div>
      <ScreenHeading 
        title={'Testimonial'}
        subHeading={'What My Client Says About Me'}
      />

      <section className='testimonial-section fade-in' id={props.id || ""}>
        <div className='container'>
          <div className='row'>
            <OwlCarousel
              className='owl-carousel' 
              id='testimonial-carousel'
              {...options}
            >

              {/* Testiominal 1 */}

              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                    I patronized Ozoemena and when He delivered, I honestly fell in love with the project. He is a very honest guy and he delivers ontime.
                      <i className='fa fa-quote-right' />
                    </p>

                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>

                      <li>
                        <i className='fa fa-star' />
                      </li>

                      <li>
                        <i className='fa fa-star' />
                      </li>

                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>

                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>

                  <div className='client-info'>
                    <img 
                      src={lady} 
                      alt='no internet connection' 
                    />
                    <h5>Daisy Dominic</h5>
                    <p>CEO InansGlobal</p>
                  </div>

                </div>
              </div>


              {/* Testimonial 2 */}

              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      I patronized Ozoemena and when He delivered, I honestly fell in love with the project. He is a very honest guy and he delivers ontime.
                      <i className='fa fa-quote-right' />
                    </p>

                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>

                      <li>
                        <i className='fa fa-star' />
                      </li>

                      <li>
                        <i className='fa fa-star' />
                      </li>

                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>

                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>

                  <div className='client-info'>
                    <img 
                      src={mike}
                      alt='no internet connection' 
                    />
                    <h5>Mike Johnson</h5>
                    <p>CEO MJ Tech</p>
                  </div>

                </div>
              </div>


              {/* Testimonial 3 */}

              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      I patronized Ozoemena and when He delivered, I honestly fell in love with the project. He is a very honest guy and he delivers ontime.
                      <i className='fa fa-quote-right' />
                    </p>

                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>

                      <li>
                        <i className='fa fa-star' />
                      </li>

                      <li>
                        <i className='fa fa-star' />
                      </li>

                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>

                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>

                  <div className='client-info'>
                    <img 
                      src={daisy}
                      alt='no internet connection' 
                    />
                    <h5>Ibeh Somoto</h5>
                    <p>Content Creator</p>
                  </div>

                </div>
              </div>


              {/* Testimonial 4 */}

              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      I patronized Ozoemena and when He delivered, I honestly fell in love with the project. He is a very honest guy and he delivers ontime.
                      <i className='fa fa-quote-right' />
                    </p>

                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>

                      <li>
                        <i className='fa fa-star' />
                      </li>

                      <li>
                        <i className='fa fa-star' />
                      </li>

                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>

                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>

                  <div className='client-info'>
                    <img 
                      src={ehiz}
                      alt='no internet connection' 
                    />
                    <h5>Ehiz Asemota</h5>
                    <p>Web Develepor, MJ Tech</p>
                  </div>

                </div>
              </div>


              {/* Testimonial 5 */}

              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      I patronized Ozoemena and when He delivered, I honestly fell in love with the project. He is a very honest guy and he delivers ontime.
                      <i className='fa fa-quote-right' />
                    </p>

                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>

                      <li>
                        <i className='fa fa-star' />
                      </li>

                      <li>
                        <i className='fa fa-star' />
                      </li>

                      <li>
                        <i className='fa fa-star' />
                      </li>

                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>

                  <div className='client-info'>
                    <img 
                      src={man}
                      alt='no internet connection' 
                    />
                    <h5>Philip McGregor</h5>
                    <p>CEO, Greg Inc.</p>
                  </div>

                </div>
              </div>

            </OwlCarousel>

          </div>
        </div>
      </section>
      
      <div className="footer-image">
        <img 
          src={shape}
          alt="no internet connection" 
        />
      </div>
    </div>
  )
}
