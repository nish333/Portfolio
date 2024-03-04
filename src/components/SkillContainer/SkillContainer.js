import React from "react";
import { Element } from "react-scroll";
import about from "../../assets/about.png";
import LinearProgress from "@mui/material/LinearProgress";
import "./SkillContainer.css";

const SkillContainer = () => {
  return (
    <Element className="skillcontainer" id="skills">
      <div className="skillcontainer__img">
        <img src={about} alt="" />
      </div>
      <div className="skillcontainer__text">
        <h2>SKILLSET</h2>
        <div className="skillcontainer__skillset">
          <h5>ReactJS</h5>
          <div className="skillcontainer__slider skillconatiner__slider1">
            <LinearProgress variant="determinate" value={95} />
          </div>
        </div>
        <div className="skillcontainer__skillset">
          <h5>Bootstrap</h5>
          <div className="skillcontainer__slider skillconatiner__slider2">
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <div className="skillcontainer__skillset">
          <h5>HTML & CSS</h5>
          <div className="skillcontainer__slider skillconatiner__slider3">
            <LinearProgress variant="determinate" value={98} />
          </div>
        </div>
        <div className="skillcontainer__skillset">
          <h5>MySQL</h5>
          <div className="skillcontainer__slider skillconatiner__slider4">
            <LinearProgress variant="determinate" value={95} />
          </div>
        </div>
        <div className="skillcontainer__skillset">
          <h5>Java</h5>
          <div className="skillcontainer__slider skillconatiner__slider5">
            <LinearProgress variant="determinate" value={85} />
          </div>
        </div>
        <div className="skillcontainer__skillset">
          <h5>Spring Boot</h5>
          <div className="skillcontainer__slider skillconatiner__slider6">
            <LinearProgress variant="determinate" value={75} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillContainer;
