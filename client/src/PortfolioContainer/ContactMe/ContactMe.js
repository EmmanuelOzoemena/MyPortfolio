import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import imgBack from '../../../src/images/mail.jpeg'
import load2 from '../../../src/images/load2.gif'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './ContactMe.css'
import { useTypewriter } from 'react-simple-typewriter'
import Footer from "../../PortfolioContainer/footer/Footer";

export default function ContactMe(props) {

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id)
    return
    Animations.animations.fadeInScreen(props.id)
  }

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)


  const [typeEfect] = useTypewriter({
    words: ['Get In Touch 📧'],
    loop:{},
    typeSpeed: 100,
    deleteSpeed: 40
  })

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [banner, setBanner] = useState("")
  const [bool, setBool] = useState(false)

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEamil = (e) => {
    setEmail(e.target.value)
  }

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  // console.log(name)

  const submitForm = async (e) => {
    e.preventDefault()
    try {
      let data = {
        name, 
        email,
        message,
      }
      setBool(true)

      const res = await axios.post(`/contact`, data)

      if (name.length === 0 || email.length === 0 || message.length === 0 ) {
        setBanner(res.data.msg)
        toast.error(res.data.msg)
        setBool(false)
      } else if (res.status === 200) {
        setBanner(res.data.msg)
        toast.success(res.data.msg)
        setBool(false)

        setName("");
        setEmail("");
        setMessage("");
      }

    } catch (error) {
      // console.log(error)
    }
  }

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);


  return (
    <div className='main-container fade-in' id={props.id || ""}>
      <ScreenHeading 
        title={"Contact Me"}
        subHeading={"Let's Keep In Touch"}
      />
      <div className='central-form'>
        <div className='col'>
          <h2 className='title'>
            <span>{typeEfect}</span>
          </h2>

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

        <div className='back-form'>
          <div className='img-back'>
            <h4>Send Your Email Here</h4>
            <img src={imgBack} alt='no internet connection' />
          </div>

          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor='name'>Name</label>
            <input 
              type='text'
              onChange={handleName}
              value={name}
            />

            <label htmlFor='email'>Email</label>
            <input 
              type='email'
              onChange={handleEamil}
              value={email}
            />

            <label htmlFor='message'>Message</label>
            <textarea 
              type='text' 
              onChange={handleMessage}
              value={message}
            />

            <div className='send-btn'>
              <button type='submit'>
                send <i className='fa fa-paper-plane' />
                {bool ? (<b className='load'>
                  <img src={load2} alt='no internet connection' />
                </b>
                ) : (
                  ""
                )}
              </button>
            </div>

          </form>
        </div>

      </div>

      <Footer />
      
    </div>
  )
}
