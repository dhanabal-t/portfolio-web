import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pg from "../../Assets/Projects/1.png";
import guess from "../../Assets/Projects/2.png";
import stack from "../../Assets/Projects/3.png";
import chat from "../../Assets/Projects/4.png";
import cal from "../../Assets/Projects/5.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/dhanabal-t/Chatapp"
              demoLink="https://privacy-chat-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Password Generator"
              description="Password generator js app it is initialize with four condition which type want character password using javascript and html. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              demoLink="https://passwordgenerator-webapp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guess}
              isBlog={false}
              title="Guess Card"
              description="Guess Card game app using Javascript mostly like game in my project and match with two card ,the select two card matched then score increse otherwise game over. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              demoLink="https://guesscard-game.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stack}
              isBlog={false}
              title="Stack Overflow clone app"
              description="Stack overflow clone app using react js and node js .This is stack overflow clone web app using mern stack app its like stack overflow web app . Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages. "
              ghLink="https://github.com/dhanabal-t/Stack-OverFlow-Clone"
              demoLink="https://stack-overflow-webapp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cal}
              isBlog={false}
              title="Js Calculator"
              description="JS Calculator is one of my javascript project using javascript and html . Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              demoLink="https://jscalculator-web.netlify.app/"
            />
          </Col>
 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
