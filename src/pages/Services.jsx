import React from "react";

function Services() {
  const services = [
    {
      title: "Electrical Services",
      description:
        "Professional electrical services for installations, repairs, and troubleshooting. Whether it’s wiring, circuit breakers, lighting, or outlet issues, our expert electricians ensure your home and office are safe and fully powered.",
    },
    {
      title: "Carpenter Services",
      description:
        "Skilled carpentry for custom furniture, repairs, cabinetry, and woodwork. Our experienced carpenters craft quality solutions for your residential or commercial spaces, from shelves to full-room designs.",
    },
    {
      title: "Plumber Services",
      description:
        "Fast and reliable plumbing solutions for leaks, clogged drains, pipe installations, and more. Our licensed plumbers provide efficient fixes to keep your plumbing system running smoothly, with a focus on long-term reliability.",
    },
    {
      title: "Painter Services",
      description:
        "High-quality painting services for interiors and exteriors. From touch-ups to full home or office repaints, our professional painters ensure clean, vibrant finishes that enhance your property’s appearance and durability.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
