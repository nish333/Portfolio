import React from "react";
import CertificationBox from "../CertificationBox/CertificationBox";
import { Element } from "react-scroll";
import "./CertificationContainer.css";

const CertificationContainer = () => {
  return (
    <Element className="certificationContainer" id="certificate">
      <h1>Certification</h1>
      <div className="certificationConatiner__info">
        <CertificationBox desc="I have been completed JAVA FULL STACK COURSE at Login360 in Chennai" />
        <CertificationBox desc="Attended one month internship on CYBER SECURITY WITH ETHICAL HACKING oraganized by NSIC in Chennai" />
        <CertificationBox
          desc="Winner in Zonal Level CRICKET conducted by Anna University"
          style={{ backgroundColor: "#f64c08" }}
        />
        <CertificationBox desc="Won 2nd Prize in PPT, A National Level Symposiumn COGNOBLAZE'22 conducted by ACGCET" />
      </div>
    </Element>
  );
};

export default CertificationContainer;
