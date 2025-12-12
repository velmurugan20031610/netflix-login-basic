import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://netflix-login-project.onrender.com/login",
        { email, password },
        { timeout: 15000 }
      );

      setLoading(false);

      if (response.data.success) {
        window.location.href = "/dashboard";
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      setLoading(false);
      setError("Server waking up... Try again.");
    }
  };

  return (
    <div className="relative w-full h-screen bg-black text-white">
      {/* Background Image */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/231dfd42-b5c7-4b37-91e1-1c4c8590b47e/web/en-IN/life-cycle-bg.jpg"
        className="w-full h-full object-cover opacity-40"
        alt="bg"
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Netflix Logo */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        className="absolute top-5 left-5 w-32"
      />

      {/* Login Box */}
      <div className="absolute inset-0 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-black/70 p-10 w-96 rounded-lg shadow-xl"
        >
          <h1 className="text-3xl font-bold mb-6">Sign In</h1>

          {error && (
            <p className="bg-red-600 text-white p-2 rounded mb-3 text-sm">
              {error}
            </p>
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-3 rounded bg-gray-800 focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-3 rounded bg-gray-800 focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-red-600 p-3 rounded mt-3 hover:bg-red-700 transition"
            disabled={loading}
          >
            {loading ? "Processing..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
