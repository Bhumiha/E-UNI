import React from "react";

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8">
        We are a <strong>business-to-business</strong> platform dedicated to providing a
        wide range of services at <strong>affordable prices</strong>. Our goal is to ensure
        safety and reliability while connecting professionals with those who need
        their services.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Affordable Services</h3>
          <p className="text-gray-600">We offer high-quality services at competitive prices, making them accessible to everyone.</p>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Safety & Reliability</h3>
          <p className="text-gray-600">Your safety is our priority. We ensure that all professionals meet high standards.</p>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">For the People</h3>
          <p className="text-gray-600">We are committed to making services more accessible and convenient for everyone.</p>
        </div>
      </div>

      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Whether you need an electrician, plumber, carpenter, or any other service, we are here to connect
          you with trusted professionals. Our mission is to make service booking hassle-free, ensuring the
          best experience for both businesses and individuals.
        </p>
      </div>
    </div>
  );
}

export default About;
