import Clients from '../../components/Clients';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import CapabilitiesSection from '../../components/Capabilities';
import React from 'react';
import TestimonialSection from '../../components/Testimonials';
import ContactSection from '@/app/components/Contact';
import Footer from '@/app/components/Footer';

const Dashboard = () => {
  return (
    <div className="min-h-screen text-primary-dark">
      <Navbar />
      <Hero />
      <Clients />
      <CapabilitiesSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Dashboard;
