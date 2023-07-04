import React from "react";
import Image from "next/image";

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
          <button className="px-4 text-[20px] heading-h">Sign in</button>
          <button className="bg-black w-[143px] h-[36px] text-white text-[20px] mt-6 rounded-md mx-2">
            Start Selling
          </button>
        </div>
      </header>
      <div className="container flex justify-center">
        <div className="flex justify-center  bg-[#FFFFFF] w-[678px] h-[660px]">
          <div className="">
            <div className="flex justify-center pt-[90px]">
              <Image
                className="px-2 "
                src="/assets/images/mobile.svg"
                width={80}
                height={80}
                alt=""
              />
            </div>
            <main className="flex justify-center my-4 form">
              <div className="">
                <h1 className="text-black text-[35px] font-bold">
                  Two Step Verification
                </h1>
                <p className="text-sm font-400 text-[#A5A29A] text-center">
                  Enter the verification code we sent to
                </p>
              </div>
            </main>
            <main className="flex justify-center my-4">
              <h1 className="text-base font-bold text-black">******7896</h1>
            </main>
            <main className="form">
              <div className="my-2 para">
                <p className="text-sm font-bold text-center text-black">
                  Type your 6 digit security code
                </p>
              </div>
              {/* check */}
              <main className="flex justify-center gap-4 my-6">
                <input
                  className="text-sm text-center border border-gray-300 border-solid rounded-lg outline-none input"
                  id="input1"
                  type="text"
                  maxLength="1"
                />
                <input
                  className="text-sm text-center border border-gray-300 border-solid rounded-lg outline-none input"
                  id="input1"
                  type="text"
                  maxLength="1"
                />
                <input
                  className="text-sm text-center border border-gray-300 border-solid rounded-lg outline-none input"
                  id="input1"
                  type="text"
                  maxLength="1"
                />
                <input
                  className="text-sm text-center border border-gray-300 border-solid rounded-lg outline-none input"
                  id="input1"
                  type="text"
                  maxLength="1"
                />
                <input
                  className="text-sm text-center border border-gray-300 border-solid rounded-lg outline-none input"
                  id="input1"
                  type="text"
                  maxLength="1"
                />
                <input
                  className="text-sm text-center border border-gray-300 border-solid rounded-lg outline-none input"
                  id="input1"
                  type="text"
                  maxLength="1"
                />
              </main>
              {/* check */}

              <div className="flex justify-center button">
                <a href="setuppassword">
                  <div className=" bg-black w-[388px] flex justify-center rounded-lg">
                    <button className=" text-white font-black py-[10px]  text-base">
                      Submit
                    </button>
                  </div>
                </a>
              </div>
              <div className="flex justify-center my-2">
                <p className="text-[#A5A29A] text-sm">
                  Didn’t get the code ?{" "}
                  <a href="signup">
                    <span className="text-[#1984C6] font-bold text-sm">
                      Resend
                      <span className="text-sm px-1 text-[#A5A29A]">or</span>{" "}
                      Call Us
                    </span>
                  </a>
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="my-4 footer">
        <p className="text-center text- [#1F1F1F] text-[12px]">
          © 2023 Ztep Up
        </p>
      </div>
    </main>
  );
}
