import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialSection = () => {
  return (
    <section className="relative bg-white overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Map */}
      <img
        src="/map-dots.png"
        alt="World Map"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30 z-0 max-w-none w-[1400px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Heading */}
        <div className="mb-16">
          <p className="text-[#593ffb] font-medium uppercase text-sm mb-2">
            Testimonial
          </p>
          <h2 className="text-4xl font-bold text-primary-dark">
            What Our <br /> Customer’s Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-xl ml-auto bg-white hover:bg-[#f0f4ff] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#c9d8f5] shadow-xl p-8 rounded-2xl relative">
          <FaQuoteLeft className="text-pink-500 text-3xl mb-4" />
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            I really like the team for example, a relationship-focused
            performance expectation might be that the employee sustain
            collegial working relationships with her peers, subordinates and
            customers.
          </p>

          <div className="flex items-center gap-4">
            <img
              src="/clientsLogos/Jyotin Gambhir.jpeg"
              alt="Jyotin Ghambhir"
              className="w-15 h-15 rounded-full"
            />
            <span className="font-semibold text-primary-dark">
              Jyotin Ghambhir
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
