import React from "react";
import './certificates.css';
import { professionalCertificates, onlineCertificates, otherCertificates, institutionalCertificates, achievements } from "./certificates.js";

const Certificates = ({type, title}) => {
    
    const certType = type;

    return(
        <div className="certificates">
            <h1 className="certTitle">{title}</h1>
            <div className="certBars">
                {
                    certType === "achievements" ?
                    achievements.map((cert)=>{
                        return(
                            <a href={cert.certLink}>
                            <div className="certBar" key={cert.id}>
                                <img src={cert.imgSrc} alt={cert.altText} className="certImage" />
                                <div className="certBarText">
                                    <h2>{cert.title}</h2>
                                    <p>{cert.desc}</p>
                                </div>
                            </div>
                            </a>
                        
                        )
                    }) :
                    certType === "professional" ? 
                    professionalCertificates.map((cert)=>{
                        return(
                            <a href={cert.certLink}>
                            <div className="certBar" key={cert.id}>
                                <img src={cert.imgSrc} alt={cert.altText} className="certImage" />
                                <div className="certBarText">
                                    <h2>{cert.title}</h2>
                                    <p>{cert.desc}</p>
                                </div>
                            </div>
                            </a>
                        
                        )
                    }) : certType === "institutional" ?
                    institutionalCertificates.map((cert)=>{
                        return(
                        <a href={cert.certLink}>
                            <div className="certBar" key={cert.id}>
                                <img src={cert.imgSrc} alt={cert.altText} className="certImage" />
                                <div className="certBarText">
                                    <h2>{cert.title}</h2>
                                    <p>{cert.desc}</p>
                                </div>
                            </div>
                        </a>
                            
                        )
                    }) : certType === "online" ?
                    onlineCertificates.map((cert)=>{
                        return(
                        <a href={cert.certLink}>
                            <div className="certBar" key={cert.id}>
                                <img src={cert.imgSrc} alt={cert.altText} className="certImage" />
                                <div className="certBarText">
                                    <h2>{cert.title}</h2>
                                    <p>{cert.desc}</p>
                                </div>
                            </div>
                        </a>
                            
                        )
                    }) : certType === "other" ?
                    otherCertificates.map((cert)=>{
                        return(
                        <a href={cert.certLink}>
                            <div className="certBar" key={cert.id}>
                                <img src={cert.imgSrc} alt={cert.altText} className="certImage" />
                                <div className="certBarText">
                                    <h2>{cert.title}</h2>
                                    <p>{cert.desc}</p>
                                </div>
                            </div>
                        </a>
                            
                        )
                    }) : ""
                }  
            </div>
        </div>
    )
}

export default Certificates;