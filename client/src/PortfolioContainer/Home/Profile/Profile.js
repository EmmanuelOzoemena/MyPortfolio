import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  const [typeEfect] = useTypewriter({
    words: [
      "Ethusiastic Dev 😎",
      "Frontend Developer 💻",
      "React/React Native Dev 📱",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          {/* Social Media Links */}
          <div className="colz">
            <div className="colz-icon">
              {/* <a href='https://web.facebook.com/?_rdc=1&_rdr'>
                <i className='fa fa-facebook-square'></i>
              </a> */}

              {/* <a href='https://www.google.com/'>
                <i className='fa fa-google-plus-square'></i>
              </a> */}

              {/* <a href='https://www.instagram.com/'>
                <i className='fa fa-instagram'></i>
              </a> */}

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>

              <a
                href="https://github.com/EmmanuelOzoemena"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github-square"></i>
              </a>

              <a href="https://x.com/Emmanuel_Oz1">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="pimary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Ozoemena</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <span>{typeEfect}</span>
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with frontend operations.
              {/* Skilled at building applications with a focus on seamless front-end functionality. */}
            </span>
          </div>

          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire
            </button>

            <a href="Ozoemena-Emmanuel-Resume.pdf" download="ozoemena.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
