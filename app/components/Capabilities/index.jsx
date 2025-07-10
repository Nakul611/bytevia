import React from "react";
import { services } from "../../constants/Services";

const CapabilitiesSection = () => {
  return (
    <section className="min-h-[45vh] py-20 px-6 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 items-start">
        {/* Left Side Text */}
        <div className="col-span-1">
          <p className="text-sm text-[#593ffb] uppercase tracking-wide mb-3">
            Services
          </p>
          <h2 className="text-3xl font-bold text-primary-dark mb-4 leading-snug">
            Our Capabilities
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            We will bring the breath of our experience and industry knowledge to
            help you succeed.
          </p>

          {/* Decorative Arrow */}
          <div className=" ml-45 mt-10">
            <img src="/scribble.png" alt="Arrow" className="w-20 opacity-60" />
          </div>
        </div>

        {/* Cards */}
        <div className="col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white hover:bg-[#f0f4ff] hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-transparent hover:border-[#c9d8f5]"
              >
                <div className="mb-4 text-4xl">{service.icon}</div>
                <h4 className="font-semibold text-lg text-primary-dark mb-4">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
