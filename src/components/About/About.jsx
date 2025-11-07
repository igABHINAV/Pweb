import React from "react";
import { stackList, toolist } from "../../data/ProjectData";
import {
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";

function About() {
  return (
    <React.Fragment>
      <svg
        height="20%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#151418ff"
          class="transition-all duration-300 ease-in-out delay-150"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
      <ContactWrapper id="about">
        <div className="Container" data-aos="fade-up">
          <div className="SectionTitle">About Me</div>
          <div className="AboutBio">
            I'm a <strong>Software Developer</strong> passionate about building <strong>scalable and intelligent systems</strong> ⚙️ with a strong focus on <strong>system design</strong>, <strong>distributed computing</strong>, and <strong>generative AI</strong>.
            I'm currently working as a <strong>Software Engineer at Zolo</strong>, where I design and develop <strong>microservices</strong> that power real-world operations — from <strong>automated billing</strong> 💰 and <strong>CRM task orchestration</strong> to <strong>real-time event-driven pipelines</strong> built with <strong>Kafka</strong> and <strong>ActiveMQ</strong>.

            <br />
            <br />
            My work lies at the intersection of <strong>scalable architectures</strong> and <strong>AI-driven automation</strong>. I love experimenting with <strong>MCP servers</strong>, <strong>A2A protocols</strong>, and <strong>Graph RAGs</strong> to build smarter, more resilient systems 🤖.

            <br />
            <br />
            Previously, I led the development of <strong>production-grade microservices</strong> and collaborated closely with <strong>cross-functional teams</strong> to deliver solutions that scale across multiple properties and platforms.

            <br />
            <br />
            Beyond work, I’m deeply engaged in <strong>problem-solving</strong> — with strong competitive rankings on <strong>LeetCode</strong> 🧠 and <strong>Codeforces</strong> — and I enjoy <strong>mentoring peers</strong>, continuous learning, and contributing to <strong>open-source AI tooling</strong>.
            <br />
            <br />

         
            Let’s connect and build something <strong>intelligent, scalable, and impactful</strong> together! 🚀
          </div>
          <br />
          <br />
          <div className="AboutBio tagline2">My Technical Skills</div>
          <br />
          <Technologies data-aos="fade-up">
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
          <br />

          <div className="AboutBio tagline2">Tools That I Use</div>
          <br />
          <Technologies data-aos="fade-up">
            {toolist.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </ContactWrapper>
    </React.Fragment>
  );
}

export default About;
