import React from "react";
import './educations.css';
import educationsList from './educations.js';


const Educations = () => {
    return (
        <div className="education">
            <h1 className="eduTitle">Education</h1>
            <div className="eduBars">
                {
                    educationsList.map((educ) => {
                        return(
                        <div className="eduBar">
                            <img src={educ.imgSrc} alt={educ.altText} className="eduImage" />
                            <div className="eduBarText">
                                <h2>{educ.title}</h2>
                                <p>{educ.description}</p>
                            </div>
                        </div>
                        )
                    })
                }   
            </div>
        </div>
    )
}

export default Educations;