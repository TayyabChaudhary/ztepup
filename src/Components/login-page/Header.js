import React from "react";
import Image from "next/image";

//  @import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');

export default function Header() {
  return (
    <main className="">
      <header className="container justify-center mx-auto sm:flex sm:justify-between">
        <div className="">
          <Image
            className="px-4 py-4 "
            src="/assets/images/button.png"
            width={475}
            height={239}
            alt=""
          />
        </div>
        <div className="flex">
          <button className="px-4 text-base heading-h">Sign in</button>
          <button className="bg-black w-[143px] h-[36px] text-white text-base mt-6 rounded-md mx-2">
            Start Selling
          </button>
        </div>
      </header>
      <div className="container flex justify-center pt-10">
        <div className="flex justify-center  bg-[#FFFFFF] rounded-xl w-[678px] h-[660px]">
          <div className="">
            <div>
              <h1 className="text-black tracking-wider text-3xl font-bold text-center mt-[80px]">
                Sign In
              </h1>
            </div>
            <main className="flex justify-center my-8 form">
              <div className="">
                <button className="flex items-center w-full px-3 text-sm border border-gray-200 border-solid rounded-lg">
                  <Image
                    className="px-2 "
                    src="/assets/images/google.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                  <p className="py-2 text-sm tracking-wider"> Sign in with Google</p>
                </button>
              </div>
              <div className="flex   h-[36px] px-6">
                <button className="flex items-center w-full px-3 text-sm border border-gray-200 border-solid rounded-lg">
                  <Image
                    className="px-2 "
                    src="/assets/images/apple.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                  <p className="py-2 tracking-wider"> Sign in with apple</p>
                </button>
              </div>
            </main>
            <main className="flex justify-center my-4">
              <div className="flex justify-center">
                <div className="w-[100px] h-[2px] bg-gray-300"></div>
              </div>
              <div className="">
                <p className="text-[#A5A29A] px-4 tracking-wider">Or with Email</p>
              </div>
              <div className="flex justify-center ">
                <div className="w-[100px] h-[2px] bg-gray-300"></div>
              </div>
            </main>
            <main className="form">
              <div className="flex justify-center w-full group">
                <input
                  type="tel"
                  name="floating_company"
                  id="floating_company"
                  className="w-[388px] outline-none text-sm h-[40px] border-[1px] border-gray-200 px-4 focus: no-underline my-4 rounded-lg"
                  placeholder="Email "
                  required
                />
              </div>
              <div className="flex justify-center w-full">
                <input
                  type="tel"
                  name="floating_company"
                  id="floating_company"
                  className="w-[388px] outline-none text-sm h-[40px] border-[1px] border-gray-200 px-4 focus: no-underline my-4 rounded-lg"
                  placeholder="Password "
                  required
                />
              </div>
              <div className="w-[420px] mb-6 flex justify-end">
                <h1 className="text-[#A5A29A] text-sm tracking-wider font-medium">Forgot Password</h1>
              </div>
              <div className="flex justify-center button">
                <div className=" bg-black w-[388px] flex justify-center rounded-lg">
                  <button className=" text-white font-black py-[10px] tracking-wider  text-base">
                    Sign In
                  </button>
                </div>
              </div>
              <div className="flex justify-center my-2">
                <p className="text-[#A5A29A] tracking-wider text-sm">
                  Not a Member yet?{" "}
                  <a href="signup">
                    <span className="text-sm font-bold text-black">
                      Sign up{" "}
                    </span>
                  </a>
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </main>
  );
}
