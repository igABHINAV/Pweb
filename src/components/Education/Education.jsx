import React from "react";
import EducationCard from "./EducationCard/EducationCard";

function Education() {
  return (
    <React.Fragment>
      <div className="ProjectWrapper" id="education">
        <div className="Container">
          <div className="SectionTitle">Education</div>
          <EducationCard />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Education;

