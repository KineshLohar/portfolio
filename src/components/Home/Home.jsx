import React from "react";
import './home.css';
import {Link} from 'react-scroll';

import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import backgroundImg from '../../assets/photo-main.jpg';

import Contact from "../ContactForm/Contact";
import Hyperlinks from "../Hyperlinks/Hyperlinks";
import About from "../About/About";
import RandomQuoteGenerator from "../RandomQuoteGenerator/RandomQuoteGenerator";
// import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div>
        <section id="home">
            <div className="introContent">
                <span className="introText"><span className="introName">Kinesh Lohar</span><br />Full Stack Developer</span>
                <p className="introPara">Motivated and eager-to-learn Tech enthusiast</p>
                <div className="btnDiv">
                <Link activeClass="active" to="contactPage" smooth={true} spy={true} duration={500} offset={-100}><button className="btn"><WorkOutlineIcon fontSize="medium" className="btnImg"/> Hire Me!</button></Link>
                <a href="https://coffee-celestina-79.tiiny.site/"><button className="btn"><AttachFileIcon fontSize="medium" className="btnImg"/> Resume </button></a>
                </div>
            </div>
            <div className="homeImages">
                <img src={backgroundImg} alt="Profile" className="bg1" />
                {/* <img src={backgroundImg} alt="Profile" className="bg2" /> */}
            </div> 
        </section>
        <hr />
        <RandomQuoteGenerator />
        <hr />
        <About />
        <hr />
        <Hyperlinks />
        <hr />
        <Contact />
        
        {/* <Footer /> */}
        </div>
    )
}

export default Home;