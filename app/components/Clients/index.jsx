"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { logos } from "../../constants/Clients";

const Clients = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f9fafb] to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-3xl font-extrabold text-primary-dark mb-12">
          Trusted by Our Clients
        </h3>

        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
          className="space-x-10"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-6 transition-all duration-300 grayscale opacity-60 hover:grayscale-0 hover:opacity-100"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-24 w-40 object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Clients;
