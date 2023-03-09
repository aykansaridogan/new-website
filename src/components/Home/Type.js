import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Engineer",
          "Full Stack Developer",
          "Python Developer",
          "Social Media Assistant",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 45,
      }}
    />
  );
}

export default Type;
