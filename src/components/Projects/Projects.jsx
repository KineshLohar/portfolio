import React from "react";
import './projects.css';
import projectsList from './projects.js';
import { Link } from "react-router-dom";


const Projects = () => {
    return (
        <section id="projects">
            <h1 className="projectsHeading">
                Projects
            </h1>
            <div className="projectList">

                {
                    projectsList.map((proj, index) => {
                        return(
                            <div className="projectCard">
                                <img src={proj.images[0]} alt="project-preview" className="previewImage"/>
                                <h2 className="projectTitle">{proj.projectTitle}</h2>
                                <p className="projectStack">{proj.tech}</p>
                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                    <Link to={`/singleproject/${index}`}><button className="btnProject">Know More</button></Link>
                                    {
                                        proj.githubUrl !== '' &&  <Link to={proj.githubUrl}><button className="btnProject">Github Repository</button></Link>
                                    }                                                                       
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects;