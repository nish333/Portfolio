import React from "react";
import "./CertificationBox.css";

const CertificationBox = ({ desc, style }) => {
  return (
    <div style={{ ...style }} className="certification">
      <p>{desc}</p>
    </div>
  );
};

export default CertificationBox;
