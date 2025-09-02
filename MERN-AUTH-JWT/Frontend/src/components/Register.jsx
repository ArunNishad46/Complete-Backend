import { useState } from "react";
import {register} from "../api/authServices";
import { useNavigate, Link } from "react-router-dom";

const Register = ({setAccessToken}) => {
  const [formData, setFormData] = useState({
    username: "",
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
      const response = await register(formData);
      localStorage.setItem('accessToken', response.data.accessToken)
      setAccessToken(response.data.accessToken)
      navigate("/profile");
    } catch (error) {
      console.error(error.response.data.message || "Registration failed");
    }
  };

  return (
    <div className="flex flex-col bg-gray-200 h-115 w-90 rounded-2xl">
      <h2 className="text-cyan-500 text-2xl font-bold text-center mt-4">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8 px-6">
        <div className="flex flex-col">
          <label htmlFor="username" className="font-semibold">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className="bg-white border border-gray-300 p-2 outline-none rounded focus:border-cyan-500"
          />
        </div>
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
        <button type="submit" className="bg-cyan-500 text-white p-2 rounded mt-2 cursor-pointer">Register</button>
      </form>
      <p  className="text-center mt-8">
        Already have an account? <Link to="/login" className="text-cyan-500 underline">Login</Link>
      </p>
    </div>
  );
};

export default Register;