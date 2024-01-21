import React from "react";
import "./Landing.css";
import Currency from "../images/Currency-bro.png";

import { Link } from "react-router-dom";
import Navbar from "../atoms/Navbar";

export default function Landing() {
  return (
    <div className="bg-white">
      <Navbar />
      <div class="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
        <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
          <div class="text-left">
            <h2 class="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
              Currency
              <span class="font-bold text-blue-500">Exchange</span>
              <span class="text-xl font-semibold rounded-full text-blueGray-500">
                2.0
              </span>
            </h2>
            <p class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Welcome to your currency Exchange App, <br />
              You may be entitle to a compensation of <br />
              up to 600$ by the company.
            </p>
            <div class="mt-5 sm:flex md:mt-8">
              <div class="rounded-md shadow">
                <Link
                  to="/register"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
                >
                  Getting Started
                </Link>
              </div>
              <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="/currency"
                  class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-blue-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
                >
                  Contribute
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
          <div class="relative w-full p-3 rounded  md:p-8">
            <div class="rounded-lg bg-white text-black w-full">
              <img src={Currency} alt="landing_hero" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black w-full"></div>
    </div>
  );
}
