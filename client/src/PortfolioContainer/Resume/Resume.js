import React, { useEffect, useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  // Reusable minor components
  const ResumeHeading = (props) => {
    return (
      <div className="reusme-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="reume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  // Static resume data for the labels
  const resumeBullets = [
    {
      label: "Education",
      logoSrc: "education.svg",
    },

    {
      label: "Work Histroy",
      logoSrc: "work-history.svg",
    },

    {
      label: "Programming Skills",
      logoSrc: "programming-skills.svg",
    },

    {
      label: "Projects",
      logoSrc: "projects.svg",
    },

    {
      label: "Interests",
      logoSrc: "interests.svg",
    },
  ];

  const programmingSkillsDetails = [

     {
      skill: "HTML",
      ratingPercentage: 85,
    },

     {
      skill: "CSS",
      ratingPercentage: 85,
    },

    {
      skill: "SASS",
      ratingPercentage: 75,
    },

    {
      skill: "JavaScript",
      ratingPercentage: 70,
    },

    {
      skill: "React JS",
      ratingPercentage: 69,
    },

     {
      skill: "Next JS",
      ratingPercentage: 65,
    },

    {
      skill: "React Native",
      ratingPercentage: 40,
    },

    {
      skill: "Git",
      ratingPercentage: 70,
    },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: {
        fromDate: "2023 ",
        toDate: " 2024",
      },
      subHeading: "Technologies Used: React JS, Bootstrap.",
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
    },

    {
      title: "Mobile E-shop",
      duration: {
        fromDate: "2024 ",
        toDate: " Present",
      },
      subHeading:
        "Technologies Used: React Native, MongoDB, Express Js, Node Js, Redux.",
      description:
        "An e-commerce application designed to sell products online with payment system integration (in progress).",
    },

    {
      title: "E-Commerce Website",
      duration: {
        fromDate: "2023 ",
        toDate: " 2024",
      },
      subHeading:
        "Technologies Used: React JS, Bootstrap, MongoDB,Exprees Js, React Js, Node Js, Redux.",
      description:
        "Online e-commerce website for showcasting and selling products online with payment system integration.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"National Open University of Nigeria"}
        subHeading={"BACHELOR OF SCIENCE COMPUTER SCIENCE"}
        fromDate={"2023 "}
        toDate={" Present"}
      />

      <ResumeHeading
        heading={"GOMYCODE (IKEJA HACKERSPACE)"}
        subHeading={"Full Stack JavaScript Bootcamp "}
        fromDate={"2023 "}
        toDate={" 2024"}
      />

      <ResumeHeading
        heading={"High School"}
        subHeading={"Speedway Group of School (College)"}
        fromDate={"2015 "}
        toDate={" 2021"}
      />
    </div>,

    // Work experience
    <div className="resume-screen-container" key="work-experience">
      <div className="work-experience">
        <ResumeHeading
          heading={"Finclusion Technologies LTD"}
          subHeading={"FRONTEND DEVELOPER INTERN"}
          fromDate={"2023 "}
          toDate={" Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as an frontend developer intern.
          </span>
        </div>

        <div className="experience-description">
          <span className="resume-description-text">
            - Collaborating on projects to develop efficient web applications,
            consistently driving significant workflow improvements and boosting
            team productivity by 30%.
          </span>
          <br />
          <span className="resume-description-text">
            - Working closely with UI/UX designers to optimize website
            interfaces, leading to a 25% reduction in bounce rates and improving
            customer retention.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - Collaborating with the backend team to integrate APIs and
            services, resulting in a 25% reduction in error rates and enhanced
            system reliability.
          </span>
          <br />
        </div>
      </div>
    </div>,

    // Programming Skills
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    // Projects
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,

    // Interests
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, I also love to teach people what I know simply because I believe in sharing."
      />

      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something I can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that I can get my hands on."
      />

      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: {
        transform: "translateY(" + index * offsetHeight * -1 + "px)",
      },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="oops...no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-contnet">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
