import React from "react";
import projectsList from "../projects.js";
import './singleProject.css';
import { useParams, Link } from "react-router-dom";

const SingleProject = () => {
    const { index } = useParams();
    const singProj = projectsList[index];
    
    return(
        <section id="singleProject">
                <h1 className="projectHeading">{singProj.projectTitle}</h1>
                {
                    singProj.githubUrl !== '' &&  <Link to={singProj.githubUrl}><button className="btnProject">Github Repository</button></Link>
                } 
                <div className="projectImages">
                {
                    singProj.images.length > 0 && (
                        singProj.images.map((url, index) => {
                        return(
                            <img src={url} alt="project-images" className="projImage" key={index}/>
                        )  
                    }))
                }
                <hr style={{marginTop:"2rem", marginBottom:"2rem"}}/>
                {
                    singProj.description.map((desc) => {
                        return(
                            <div className="projDesc">
                                <p>{desc} <br /></p> 
                            </div>
                            
                        )
                    })
                }


                
                
                </div>
        </section>
    )
}

export default SingleProject;