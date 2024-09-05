import React from "react";
import { Link } from 'react-router-dom'
import {projects} from "../../constants/constants.js";
import { fadeIn, textVariant } from "../../utils/motion";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import {github} from "../../assets";
import "./Projects.css";

const Projects = () => {

    const ProjectCard = ({ index, obj}) => (
        <Tilt className='xs:w-[250px] w-full'>
            <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
                <div className="project">
                    <div className="git-icon">
                        <Link to={obj.source_code_link} target="_blank"> <img src={github} alt="git_icon"/> </Link>
                    </div>
                    <img src={obj.icon} alt={obj.name} className='project-icon'/>
                    <h3 className='project-title'> <h1>{obj.name}</h1> </h3>
                    <div className="project-text">
                        <div className="project-description">
                            {obj.description}
                        </div>
                        <div className="project-tags">
                            {obj.tags.map((tag, index) => (
                                <span key={index} className={`tag ${tag.color}`}>{tag.name}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </Tilt>
    );

    return (
        <div className="projects-section">
            <h1 className="projects-title">Projects</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard index={index} obj={project} {...project} />
                ))}
            </div>
        </div>
    );
}

export default SectionWrapper(Projects, "projects");