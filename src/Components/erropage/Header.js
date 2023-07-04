import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <main className="">
      <header className="container justify-center mx-auto sm:flex sm:justify-between">
        <div className="max-w-[475px]">
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
      <div className="my-auto container mx-auto pt-[100px] h-full">
        <div className="flex justify-center w-full h-full ">
          <div className="">
            <div>
              <h1 className="text-[55px] text-black font-black">
                404 Not Found
              </h1>
            </div>
            <div>
              <p className="text-center text-sm text-[#A5A29A] ">
                Sorry, we can’t find that page.
              </p>
            </div>
            <div>
              <p className="text-center text-[#A5A29A] text-sm py-6">
                Back to Home Page
              </p>
              <div className="my-4 footer">
                <p className="text-center text- [#1F1F1F] text-[12px]">
                  © 2023 Ztep Up
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
