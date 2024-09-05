import React from 'react'
import { styles } from "../../styles";
import {intro_pic} from "../../assets";
import {SectionWrapper} from "../../hoc/index.js";
import "./Intro.css"

const Intro = () => {
  return (
      <div className="intro-section">
      <div className="intro-container">
        <div className={`relative w-full h-96 mx-auto`}>
          <div
              className={`absolute inset-0 top-[15%]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
          >
            <div className='flex flex-col justify-center items-center mt-5'>
              <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
              <div className='w-1 sm:h-80 h-40 violet-gradient' />
            </div>

            <div className="intro-card">
              <h1 className="intro-name">
                Hi, I'm <span className='text-[#915EFF]'>Mario</span>
              </h1>
              <p className="intro-text">
                <p className="intro-profession">I'm a <span className='text-[#fb8057]'>Software Engineer</span></p>
                <p className="intro-description">Looking for a software engineer who codes with creativity, solves problems with a smile,
                and brings a spark of humor to the team? Well, you’re in luck—I'm your perfect match!</p>
              </p>
            </div>
          </div>
        </div>
        <div className="intro-image">
            <img src={intro_pic} alt="intro-pic" />
        </div>
      </div>
      </div>
  )
}

export default Intro