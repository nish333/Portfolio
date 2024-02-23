import React from "react";
import { Element } from "react-scroll";
import Project from "../Project/Project";
import "./ProjectContainer.css";

const ProjectContainer = () => {
  const projects = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYSjoaGUOkCsB9CZ62I3aUcfKYYBbBJ-oPQ&usqp=CAU",
      title: "Predection of Soil Quantity",
      desc: "Predeaction of Soil Types and Crop Recomendation using Machine Learning aims to develop an advanced system",
      link: "www.google.com",
    },
    {
      img: "https://media.istockphoto.com/id/1176320050/photo/weather-forecast-on-a-digital-display-7-day-dashboard-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=H5jbreqseczNxXieF9e0R8O5FHeY0ylKgEX_RKFenGo=",
      title: "Lets Check the Weather",
      desc: "Now check the correct Weather using your application for next 3 more days",
      link: "https://github.com/nish333/Lets-Check-The-Weather.git",
    },
  ];
  return (
    <Element className="projectcontainer" id="project">
      <h1>Projects</h1>
      <p>Here are some projects which I done for making lives of people easy</p>
      <div className="projectcontainer__projects">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              img={project.img}
              title={project.title}
              desc={project.desc}
              link={project.link}
            />
          );
        })}
      </div>
    </Element>
  );
};

export default ProjectContainer;
