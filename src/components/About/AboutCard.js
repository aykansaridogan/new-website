import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aykan SARIDOĞAN </span>
            from <span className="purple"> Kütahya, Türkiye.</span>
            <br />I am a junior Software Engineer
            <br />
          
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Dota 2
            </li>
            <li className="about-activity">
              <ImPointRight /> Riding a Bike
            </li>
            <li className="about-activity">
              <ImPointRight /> Camping
            </li>
          </ul>
          <br></br>
          <br></br>
          <p style={{ color: "rgb(155 126 172)" }}>
            "You'll start to feel better once you start doing things."{" "}
          </p>
          <footer className="blockquote-footer">Aykan SARIDOĞAN</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
