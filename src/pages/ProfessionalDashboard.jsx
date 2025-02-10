import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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

function Dashboard() {
  const { id } = useParams();
  const [professional, setProfessional] = useState(null);

  // Find the professional by id
  useEffect(() => {
    const pro = professionals.find((pro) => pro.id === parseInt(id));
    setProfessional(pro);
  }, [id]);

  const handleCallClick = () => {
    alert("Calling functionality coming soon!");
  };

  const handlePaymentClick = () => {
    alert("Payment functionality coming soon!");
  };

  if (!professional) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl">Professional not found</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-4">
        {/* Back Button */}
        <Link to="/" className="text-pink-50 font-semibold hover:underline">
          &lt; Back to Home
        </Link>
      </div>

      <div className="flex flex-col md:flex-row mt-8 bg-white rounded-lg shadow-lg overflow-hidden">

        {/* Professional Image */}
        <div className="w-full md:w-1/3 p-4 flex justify-center items-center">

          <img
            src={professional.image || "/placeholder.svg"}
            alt={professional.name}
            className="w-72 h-80 " 
          />
        </div>

        {/* Professional Details */}
        <div className="md:ml-8 w-full md:w-2/3 p-6 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-semibold text-center">{professional.name}</h2>
          <p className="text-xl text-gray-700 mt-2 text-center">{professional.role}</p>
          <div className="flex items-center mt-4 justify-center">
            {[...Array(professional.rating)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">{professional.reviews}</p>

          {/* Contact Info */}
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="mt-2">Phone: <span className="font-medium">+91 123 456 7890</span></p>
            <p className="mt-2">Email: <span className="font-medium">example@example.com</span></p>
          </div>

          {/* Call Button */}
          <div className="mt-8 text-center">
            <button
              onClick={handleCallClick}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
            >
              Call Now
            </button>
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Make Payment</h3>
        <p className="text-gray-700 mb-4">You can now make payment for the services rendered. Please select your payment method below:</p>
        
        {/* Payment Options */}
        <div className="flex space-x-4 justify-center">
          <button
            onClick={handlePaymentClick}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Pay via Credit Card
          </button>
          <button
            onClick={handlePaymentClick}
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out"
          >
            Pay via PayPal
          </button>
          <button
            onClick={handlePaymentClick}
            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out"
          >
            Pay via Cash
          </button>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>
        <div className="space-y-4">
          {/* Sample Customer Review */}
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <p className="text-sm text-gray-600">"The electrician was fast and very professional. Highly recommend!"</p>
            <p className="font-semibold text-gray-800 mt-2">Anjali Verma</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <p className="text-sm text-gray-600">"Great service! The carpenter did an amazing job with my furniture."</p>
            <p className="font-semibold text-gray-800 mt-2">Sunil Kumar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
