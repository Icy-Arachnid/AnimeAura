"use client";

import { useState } from "react";
import { FaArrowRight, FaDragon, FaUser, FaYinYang } from "react-icons/fa";

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    onLogin(username, password);
  };

  return (
    <div className="h-screen bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: 'url(/path/to/your/oriental-background.jpg)' }}>
      {/* Oriental Patterns */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-60"></div>
        <div className="absolute top-0 left-0 w-24 h-24 border-t-8 border-l-8 border-red-600"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-8 border-r-8 border-red-600"></div>
      </div>

      <div className="bg-gray-900 bg-opacity-80 p-12 rounded-2xl shadow-2xl border border-gray-700 relative z-20 transform transition duration-700 hover:scale-105 hover:bg-opacity-90">
        
      <div className="bg-opacity-80 p-15 rounded-2xl shadow-2xl border border-gray-700 z-20 transform transition duration-100 hover:scale-10 hover:bg-opacity-90">
      <h1 className="text-4xl font-extrabold text-center text-blue-800  tracking-widest drop-shadow-lg flex items-center justify-center">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />⠀<p className="">AnimeAura</p>
      </h1>
      </div>

      <br></br>

        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8 tracking-widest drop-shadow-lg flex items-center justify-center">
           Iniciar Sesión
        </h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-4 mb-6 border-none rounded-lg text-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-red-600 shadow-inner text-center"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 mb-8 border-none rounded-lg text-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-red-600 shadow-inner text-center"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-red-700 via-red-800 to-red-900 text-white py-3 rounded-full font-bold text-2xl hover:bg-gradient-to-l transition duration-500 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center">
          <FaArrowRight className="mr-2 animate-spin-slow" /> Logear
        </button>
      </div>
    </div>
  );
};

export default Login;
