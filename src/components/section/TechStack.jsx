import React from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import tailwindLogo from "../../assets/tailwind.png";
import nodeLogo from "../../assets/node.png";
import pnpmLogo from "../../assets/pnpm.png";
import githubLogo from "../../assets/github.png";
import pythonLogo from "../../assets/python.png";
import jsLogo from "../../assets/js.png";
import cppLogo from "../../assets/cpp.png";
import websocketLogo from "../../assets/websocket.png";
import arduinoLogo from "../../assets/arduino.png";
import fastapiLogo from "../../assets/fastapi.png";

const TechStack = () => {
  const logos = [
    reactLogo,
    viteLogo,
    pnpmLogo,
    tailwindLogo,
    githubLogo,
    pythonLogo,
    cppLogo,
    websocketLogo,
    arduinoLogo,
    fastapiLogo,
    jsLogo,
    nodeLogo,
  ];

  return (
    <section id="tech" className="py-12 overflow-hidden shadow-white border-y border-white/5">
      <div className="flex animate-marquee whitespace-nowrap">
        <div className="flex gap-24 items-center px-12">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="tech logo"
              className="filter drop-shadow(0 0 5px rgba(255,255,255,0.2)) h-10 md:h-12 w-auto object-contain"
            />
          ))}
        </div>

        <div className="flex gap-24 items-center px-12">
          {logos.map((logo, index) => (
            <img
              key={`dup-${index}`}
              src={logo}
              alt="tech logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default TechStack;
