import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiMail, FiLock } from "react-icons/fi"

function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simulated authentication (Replace with API call)
    if (email === "test@example.com" && password === "password123") {
      alert("Login successful!")
      navigate("/dashboard") // Redirect to Dashboard after login
    } else {
      alert("Invalid email or password. Try again.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Sign In to <span className="text-blue-600">E-UNI</span></h2>
          <p className="mt-2 text-gray-500 text-sm">Enter your credentials to access your account</p>
        </div>

        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <div className="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                <FiMail className="w-5 h-5 text-gray-400 ml-3" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 block w-full px-4 py-2 border-none focus:ring-0 focus:outline-none rounded-r-lg"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                <FiLock className="w-5 h-5 text-gray-400 ml-3" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="flex-1 block w-full px-4 py-2 border-none focus:ring-0 focus:outline-none rounded-r-lg"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <label className="ml-2 text-sm text-gray-600">Remember me</label>
            </div>
            <div>
              <Link to="/forgot-password" className="text-sm font-medium text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-md text-sm font-semibold"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="font-medium text-blue-600 hover:underline">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn
