import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Cloud, Brain, Smartphone, Layout, PenTool, Database, Server } from 'lucide-react';
import Button from '../components/Button';
import web from '../assets/web2.png';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "Custom Web & Mobile Development",
      icon: Smartphone,
      img: web,
      description: "We build high-performance web and mobile applications that offer seamless user experiences.",
      features: ["React & Next.js Web Apps", "iOS & Android (Flutter/React Native)", "Progressive Web Apps (PWA)", "API Integration & Development"]
    },
    {
      title: "Cloud & DevOps Solutions",
      icon: Cloud,
      img: web,
      description: "Scalable infrastructure management to ensure your applications are always up and running securely.",
      features: ["AWS / Azure / GCP Architecture", "CI/CD Pipeline Automation", "Docker & Kubernetes", "Serverless Computing"]
    },
    {
      title: "AI-ML & Data Engineering",
      icon: Brain,
      img: web,
      description: "Leverage the power of Artificial Intelligence to automate processes and gain actionable insights.",
      features: ["Predictive Analytics", "Natural Language Processing (NLP)", "Computer Vision Models", "Data Visualization Dashboards"]
    },
    {
      title: "Product Design (UI/UX)",
      icon: PenTool,
      img: web,
      description: "User-centric design that converts visitors into loyal customers through intuitive interfaces.",
      features: ["User Research & Personas", "Wireframing & Prototyping", "Design Systems", "Usability Testing"]
    }
  ];

  return (
    <div className="bg-brand-bg">
      <div className="py-20 container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">Our Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive technology services tailored to modern business needs. We handle the heavy lifting so you can focus on growth.
          </p>
        </div>

        <div className="space-y-12">
          {serviceCategories.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-3xl overflow-hidden shadow-lg`}
            >
              <div className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-brand-orange mb-6">
                  <service.icon size={32} />
                </div>
                <h2 className="text-3xl font-bold text-brand-dark mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-8 text-lg">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button variant="outline">Lets Build This</Button>
                </Link>
              </div>
              <div className="md:w-1/2 bg-gray-100 relative min-h-[300px]">
                 <img 
                  src={service.img} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-brand-dark rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need something specific?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We love tackling unique challenges. If you have a custom requirement that doesn't fit into a box, let's talk about it.
          </p>
          <Link to="/contact">
            <Button variant="primary">Contact Our Team</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;