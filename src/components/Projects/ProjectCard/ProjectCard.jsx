import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  CardsContainer,
  Card,
  CardRight,
  Stack,
  BtnGroup,
} from "./ProjectCardElements";

function ProjectCard() {

  return (
    <CardsContainer>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          <CardRight data-aos="fade-up-left">
            <h4>{list.title}</h4>
            <p>{list.description}</p>
            <Stack>
              <span className="stackTitle">Tech Stack</span>
              <span className="tags">{list.tech_stack}</span>
            </Stack>
            {(list.github_url || list.demo_url) && (
              <BtnGroup>
                {list.github_url && (
                  <a
                    className="btn btn2 SecondarBtn"
                    href={list.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                )}
                {list.demo_url && (
                  <a
                    className="btn PrimaryBtn"
                    href={list.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live ➜
                  </a>
                )}
              </BtnGroup>
            )}
          </CardRight>
        </Card>
      ))}
    </CardsContainer>
  );
}

export default ProjectCard;
