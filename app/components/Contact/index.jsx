"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Lottie from "lottie-react";
import contactAnimation from "../animations/Contact us.json"; // Downloaded Lottie JSON file

const ContactSection = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      subject: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Form Data:", values);
      // handle submit logic (e.g. API call)
    },
  });

  return (
    <section className="bg-white py-20 px-6 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 relative z-10">
        {/* Image Side */}
        <div className="relative">
          <Lottie animationData={contactAnimation} loop={true} className="w-full h-auto max-w-md scale-135" />
        </div>

        {/* Form Side */}
        <div>
          <p className="text-[#593ffb] font-medium uppercase text-sm mb-2">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
            Let’s Collaborate Now!
          </h2>

          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-primary-dark mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Input Your Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                className="w-full p-3 border border-gray-200 rounded-lg bg-blue-light-0 focus:outline-none focus:ring-2 focus:ring-blue-light-3"
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <p className="text-sm text-red-500 mt-1">{formik.errors.fullName}</p>
              )}
            </div>

            {/* Email & Subject */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-primary-dark mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Input Your Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="w-full p-3 border border-gray-200 rounded-lg bg-blue-light-0 focus:outline-none focus:ring-2 focus:ring-blue-light-3"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-sm text-red-500 mt-1">{formik.errors.email}</p>
                )}
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-primary-dark mb-1">
                  Subject
                </label>
                <select
                  name="subject"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                  className="w-full p-3 border border-gray-200 rounded-lg bg-blue-light-0 focus:outline-none focus:ring-2 focus:ring-blue-light-3"
                >
                  <option value="">Select Subject</option>
                  <option value="project">Project Inquiry</option>
                  <option value="support">Support Request</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
                {formik.touched.subject && formik.errors.subject && (
                  <p className="text-sm text-red-500 mt-1">{formik.errors.subject}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-primary-dark mb-1">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                placeholder="Write Message..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="w-full p-3 border border-gray-200 rounded-lg bg-blue-light-0 resize-none focus:outline-none focus:ring-2 focus:ring-blue-light-3"
              ></textarea>
              {formik.touched.message && formik.errors.message && (
                <p className="text-sm text-red-500 mt-1">{formik.errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-4 bg-blue-light-3 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-primary-dark transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
