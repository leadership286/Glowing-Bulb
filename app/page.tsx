"use client"
import { useState } from "react";
import Image from "next/image";

export default function Bulb() {
  const [isOnYellow, setIsOnYellow] = useState(false);

  const handleClick = () => {
    setIsOnYellow(!isOnYellow);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-gradient-to-b from-gray-800 via-gray-900 to-black animate-fade-in transition-all duration-500">
      <div className="border-4 border-pink-500 rounded-xl p-4 mb-12 ">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-600 ">
          Glowing Bulb Effect
        </h1>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="relative w-80 h-80">
          <Image
            src={isOnYellow ? "/glow1.png" : "/off1.png"}
            alt="Yellow Bulb"
            width={320}
            height={320}
            className={`transition-all duration-300 ${isOnYellow ? 'animate-glow' : ''}`}
          />
        </div>
        <button
          onClick={handleClick}
          className="mt-5 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-lg font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 hover:from-orange-500 hover:to-yellow-400 hover:shadow-[0px_0px_20px_5px_rgba(255,200,0,0.8)]"
        >
          {isOnYellow ? "Turn Off Bulb" : "Turn On Bulb"}
        </button>
        <p className="mt-3 text-white text-xl font-semibold transition-opacity duration-500 ${isOnYellow ? 'opacity-100' : 'opacity-50'}">
          {isOnYellow ? "Bulb is ON" : "Bulb is OFF"}
        </p>
      </div>

      <footer className="mt-12 text-white text-lg font-semibold animate-fade-in">Created by Rimsha Ansari, Daughter of Ayaz Ansari</footer>
    </div>
  );
}
