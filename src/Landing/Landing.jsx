import React from "react";
import "./Landing.css";
import Hero from "../images/hero.png";

import { Link } from "react-router-dom";
import Navbar from "../atoms/Navbar";

export default function Landing() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="flex flex-row items-center justify-around pt-[100px]">
        <div className="flex flex-col gap-5 pt-10">
          <h1 className="font-extrabold text-[70px] text-gray-600 leading-[1]">
            CURRENCY <br /> EXCHANGE
          </h1>
          <p className="text-[20px] text-gray-800">
            Welcome to your currency Exchange App, <br />
            You may be entitle to a compensation of <br />
            up to 600$ by the company.
          </p>
          <h2 className="text-[17px]">You are at the right place</h2>
          <button
            type="button"
            className="bg-slate-600 font-bold text-[25px] text-white hover:text-black hover:bg-slate-300"
          >
            <Link to="/currency" className="home__link">
              Get Started
            </Link>
          </button>
        </div>

        <div>
          <img src={Hero} alt="landing_page_image" className="w-[400px]" />
        </div>
      </div>
      <div className="bg-black w-full h-[50px] mt-[100px]">

      </div>
    </div>
  );
}
