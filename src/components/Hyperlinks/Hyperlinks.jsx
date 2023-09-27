import React from "react";
import './hyperlinks.css';
import { Link as RouterLink} from 'react-router-dom';

import educationCertificationImage from '../../assets/educationcertification.jpeg';
import workExperienceImage from '../../assets/workexperience.jpeg';
import skillsImage from '../../assets/skills.jpeg';
import projectsImage from '../../assets/projects.jpeg';
import githubRepoImage from '../../assets/githubrepo.jpeg';

const Hyperlinks = () => {
    return (
        <section id="hyperlinks">
            <div className="hyperlinksTiles">
                <RouterLink to='/educationandcertification'><img src={educationCertificationImage} alt="Education and Certifications" className="imageTile"/></RouterLink>
                <RouterLink to='/workexperience'><img src={workExperienceImage} alt="Work Experience" className="imageTile"/></RouterLink>
                <RouterLink to='/skills'><img src={skillsImage} alt="Skills" className="imageTile"/></RouterLink>
                <RouterLink to='/projects'><img src={projectsImage} alt="Projects" className="imageTile"/></RouterLink>
                <RouterLink to='/githubrepo'><img src={githubRepoImage} alt="Github Repositories" className="imageTile"/></RouterLink>
            </div>
        </section>
    )
}

export default Hyperlinks;