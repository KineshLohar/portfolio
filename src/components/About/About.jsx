import React from "react";
import './about.css';

import { Link as RouterLink} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin, faStackOverflow, faSnapchat, faHackerrank, faFreeCodeCamp, faFacebook } from '@fortawesome/free-brands-svg-icons'

const About = () =>{
    return (
        
        <section id="about">
            <div className="aboutInfo">
                <p className="aboutDesc">Hey there, I'm KINESH LOHAR, and I'm deeply immersed in the dynamic realm of full-stack development.. 
                    My journey in this ever-evolving tech landscape is fueled by passion and an unquenchable thirst for knowledge. 
                    I'm on a perpetual quest to level up my skills and embrace new challenges.
                </p>
                <br />
                <p className="aboutDesc">With a strong grasp of both front-end and back-end technologies, I'm well-versed in the art of crafting seamless digital experiences. 
                    JavaScript, React, Node, and MongoDB are my trusty companions in this exciting coding adventure.
                </p>
                <br />
                <p className="aboutDesc">Beyond the digital realm, I'm a fervent lover of outdoor sports like cricket and volleyball. When indoors, 
                    you'll often find me engaged in a thrilling game of carrom or chess. And for that adrenaline rush, 
                    there's nothing quite like a competitive session of Valorant.
                </p>
                <br />
                <p className="aboutDesc">My website serves as a digital canvas, showcasing my educational journey, certificates, 
                    and valuable work experiences. It's a place where my skills shine, 
                    my projects come to life, and my GitHub repositories stand as a testament to my coding prowess.
                </p>
                <br />
                <p className="aboutDesc">I hope you enjoy your stay on my website as much as I enjoy the journey of bringing ideas to life through code. 
                    Let's connect and collaborate to turn your digital dreams into reality.
                </p>
            </div>
            <div className="socialIconsList">
                <RouterLink to='https://www.instagram.com/kinesh_malviya' className="socialIcons"> 
                    <FontAwesomeIcon icon={faInstagram} size='4x' className="socialIcon" /> 
                </RouterLink>
                <RouterLink to='https://www.linkedin.com/in/KineshLohar' className="socialIcons"> 
                    <FontAwesomeIcon icon={faLinkedin} size='4x' className="socialIcon" /> 
                </RouterLink>
                <RouterLink to='https://github.com/KineshLohar' className="socialIcons"> 
                    <FontAwesomeIcon icon={faGithub} size='4x' className="socialIcon" /> 
                </RouterLink>
                <RouterLink to='https://stackoverflow.com/users/19269667/kinesh-lohar' className="socialIcons"> 
                    <FontAwesomeIcon icon={faStackOverflow} size='4x' className="socialIcon" /> 
                </RouterLink>
                <RouterLink to='https://www.snapchat.com/add/kinesh123' className="socialIcons"> 
                    <FontAwesomeIcon icon={faSnapchat} size='4x' className="socialIcon" /> 
                </RouterLink>
                <RouterLink to='https://www.hackerrank.com/kineshlohar' className="socialIcons"> 
                    <FontAwesomeIcon icon={faHackerrank} size='4x' className="socialIcon" /> 
                </RouterLink>
                <RouterLink to='https://www.freecodecamp.org/fcc59cce604-c645-497c-a473-73b95c9182d1' className="socialIcons"> 
                    <FontAwesomeIcon icon={faFreeCodeCamp} size='4x' className="socialIcon" /> 
                </RouterLink>
                <RouterLink to='https://www.facebook.com/kinesh.malviya.77' className="socialIcons"> 
                    <FontAwesomeIcon icon={faFacebook} size='4x' className="socialIcon" /> 
                </RouterLink>
            </div>
        </section>
    )
}

export default About;