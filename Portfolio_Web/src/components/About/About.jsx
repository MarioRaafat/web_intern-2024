import React from 'react'
import {services} from "../../constants/constants.js";
import { fadeIn, textVariant } from "../../utils/motion";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import "./About.css"


const About = () => {

  const ServiceCard = ({ index, title, icon }) => (
      <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div className="service">
            <img src={icon} alt={title} className='service-icon'/>
            <h3 className='service-title'> {title} </h3>
          </div>
        </motion.div>
      </Tilt>
  );

  return (
      <>
        <sectio className="about-section">
          <div className="about-text">
            <h1 className="about-title">Overview..</h1>
            <p className="about-paragraph">
              I am passionate about creating and developing web applications.
              My goal is to create a seamless user experience with an emphasis on responsive design and performance.
              I have experience working with a variety of technologies
              and frameworks, including React, Node.js, and MongoDB. I'm always looking to expand
              My skill set and learning new techniques to stay up to date with the latest trends in web development.
            </p>
          </div>

          <div className="about-services">
            <h1 className="service-title">Services</h1>
            <div className="services-container">
              {services.map((service, index) => (
                  <ServiceCard key={service.title} index={index} {...service} />
              ))}
            </div>
          </div>
        </sectio>
      </>
  )
}

export default SectionWrapper(About, "about");