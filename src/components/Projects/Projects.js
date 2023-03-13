import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import erpsistem from "../../Assets/Projects/erpsistem.png";
import sesliled from "../../Assets/Projects/ledkontrol.png";
import watermark from "../../Assets/Projects/imagewatermarking.png";
import getr from "../../Assets/Projects/getir.png";
import dilCalisma from "../../Assets/Projects/dilcalisma.png";
import homeaut from "../../Assets/Projects/home.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Projelerim </strong>
        </h1>
        <p style={{ color: "white" }}>
          Bazı önemli projelerim   
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "45px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={watermark}
              isBlog={false}
              title="Image Watermarking"
              description="Watermark, also known as 'watermark', by definition, is the name given to a transparent stamp, text, signature or logo added to an image."
              ghLink="https://github.com/aykansaridogan/ImageWatermarking"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dilCalisma}
              isBlog={false}
              title="Language Learning App"
              description="It is a language learning application developed using HTML and CSS. There are cards in this application and it is an application that can be used on the phone."
              ghLink="https://github.com/aykansaridogan/dil_calisma_uygulamasi"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sesliled}
              isBlog={false}
              title="Voice Control Led With Google Assistan.io"
              description="Voice controlled lamp project using Raspberry Pi. The language used in the project is Arduino. Our led will turn on when we say 'turn on the light' or 'turn on'"
              ghLink="https://github.com/aykansaridogan/Google-Asistan-ile-Kontrol-Edilen-Lamba-"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={homeaut}
              isBlog={false}
              title="Home Automation"
              description="I developed Home automation using Raspberry Pi Pico and writing Python language. By using the MQTT application in the project, I enabled the notification to be sent to the user's phone."
              ghLink="https://github.com/aykansaridogan/raspberry_pi_pico_w_ledcontrol_with_buttons"
              demoLink="https://user-images.githubusercontent.com/105684427/205890559-ff134fe5-ecce-4de2-a4f4-98953da1723d.mp4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={erpsistem}
              isBlog={false}
              title="ERP System Hospital Management Module"
              description="The project where I learned Odoo 15.0 and ERP System software that I learned during my internship. Python and NoSQL were used in the project."
              ghLink="https://github.com/aykansaridogan/Hospital_ERP_Odoo"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={getr}
              isBlog={false}
              title="Getir Clone Website"
              description="React project that I did during my internship. I tried to make an exact copy of the site Getir.com. It's a copy I made when I first found out. There are lots of mistakes."
              ghLink="https://github.com/aykansaridogan/getir-website-clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
