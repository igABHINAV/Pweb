import React from "react";
import { FaLinkedin, FaInstagram, FaGithub  } from "react-icons/fa";
import styled from "styled-components";

const Social = styled.div`
  display: block;
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);
  animation: y 1s ease-in-out;
  @keyframes y {
    0% {
      margin-top: -1000px;
    }
    100% {
      margin-top: 0px;
    }
  }
  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  a {
    font-size: 1.8rem;
    color: rgb(119, 119, 121);
    transition: 0.2s ease-in;
    &:hover {
      color: #24a0ed;
    }
  }

@media screen and (max-width: 1200px) {
    display: none;
}


`;
function FixSocialIcon() {
  return (
    <Social>
      <ul>
        <li className="item">
          <a
            href="https://www.linkedin.com/in/abhinav-kumar-8b6008247/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="item">
          <a
            href="https://github.com/igABHINAV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="item">
          <a
            href="https://www.instagram.com/i.g_abhinav/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        {/* <li className="item">
          <a
            href="https://x.com/AyushSaxena823"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </li> */}
      </ul>
    </Social>
  );
}

export default FixSocialIcon;
