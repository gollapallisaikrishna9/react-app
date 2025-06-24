import React, { useState } from "react";
import NavbarSection from "./NavbarSection";
import { CupCake } from "../../svgs/CupCake";

export default function LoginPage({ id }) {
  return (
    <section id={id}>
      <section>
        <div className="bg-contain bg-center bg-[url('/src/assets/outer-bakery.jpg')]">
          <div className=" grid place-items-center h-screen ">
            <div className="border-2 h-3/4 w-3/4 rounded-2xl shadow-2xl bg-cover bg-[center_top] md:bg-center bg-[url('/src/assets/inner-bakery.jpg')]">
              <div className="w-1/3 border-4 p-5 m-20 bg-white rounded-xl">
                <p>Welcome to Krishna's Bakery</p>
                <div className="lg:w-1/3  bg-BgColor flex flex-col md:ml-auto w-full  md:mt-0">
                  <div className="relative mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <input
                      type="text"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>

                  <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Sign up
                  </button>
                  <p className="text-xs text-TextLight mt-3">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 font-semibold">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
