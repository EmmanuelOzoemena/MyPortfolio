import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import ScrollService from '../../../utilities/ScrollService'
import './Profile.css'

export default function Profile() {

  const [typeEfect] = useTypewriter({
    words: ['Ethusiastic Dev 😎', 'Full Stack Developer 💻', 'MERN Stack Dev 😎', 'React/React Native Dev 📱'],
    loop:{},
    typeSpeed: 100,
    deleteSpeed: 40
  })

  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>

          {/* Social Media Links */}
          <div className='colz'>
            <div className='colz-icon'>
              <a href='https://web.facebook.com/?_rdc=1&_rdr'>
                <i className='fa fa-facebook-square'></i>
              </a>

              <a href='https://www.google.com/'>
                <i className='fa fa-google-plus-square'></i>
              </a>

              <a href='https://www.instagram.com/'>
                <i className='fa fa-instagram'></i>
              </a>

              <a href='https://www.youtube.com/'>
                <i className='fa fa-youtube-square'></i>
              </a>

              <a href='https://twitter.com/'>
                <i className='fa fa-twitter'></i>
              </a>
            </div>  
          </div>

          <div className='profile-details-name'>
            <span className='pimary-text'>
              {" "}
              Hello, I'm <span className='highlighted-text'>Ozoemena</span>
            </span>
          </div>

          <div className='profile-details-role'>
            <span className='primary-text'>
              {" "}
              <h1>
                <span>{typeEfect}</span>
              </h1>
            </span>
            <span className='profile-role-tagline'>Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className='profile-options'>
            <button 
              className='btn primary-btn'
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >  
              Hire
            </button>

            <a href='ehizcv.pdf' download='Ozoemena ehizcv.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>

        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
  
      </div>
    </div>
  )
}
