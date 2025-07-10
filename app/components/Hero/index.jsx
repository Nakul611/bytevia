"use client";

import React from "react";
import { MdVerified } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center px-6 py-16 bg-[#f6f9fc] overflow-hidden">
      <style jsx global>{`
        @keyframes moveWave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .wave-animation {
          animation: moveWave 5s linear infinite;
        }
      `}</style>

      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-[200%] h-40 overflow-hidden z-0">
        <svg
          className="wave-animation w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L60,202.7C120,181,240,139,360,144C480,149,600,203,720,208C840,213,960,171,1080,160C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-[200%] h-40 overflow-hidden z-0">
        <svg
          className="wave-animation w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#eaf0fb"
            fillOpacity="1"
            d="M0,64L80,90.7C160,117,320,171,480,186.7C640,203,800,181,960,154.7C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="flex flex-col items-start gap-6">
          <p className="text-sm mb-3 flex items-center gap-2 text-[#593ffb] uppercase tracking-wide">
            <MdVerified className="text-2xl" /> Your Idea, Our Solution
          </p>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary-dark leading-tight mb-4">
            Empowering <span className="text-blue-medium">Innovation</span>
            <br />
            Through Tailored Tech Solutions
          </h1>

          <p className="text-lg text-gray-700 mb-6">
            At Bytevia, we turn your ideas into cutting-edge digital
            experiences. Whether it's mobile apps, cloud systems, AI, or custom
            software, we deliver scalable, secure, and smart solutions to help
            your business thrive in the digital age.
          </p>

          <div className="flex-shrink-0">
            <button
              className="flex items-center gap-2 text-white px-6 py-3 rounded-full hover:bg-primary-dark transition"
              style={{ backgroundColor: "#0a192c" }}
            >
              Get Started <FaArrowRightLong />
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative bg-[#f6f9fc] rounded-3xl p-2">
          <img
            src="/Softwarecodetesting.gif"
            alt="Solutions GIF"
            className="w-full max-w-md mx-auto z-10 relative scale-125"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
