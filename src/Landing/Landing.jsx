import React from "react";
import "./Landing.css";

import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="bg-white">
      <div className="flex justify-around h-[60px] shadow-xl items-center px-8">
        <div>
          <h1 className=" text-[25px] font-bold">LOGO</h1>
        </div>
        <div className="flex justify-between gap-10  ">
          <ul className="text-[17px] font-bold flex flex-row gap-8">
            <a
              href="/home"
              className="hover:underline hover:text-black hover:text-bold"
            >
              Home
            </a>
            <a
              href="/about"
              className="hover:underline hover:text-black hover:text-bold"
            >
              About us
            </a>
            <a
              href="/our program"
              className="hover:underline hover:text-black hover:text-bold"
            >
              Our Program
            </a>
            <a
              href="/contact"
              className="hover:underline hover:text-black hover:text-bold"
            >
              contact us
            </a>
          </ul>
          <div className="flex flex-row gap-4">
            <button className="hover:bg-black hover:text-white">Login</button>
            <button className="hover:bg-black hover:text-white">
              Free Demo
            </button>
          </div>
        </div>
      </div>

      <div className="">
        <div>
          <h1>
            CURRENCY <br /> EXCHANGE
          </h1>
          <p>
            Welcome to your currency Exchange App, <br />
            Trust get
          </p>
          <h2> dwdws</h2>
        </div>
        <button type="button">
          <Link to="/currency" className="home__link">
            Get Started
          </Link>
        </button>
      </div>
      <div>
        <img src="" alt="landing_pag_image " />
      </div>
    </div>
  );
}
