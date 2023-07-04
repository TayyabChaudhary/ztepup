import React from "react";
import Layout from "../Dashboard/Layout";


const Orders = () => {
  return (
    <>
      <Layout>
      <div className="relative rounded-lg text-black bg-white shadow-[0px_1px_10px_rgba(31,_31,_31,_0.05),_1px_0px_10px_rgba(31,_31,_31,_0.05),_1px_1px_10px_rgba(31,_31,_31,_0.05)] text-[13px] w-full h-[750.44px] flex flex-col p-8 box-border items-center justify-between text-left text-sm  font-p1">
      <div className="self-stretch flex flex-col items-start justify-start relative gap-[10px]">
        <div className="self-stretch rounded-lg bg-white h-[74px] flex flex-row p-2 box-border items-center justify-start relative gap-[16px] z-[0]">
          <div className="flex flex-row items-center justify-start gap-[8px] z-[0]">
            <div className="rounded-lg w-7 h-7 flex flex-row p-1 box-border items-center justify-center">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                alt=""
                src="/adds.svg"
              />
            </div>
            <div className="rounded-lg w-7 h-7 flex flex-row p-1 box-border items-center justify-center">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                alt=""
                src="/funnelsimpler.svg"
              />
            </div>
            <div className="rounded-lg bg-whitesmoke w-7 h-7 flex flex-row p-1 box-border items-center justify-center">
              <img
                className="self-stretch cursor-pointer flex-1 relative max-w-full overflow-hidden max-h-full"
                alt=""
                src="/arrowsdownupd.svg"
              />
            </div>
            <div className="rounded-lg w-7 h-7 hidden flex-row p-1 box-border items-center justify-center">
              <img
                className="self-stretch cursor-pointer flex-1 relative max-w-full overflow-hidden max-h-full"
                alt=""
                src="/loadingas.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px] z-[1]">
            <div className="relative box-border w-px h-[21px] border-r-[1px] border-solid border-darkgray" />
            <h5 className="relative">2 Selected</h5>
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="rounded-lg w-7 h-7 flex flex-row p-1 box-border items-center justify-center">
                <img
                  className="self-stretch cursor-pointer flex-1 relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/trashr.svg"
                />
              </div>
              <div className="rounded-lg w-7 h-7 flex flex-row p-1 box-border items-center justify-center">
                <img
                  className="self-stretch cursor-pointer flex-1 relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/dotsthreeoutlineverticals.svg"
                />
              </div>
            </div>
          </div>
          <div className="my-0 mx-[!important] absolute top-[8px] right-[8px] rounded-lg bg-white box-border w-40 h-7 hidden flex-row py-1 px-1.5 items-center justify-start gap-[4px] z-[2] text-darkgray border-[1px] border-solid border-whitesmoke">
            
           
          </div>
        </div>
       
        <input
          className="font-p1 outline-none text-sm bg-white my-0 mx-[!important] absolute top-[23.18px] right-[29px] rounded-lg box-border w-40 h-7 flex flex-row py-1 px-1.5 items-center justify-start z-[1] border-[1px] border-solid border-whitesmoke"
          type="text"
          placeholder="Search"
          maxLength
          minLength
        />
      </div>
      <div className="self-stretch box-border h-[50px] flex flex-row py-[5px] pr-[0.0000457763671875px] pl-2.5 items-center justify-between border-b-[1px] border-solid border-whitesmoke">
        <img
          className="relative w-[13.5px] h-[13.5px]"
          alt=""
          src="/rectangle3stroke.svg"
        />
        <div className="flex-1 h-10 flex flex-row items-center justify-center">
          <img
            className="relative w-6 h-6 hidden"
            alt=""
            src="/checkboxfalseas.svg"
          />
        </div>
        <div className="flex-1 flex flex-row py-2 pr-4 pl-0 items-center justify-start">
          <h5 className="flex-1 relative">Order ID</h5>
        </div>
        <div className="flex-1 h-10 flex flex-row py-2 px-2 box-border items-center justify-start gap-[4px]">
          <img className="relative w-4 h-4 hidden" alt="" />
          <div className="relative">Date Order</div>
        </div>
        <div className="flex-1 h-10 flex flex-row py-1 pr-4 pl-3 box-border items-center justify-start">
          <div className="rounded-lg h-8 flex flex-row py-1 pr-2 pl-1 box-border items-center justify-start gap-[8px]">
            <img
              className="relative rounded-45xl w-6 h-6 overflow-hidden shrink-0 object-cover hidden"
              alt=""
              src="/female09@2x.png"
            />
            <div className="relative">Costumer</div>
          </div>
        </div>
        <div className="flex-1 flex flex-row py-2 px-4 items-center justify-start">
          <div className="flex-1 relative">Address</div>
        </div>
        <div className="flex-1 flex flex-row py-2 px-4 items-center justify-start">
          <div className="flex-1 relative">Total</div>
        </div>
        <div className="flex-1 h-10 flex flex-row py-2 pr-4 pl-3 box-border items-center justify-start">
          <div className="flex flex-row items-center justify-start">
            <img className="relative w-4 h-4 hidden" alt="" />
            <div className="relative">Order Status</div>
          </div>
        </div>
        <div className="flex-1 h-10 flex flex-row p-2 box-border items-center justify-end">
          <div className="rounded-lg w-6 h-6 hidden flex-row p-1 box-border items-center justify-center">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/dotsthreeoutlineverticals1.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch box-border h-10 flex flex-row py-0 pr-[0.0000457763671875px] pl-2.5 items-center justify-between border-b-[1px] border-solid border-whitesmoke">
        <img
          className="relative w-[13.5px] h-[13.5px]"
          alt=""
          src="/rectangle3stroke1.svg"
        />
        <div className="flex-1 h-10 flex flex-row items-center justify-center">
          <img
            className="relative w-6 h-6 hidden"
            alt=""
            src="/checkboxfalseas1.svg"
          />
        </div>
        <div className="flex-1 flex flex-row py-2 pr-4 pl-0 items-center justify-start">
          <div className="flex-1 relative">#CM9802</div>
        </div>
        <div className="flex-1 h-10 flex flex-row py-2 px-2 box-border items-center justify-start gap-[4px]">
          <img className="relative w-4 h-4" alt="" src="/calendarblankr.svg" />
          <div className="relative">A minute ago</div>
        </div>
        <div className="flex-1 h-10 flex flex-row py-1 pr-4 pl-3 box-border items-center justify-start">
          <div className="rounded-lg h-8 flex flex-row py-1 pr-2 pl-1 box-border items-center justify-start gap-[8px]">
            <img
              className="relative rounded-45xl w-6 h-6 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/3d03@2x.png"
            />
            <div className="relative">Koray Okumus</div>
          </div>
        </div>
        <div className="flex-1 flex flex-row py-2 px-4 items-center justify-start">
          <div className="flex-1 relative">Bagwell Avenue Ocala</div>
        </div>
        <div className="flex-1 flex flex-row py-2 px-4 items-center justify-start">
          <div className="flex-1 relative">$201</div>
        </div>
        <div className="flex-1 h-10 flex flex-row py-2 pr-4 pl-3 box-border items-center justify-start text-darkcyan">
          <div className="flex flex-row items-center justify-start">
            <img className="relative w-4 h-4" alt="" src="/dot2.svg" />
            <div className="relative">Fulfilled</div>
          </div>
        </div>
        <div className="flex-1 h-10 flex flex-row p-2 box-border items-center justify-end">
          <div className="rounded-lg w-6 h-6 hidden flex-row p-1 box-border items-center justify-center">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/dotsthreeoutlineverticals2.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch box-border h-10 flex flex-row py-0 pr-[0.0000457763671875px] pl-2.5 items-center justify-between border-b-[1px] border-solid border-whitesmoke">
        <img
          className="relative w-[13.5px] h-[13.5px]"
          alt=""
          src="/rectangle3stroke2.svg"
        />
        <div className="flex-1 h-10 flex flex-row items-center justify-center">
          <img
            className="relative w-6 h-6 hidden"
            alt=""
            src="/checkboxfalseas2.svg"
          />
        </div>
        <div className="flex-1 flex flex-row py-2 pr-4 pl-0 items-center justify-start">
          <div className="flex-1 relative">#CM9803</div>
        </div>
        <div className="flex-1 h-10 flex flex-row py-2 px-2 box-border items-center justify-start gap-[4px]">
          <img className="relative w-4 h-4" alt="" src="/calendarblankr1.svg" />
          <div className="relative">1 hour ago</div>
        </div>
        <div className="flex-1 h-10 flex flex-row py-1 pr-4 pl-3 box-border items-center justify-start">
          <div className="rounded-lg h-8 flex flex-row py-1 pr-2 pl-1 box-border items-center justify-start gap-[8px]">
            <img
              className="relative rounded-45xl w-6 h-6 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/3d02@2x.png"
            />
            <div className="relative">Lana Steiner</div>
          </div>
        </div>
        <div className="flex-1 flex flex-row py-2 px-4 items-center justify-start">
          <div className="flex-1 relative">Washburn Baton Rouge</div>
        </div>
        <div className="flex-1 flex flex-row py-2 px-4 items-center justify-start">
          <div className="flex-1 relative">$31</div>
        </div>
        <div className="flex-1 h-10 flex flex-row py-2 pr-4 pl-3 box-border items-center justify-start text-steelblue">
          <div className="flex flex-row items-center justify-start">
            <img className="relative w-4 h-4" alt="" src="/dot21.svg" />
            <div className="relative">Pending</div>
          </div>
        </div>
        <div className="flex-1 h-10 flex flex-row p-2 box-border items-center justify-end">
          <div className="rounded-lg w-6 h-6 hidden flex-row p-1 box-border items-center justify-center">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/dotsthreeoutlineverticals3.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch box-border h-[50px] flex flex-row py-0 pr-[0.0000457763671875px] pl-2.5 items-center justify-between border-b-[1px] border-solid border-whitesmoke">
        <img
          className="relative w-[13.5px] h-[13.5px]"
          alt=""
          src="/rectangle3stroke3.svg"
        />
        <div className="flex-1 h-10 flex flex-row items-center justify-center">
          <img
            className="relative w-6 h-6 hidden"
            alt=""
            src="/checkboxfalseas3.svg"
          />
        </div>
        <div className="flex-1 flex flex-row py-2 pr-4 pl-0 items-center justify-start">
          <div className="flex-1 relative">#CM9801</div>
        </div>
        <div className="flex-1 h-10 flex flex-row py-2 px-2 box-border items-center justify-start gap-[4px]">
          <img className="relative w-4 h-4" alt="" src="/calendarblankr2.svg" />
          <div className="relative">Feb 2, 2023</div>
        </div>
        <div className="flex-1 h-10 flex flex-row py-1 pr-4 pl-3 box-border items-center justify-start">
          <div className="rounded-lg h-8 flex flex-row py-1 pr-2 pl-1 box-border items-center justify-start gap-[8px]">
            <img
              className="relative rounded-45xl w-6 h-6 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/female091@2x.png"
            />
            <div className="relative">Kate Morrison</div>
          </div>
        </div>
        <div className="flex-1 flex flex-row py-2 px-4 items-center justify-start">
          <div className="flex-1 relative">Meadow Lane Oakland, New York</div>
        </div>
        <div className="flex-1 flex flex-row py-2 px-4 items-center justify-start">
          <div className="flex-1 relative">$401</div>
        </div>
        <div className="flex-1 h-10 flex flex-row py-2 pr-4 pl-3 box-border items-center justify-start text-darkcyan">
          <div className="flex flex-row items-center justify-start">
            <img className="relative w-4 h-4" alt="" src="/dot22.svg" />
            <div className="relative">Fulfilled</div>
          </div>
        </div>
        <div className="flex-1 h-10 flex flex-row p-2 box-border items-center justify-end">
          <div className="rounded-lg w-6 h-6 hidden flex-row p-1 box-border items-center justify-center">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/dotsthreeoutlineverticals4.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch box-border h-10 flex flex-row py-0 pr-[0.0000457763671875px] pl-2.5 items-center justify-between border-b-[1px] border-solid border-whitesmoke">
        <img
          className="relative w-[13.5px] h-[13.5px]"
          alt=""
          src="/rectangle3stroke4.svg"
        />
        <div className="flex-1 h-10 flex flex-row items-center justify-center">
          <img
            className="relative w-6 h-6 hidden"
            alt=""
            src="/checkboxfalseas4.svg"
          />
        </div>
        <div className="flex-1 flex flex-row py-2 pr-4 pl-0 items-center justify-start">
          <div className="flex-1 relative">#CM9802</div>
        </div>
        <div className="flex-1 h-10 flex flex-row py-2 px-2 box-border items-center justify-start gap-[4px]">
          <img className="relative w-4 h-4" alt="" src="/calendarblankr3.svg" />
          <div className="relative">Feb 3, 2023</div>
        </div>
        <div className="flex-1 h-10 flex flex-row py-1 pr-4 pl-3 box-border items-center justify-start">
          <div className="rounded-lg h-8 flex flex-row py-1 pr-2 pl-1 box-border items-center justify-start gap-[8px]">
            <img
              className="relative rounded-45xl w-6 h-6 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/3d031@2x.png"
            />
            <div className="relative">Koray Okumus</div>
          </div>
        </div>
        <div className="flex-1 flex flex-row py-2 px-4 items-center justify-start">
          <div className="flex-1 relative">Bagwell Avenue Ocala</div>
        </div>
        <div className="flex-1 flex flex-row py-2 px-4 items-center justify-start">
          <div className="flex-1 relative">$231</div>
        </div>
        <div className="flex-1 h-10 flex flex-row py-2 pr-4 pl-3 box-border items-center justify-start text-darkcyan">
          <div className="flex flex-row items-center justify-start">
            <img className="relative w-4 h-4" alt="" src="/dot23.svg" />
            <div className="relative">Fulfilled</div>
          </div>
        </div>
        <div className="flex-1 h-10 flex flex-row p-2 box-border items-center justify-end">
          <div className="rounded-lg w-6 h-6 hidden flex-row p-1 box-border items-center justify-center">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/dotsthreeoutlineverticals5.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch box-border h-10 flex flex-row py-0 pr-[0.0000457763671875px] pl-2.5 items-center justify-between border-b-[1px] border-solid border-whitesmoke">
        <img
          className="relative w-[13.5px] h-[13.5px]"
          alt=""
          src="/rectangle3stroke5.svg"
        />
        <div className="flex-1 h-10 flex flex-row items-center justify-center">
          <img
            className="relative w-6 h-6 hidden"
            alt=""
            src="/checkboxfalseas5.svg"
          />
        </div>
        <div className="flex-1 flex flex-row py-2 pr-4 pl-0 items-center justify-start">
          <div className="flex-1 relative">#CM9803</div>
        </div>
        <div className="flex-1 h-10 flex flex-row py-2 px-2 box-border items-center justify-start gap-[4px]">
          <img className="relative w-4 h-4" alt="" src="/calendarblankr4.svg" />
          <div className="relative">Feb 4, 2023</div>
        </div>
        <div className="flex-1 h-10 flex flex-row py-1 pr-4 pl-3 box-border items-center justify-start">
          <div className="rounded-lg h-8 flex flex-row py-1 pr-2 pl-1 box-border items-center justify-start gap-[8px]">
            <img
              className="relative rounded-45xl w-6 h-6 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/3d021@2x.png"
            />
            <div className="relative">Lana Steiner</div>
          </div>
        </div>
        <div className="flex-1 flex flex-row py-2 px-4 items-center justify-start">
          <div className="flex-1 relative">Washburn Baton Rouge</div>
        </div>
        <div className="flex-1 flex flex-row py-2 px-4 items-center justify-start">
          <div className="flex-1 relative">$141</div>
        </div>
        <div className="flex-1 h-10 flex flex-row py-2 pr-4 pl-3 box-border items-center justify-start text-steelblue">
          <div className="flex flex-row items-center justify-start">
            <img className="relative w-4 h-4" alt="" src="/dot24.svg" />
            <div className="relative">Pending</div>
          </div>
        </div>
        <div className="flex-1 h-10 flex flex-row p-2 box-border items-center justify-end">
          <div className="rounded-lg w-6 h-6 hidden flex-row p-1 box-border items-center justify-center">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/dotsthreeoutlineverticals6.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch box-border h-10 flex flex-row py-0 pr-[0.0000457763671875px] pl-2.5 items-center justify-between border-b-[1px] border-solid border-whitesmoke">
        <img
          className="relative w-[13.5px] h-[13.5px]"
          alt=""
          src="/rectangle3stroke6.svg"
        />
        <div className="flex-1 h-10 flex flex-row items-center justify-center">
          <img
            className="relative w-6 h-6 hidden"
            alt=""
            src="/checkboxfalseas6.svg"
          />
        </div>
        <div className="flex-1 flex flex-row py-2 pr-4 pl-0 items-center justify-start">
          <div className="flex-1 relative">#CM9804</div>
        </div>
        <div className="flex-1 h-10 flex flex-row py-2 px-2 box-border items-center justify-start gap-[4px]">
          <img className="relative w-4 h-4" alt="" src="/calendarblankr5.svg" />
          <div className="relative">Feb 5, 2023</div>
        </div>
        <div className="flex-1 h-10 flex flex-row py-1 pr-4 pl-3 box-border items-center justify-start">
          <div className="rounded-lg h-8 flex flex-row py-1 pr-2 pl-1 box-border items-center justify-start gap-[8px]">
            <img
              className="relative rounded-45xl w-6 h-6 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/female15@2x.png"
            />
            <div className="relative">Natali Craig</div>
          </div>
        </div>
        <div className="flex-1 flex flex-row py-2 px-4 items-center justify-start">
          <div className="flex-1 relative">Nest Lane Olivette</div>
        </div>
        <div className="flex-1 flex flex-row py-2 px-4 items-center justify-start">
          <div className="flex-1 relative">$231</div>
        </div>
        <div className="flex-1 h-10 flex flex-row py-2 pr-4 pl-3 box-border items-center justify-start text-gold">
          <div className="flex flex-row items-center justify-start">
            <img className="relative w-4 h-4" alt="" src="/dot25.svg" />
            <div className="relative">Unfulfilled</div>
          </div>
        </div>
        <div className="flex-1 h-10 flex flex-row p-2 box-border items-center justify-end">
          <div className="rounded-lg w-6 h-6 hidden flex-row p-1 box-border items-center justify-center">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/dotsthreeoutlineverticals7.svg"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="mt-[21px] py-[11px] flex justify-end items-center px-[5px]">
      <div className="flex gap-[8px]">
        <div className="px-[10px] py-[10px] cursor-pointer">
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.92541 0.780226C7.19153 1.0243 7.19153 1.42003 6.92541 1.66411L2.4375 5.78023C2.17138 6.0243 2.17138 6.42003 2.4375 6.66411L6.92541 10.7802C7.19153 11.0243 7.19153 11.42 6.92541 11.6641C6.65928 11.9082 6.22781 11.9082 5.96169 11.6641L1.47378 7.54799C0.675408 6.81576 0.675406 5.62858 1.47378 4.89634L5.96169 0.780226C6.22781 0.536149 6.65928 0.536149 6.92541 0.780226Z" fill="#1F1F1F"/>
</svg>

        </div>
        <div className="px-[10px] py-[5px] cursor-pointer hover:bg-[#EEEEED] rounded-[8px]">
          <p>1</p>
        </div>
        <div className="px-[10px] py-[5px] cursor-pointer hover:bg-[#EEEEED] rounded-[8px]">
          <p>2</p>
        </div>
        <div className="px-[10px] py-[5px] cursor-pointer hover:bg-[#EEEEED] rounded-[8px]">
          <p>3</p>
        </div>
        <div className="px-[10px] py-[5px] cursor-pointer hover:bg-[#EEEEED] rounded-[8px]">
          <p>4</p>
        </div>
        <div className="px-[10px] py-[5px] cursor-pointer hover:bg-[#EEEEED] rounded-[8px]">
          <p>5</p>
        </div>
        <div className="px-[10px] cursor-pointer py-[10px]">
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.07459 11.6641C0.808469 11.42 0.808469 11.0243 1.07459 10.7802L5.5625 6.66411C5.82863 6.42003 5.82863 6.0243 5.5625 5.78023L1.07459 1.66411C0.80847 1.42003 0.80847 1.0243 1.07459 0.780226C1.34072 0.536149 1.77219 0.536149 2.03831 0.780226L6.52622 4.89634C7.32459 5.62858 7.32459 6.81576 6.52622 7.54799L2.03831 11.6641C1.77219 11.9082 1.34072 11.9082 1.07459 11.6641Z" fill="#1F1F1F"/>
</svg>


        </div>

      </div>

    </div>
        
      </Layout>
    </>
  );
};

export default Orders;
