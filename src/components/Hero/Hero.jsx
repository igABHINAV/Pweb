import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";

import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Abhinav Kumar</h1>
            <h5>Software Engineer</h5>
            <p className="description">
              I'm a <strong>software developer</strong> specializing in <strong>software development, system design, and generative AI</strong>. I enjoy building and discussing <strong>scalable microservices</strong>, solving complex problems, and crafting efficient, long-term scalable solutions.<br/><br/> Currently, I work at Zolo as a Software Engineer, where I develop various microservices in collaboration with business teams and their requirements.<br/><br/> Alongside this, I continuously learn and stay updated on the latest advancements in <strong>generative AI</strong>, working with <strong>MCP servers, A2A protocols, Graph RAGs</strong>, and more. Let's connect and chat about systems, development, or anything in between!
            </p>
          </HeroLeft>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img src="./scroll-down.svg" alt="scroll-down" />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
