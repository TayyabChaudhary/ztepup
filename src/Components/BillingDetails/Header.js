import React from "react";
import Image from "next/image";
import { Select } from "antd";
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
      <div className="flex max-w-[1580px] mx-auto justify-center">
        <div className="flex justify-center  bg-[#FFFFFF] w-[678px] h-[710px]">
          <div className="">
            <div>
              <h1 className="text-black text-[35px] font-bold text-center mt-[80px]">
                Billing Details
              </h1>
            </div>
            <div className="">
              <p className="text-sm text-center text-[#A5A29A]">
                If you need more info, please check out
                <span className="text-[#1984C6] ">Help Page.</span>{" "}
              </p>
            </div>

            <main className="pt-6 form">
              <div>
                <label className="text-sm font-bold">Name On Card</label>
              </div>
              <div className="flex w-full group">
                <input
                  type="tel"
                  name="floating_company"
                  id="floating_company"
                  className="w-[388px] h-[40px] border-[1px] border-gray-200 mt-3 outline-none text-sm px-4 focus: no-underline mb-4 rounded-lg"
                  placeholder=" "
                  required
                />
              </div>
              <div className="pt-4">
                <label className="text-sm font-bold ">Card Number</label>
              </div>
              <div className="flex w-full">
                <input
                  type="tel"
                  name="floating_company"
                  id="floating_company"
                  className="w-[388px] h-[40px] border-[1px] border-gray-200 mt-3 px-4 outline-none text-sm focus: no-underline  mb-2 rounded-lg"
                  placeholder=""
                  required
                />
              </div>

              <div className="flex px-2 py-4">
                <div className="form-group m" id="expiration-date">
                  <label className="mb-2 text-sm font-bold">Expiration Date</label>
                  <br></br>
                  <Select
                    defaultValue="month"
                    className="mt-3"
                    style={{
                      width: 120,
                    }}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "month",
                        label: "Month",
                      },
                      {
                        value: "Yiminghe",
                        label: "yiminghe",
                      },
                      {
                        value: "disabled",
                        label: "Disabled",
                      },
                    ]}
                  />
              <Select
                    defaultValue="select"
                    className="mt-3 ml-2"
                    style={{
                      width: 120,
                    }}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "select",
                        label: "Select",
                      },
                      {
                        value: "Yiminghe",
                        label: "yiminghe",
                      },
                      {
                        value: "disabled",
                        label: "Disabled",
                      },
                    ]}
                  />
                </div>

                <div className="form-group CVV ">
                  <label className="text-sm font-bold " for="cvv">
                    CVV
                  </label>
                  <br></br>
                  <input
                    className="border-[1px] mt-3 border-gray-300 ml-3 px-3 text-sm w-[140px] h-[32px] outline-none rounded-[8px]"
                    type="text"
                    className="form-control"
                    placeholder="CVV"
                    id="cvv"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <div className="">
                  <p className="text-sm text-[#1F1F1F]">
                    Save Card for further billing?
                  </p>
                </div>
                <div className="flex gap-2">
                  <div>
                    <p className="text-sm text-[#A5A29A]">Save Card</p>
                  </div>
                  {/* toggle */}
                  <div className="">
                    <div className="">
                      <input type="checkbox" id="switch" className="checkbox" />
                      <label for="switch" className="toggle">
                        {/* <p>OFF    ON</p>  */}
                      </label>
                    </div>
                  </div>
                  {/* end */}
                </div>
              </div>
              <div>
                <p className="text-sm text-[#A5A29A]">
                  If you need more info, please check budget planning.
                </p>
              </div>

              <div className="">
                <div className="flex gap-4 my-6">
                  <div>
                    <a href="accountinof">
                      <button className="bg-[#EEEEED] w-[186px] flex justify-center items-center py-2 rounded-lg">
                        <Image
                          className="my-2 "
                          src="/assets/images/arrow-left.svg"
                          width={20}
                          height={20}
                          alt=""
                        />
                        <p className="text-[20px] px-2 font-bold">Previous</p>
                      </button>
                    </a>
                  </div>
                  <div>
                    <a href="forgotpassword">
                      <button className="bg-[#1F1F1F] w-[186px] flex justify-center items-center py-2 rounded-lg">
                        <p className="text-[20px] px-2 font-bold text-white">
                          Continue
                        </p>
                        <Image
                          className="my-2 "
                          src="/assets/images/arrow-right.svg"
                          width={20}
                          height={20}
                          alt=""
                        />
                      </button>
                    </a>
                  </div>
                </div>
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
