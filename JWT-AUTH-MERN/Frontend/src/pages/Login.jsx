import { useContext, useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { setAccessToken } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/login", formData);
      setAccessToken(response.data.accessToken);
      navigate("/profile");
    } catch (error) {
      console.error(error.response.data.message || "Login failed");
    }
  };

  return (
    <div className="flex flex-col bg-gray-200 h-96 w-80 rounded-2xl">
      <h2 className="text-cyan-500 text-2xl font-bold text-center mt-4">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8 px-6">
        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white border border-gray-300 p-2 outline-none rounded focus:border-cyan-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="font-semibold">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="bg-white border border-gray-300 p-2 outline-none rounded focus:border-cyan-500"
          />
        </div>
        <button type="submit" className="bg-cyan-500 text-white p-2 rounded mt-2 cursor-pointer">Login</button>
      </form>
      <div className="flex justify-center mt-4">
        <p className="text-center mt-4">Don't have an account? <Link to="/register" className="text-cyan-500 underline">Register</Link></p>
      </div>
    </div>
  );
}

export default Login;