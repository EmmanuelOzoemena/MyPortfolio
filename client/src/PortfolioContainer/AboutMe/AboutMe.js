import React, { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './AboutMe.css'

export default function AboutMe(props) {

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id)
    return
    Animations.animations.fadeInScreen(props.id)
  }

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  const SCREEN_CONSTANTS = {
    description: "Frontend developer with strong expertise in building responsive and efficient web applications using modern technologies, including React.js and Redux. Adept at crafting intuitive user interfaces and ensuring seamless user experiences. An enthusiastic learner with solid technical skills, eager to contribute and make a positive impact within an organization.",
    highlights: {
      bullets: [
        "Expertise in responsive web development",
        "Creating interactive, user-friendly interfaces from design specs",
        "Proficient in React for modern web development",
        "Skilled in Redux for efficient state management",
        "Collaborating with backend teams to integrate APIs",
        "Optimizing frontend performance",
      ],
      heading: "Here are a Few Highlights:",
    }
  }

  const renderHighLight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className='highlight' key={i}>
        <div  className='highlight-blob'></div>
          <span>{value}</span>
      </div>
    ))
  }

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);


  return (
    <div
       className='about-me-container screen-container fade-in' 
       id={props.id || ""}
      >
      <div className='about-me-parent'>
        <ScreenHeading 
          title={'About Me'} 
          subHeading={'Why Choose Me?'} 
        />
        <div className='about-me-card'>

          <div className='about-me-profile'></div>

          <div className='about-me-details'>
            <span className='about-me-description'>
              {SCREEN_CONSTANTS.description}
            </span>
          <div className='about-me-highlights'>
            <div className='highlight-headiing'>
              <span>{SCREEN_CONSTANTS.highlights.heading}</span>
            </div>
            {renderHighLight()}
          </div>
          <div className='about-me-options'>
            <button 
              className='btn primary-btn'
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {""}
              Hire{" "}
            </button>

              <a href='Ozoemena-Emmanuel-Resume.pdf' download='ozoemena.pdf'>
                <button className='btn highlighted-btn'>Get Resume</button>
              </a>
          </div>
          </div>

        </div>
      </div>
    </div>
  )
}
