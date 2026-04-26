import React from "react";
import { Link } from "react-router-dom";
import { Cpu } from "lucide-react";

import Hero from "./section/Hero";
import TechStack from "./section/TechStack";
import Summary from "./section/Summary";
import AboutTeam from "./section/AboutTeam";
import HyperLink from "./section/HyperLink";
import Footer from "./section/Footer";
import SystemFlow from "./section/SystemFlow";
import Schedule from "./section/Schedule";
import Navbar from "./layout/Navbar";

const MainLayout = () => {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-950 font-sans relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          screenSize: "20px 20px",
        }}
      />

      <div className="relative z-10">
        {/* sesi */}
        <Navbar />
        <Hero />
        <HyperLink />

        <AboutTeam />
        <SystemFlow />
        <Schedule />
        <TechStack />
        <Summary />

        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
