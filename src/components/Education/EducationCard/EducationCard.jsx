import React from "react";
import { EducationList } from "../../../data/ProjectData";
import { EduCard, EducationCardRight } from "./styles";

function EducationCard() {
  return (
    <React.Fragment>
      {EducationList.map((list, index) => (
        <EduCard key={index}>
          <EducationCardRight data-aos="fade-up-left">
            <h4>{list.college}</h4>
            <span className="degree">{list.degree}</span>
          </EducationCardRight>
        </EduCard>
      ))}
    </React.Fragment>
  );
}

export default EducationCard;

