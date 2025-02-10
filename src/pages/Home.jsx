import { Link } from "react-router-dom";
import { useState } from "react";
import image1 from "../../public/images/image5.jpg";
import image2 from "../../public/images/image2.jpg";
import image3 from "../../public/images/image3.jpg";
import image4 from "../../public/images/image4.jpg";
import image5 from "../../public/images/image5.jpg";

const professionals = [
  { id: 1, name: "Rahul Sharma", role: "Electrician", rating: 5, image: image1, reviews: "24/5 Customer Reviews" },
  { id: 2, name: "Rakesh Singh", role: "Carpenter", rating: 5, image: image2, reviews: "24/5 Customer Reviews" },
  { id: 3, name: "Kailash Mehra", role: "Painter", rating: 5, image: image3, reviews: "24/5 Customer Reviews" },
  { id: 4, name: "Ram Naresh", role: "Designer", rating: 5, image: image4, reviews: "24/5 Customer Reviews" },
  { id: 5, name: "Vivek Lodha", role: "Plumber", rating: 5, image: image5, reviews: "24/5 Customer Reviews" },
  { id: 6, name: "Bhupesh Meghwal", role: "Electrician", rating: 5, image: image2, reviews: "24/5 Customer Reviews" },
];

const testimonials = [
  { id: 1, name: "Anjal Verma", review: "The electrician was fast and very professional. Highly recommend!", image: image1 },
  { id: 2, name: "Sunil Kumar", review: "Great service! The carpenter did an amazing job with my furniture.", image: image2 },
  { id: 3, name: "Priyansh Singh", review: "Very satisfied with the painting work. It transformed my house!", image: image3 },
  { id: 4, name: "Ravi Mehta", review: "The designer was very creative and understood my needs perfectly.", image: image4 },
];

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProfessionals = selectedCategory === "All" 
    ? professionals 
    : professionals.filter(pro => pro.role === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Professional Gigs</h1>

      {/* Category Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {["All", "Electrician", "Carpenter", "Painter", "Designer"].map((category) => (
          <button 
            key={category}
            className={`px-4 py-2 rounded ${selectedCategory === category ? "bg-pink-50 text-black" : "bg-gray-200 text-gray-800"}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Professionals Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProfessionals.map((pro) => (
          <Link key={pro.id} to={`/professional/${pro.id}`} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Image Section */}
            <div className="w-full h-64">
              <img 
                src={pro.image || "/placeholder.svg"} 
                alt={pro.name} 
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Card Content */}
            <div className="p-4">
              <h3 className="text-xl font-semibold">{pro.name}</h3>
              <p className="text-gray-600">{pro.role}</p>
              <div className="flex items-center mt-2">
                {[...Array(pro.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-1">{pro.reviews}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-12 text-center">
        <button className="bg-pink-100 text-black px-6 py-2 rounded-full hover:bg-pink-200">
          View More
        </button>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="text-4xl mb-2">🏆</div>
          <h3 className="text-xl font-semibold mb-2">High Quality</h3>
          <p className="text-gray-600">Services Crafted with Excellence</p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-2">✅</div>
          <h3 className="text-xl font-semibold mb-2">Assured Service</h3>
          <p className="text-gray-600">Skilled Gigs serve with Excellence</p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-2">⏰</div>
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600">Dedicated support</p>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md max-w-sm">
              <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center">{testimonial.name}</h3>
              <p className="text-gray-600 text-center mt-2">"{testimonial.review}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe To Our Newsletter</h2>
        <p className="text-gray-600 mb-6">Stay updated with our latest services and offers</p>
        <div className="flex justify-center">
          <input type="email" placeholder="example@gmail.com" className="px-4 py-2 border rounded-l-md w-64" />
          <button className="bg-red-400 text-black px-4 py-2 rounded-r-md hover:bg-black-600">Subscribe Now</button>
        </div>
      </div>

      {/* Go to Dashboard Button */}
      {/* <div className="mt-12 text-center">
        <Link to="/dashboard">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
            Go to Dashboard
          </button>
        </Link>
      </div> */}
    </div>
  );
}

export default Home;
