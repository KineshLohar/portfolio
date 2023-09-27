import React from "react";
import './educationandcertification.css';
import Educations from "./Educations/Educations.jsx";
import Certificates from "./Certificates/Certificates.jsx";

const EducationAndCertification = () => {
    return (
        <div id="eduandcert">
            <Educations />
            <hr />
            <Certificates type="achievements" title="Achievements"/>
            <hr />
            <Certificates type="professional" title="Professional Certificates"/>
            <hr />
            <Certificates type="institutional" title="Institutional Certificates"/>
            <hr />
            <Certificates type="online" title="Online Certificates"/>
            <hr />
            <Certificates type="other" title="Other Certificates"/>
        </div>
    )
}

export default EducationAndCertification;