import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
} from "react-icons/di";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={3} md={2} className="tech-icons">
      <DiJavascript1 />
      <h1>Javascript</h1>
      </Col>
      <Col xs={3} md={2} className="tech-icons">
      <DiNodejs />
      <h1>Node.js</h1>
      </Col>
      <Col xs={3} md={2} className="tech-icons">
      <DiPython />
      <h1>Python</h1>
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiReact />
        <h1>React</h1>
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiMongodb />
        <h1>Mongo DB</h1>
      </Col>
      
      
    </Row>
  );
}

export default Techstack;
