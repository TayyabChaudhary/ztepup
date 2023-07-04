import React from 'react'
import Image from 'next/image'

export default function Header() {
    return (
        <main className=''>
            <header className='container justify-center mx-auto sm:flex sm:justify-between'>
                <div className=''>
                    <Image className="px-4 py-4 " src='/assets/images/button.png' width={475} height={239} alt="" />
                </div>
                <div className='flex'>
                    <button className='px-4 text-[20px] heading-h'>Sign in</button>
                    <button className='bg-black w-[143px] h-[36px] text-white text-[20px] mt-6 rounded-md mx-2'>Start Selling</button>
                </div>
            </header>
            <div className='container flex justify-center pt-4'>
                <div className='flex justify-center  bg-[#FFFFFF] rounded-xl w-[678px] h-[660px]'>
                    <div className=''>
                        <div>
                            <h1 className='text-black text-[35px] font-bold text-center pt-28'>Setup New Password</h1>
                        </div>
                        <div className=''>
                            <p className='text-[#A5A29A] text-sm text-center'>Have you already reset the password ?<span className='text-[#1984C6] '>Sign in</span></p>
                        </div>
                        <main className='form'>
                            <div className="flex w-full mt-4 group">
                                <input type="tel" name="floating_company" id="floating_company" className="w-[388px] h-[40px] border outline-none text-sm border-gray-200 px-4 focus: no-underline my-4 rounded-lg" placeholder="Password " required />
                            </div>
                            <main className='flex gap-4 mb-4'>
                                <div className='w-[83px] h-[4px] rounded-full bg-gray-300'></div>
                                <div className='w-[83px] h-[4px] rounded-full bg-gray-300'></div>
                                <div className='w-[83px] h-[4px] rounded-full bg-gray-300'></div>
                                <div className='w-[83px] h-[4px] rounded-full bg-gray-300'></div>
                            </main>
                            <form className=''>
                                <p className='text-xs text-[#A5A29A] text-center'>Use 8 or more characters with a mix of letters, numbers & symbols.</p>
                            </form>

                            <div className='flex w-full'>
                                <input type="tel" name="floating_company" id="floating_company" className="w-[388px] h-[40px] border outline-none text-sm border-gray-200 px-4 focus: no-underline mt-4 rounded-lg" placeholder="Repeat Password " required />
                            </div>
                            <div className='flex items-center my-4 check gap-x-2'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-[#A5A29A]' for="vehicle1"> I Agree &  <span className='text-[#1984C6]'>Terms and conditions</span></label>
                            </div>
                            <div className='flex justify-center button'>
                                <a href='accountinof'>
                                <div className=' bg-black w-[388px] flex justify-center rounded-lg'>
                                    <button className=' text-white font-black py-[10px]  text-base'>Submit</button>
                                </div>
                                </a>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
            <div className='my-4 footer'>
                <p className='text-center text- [#1F1F1F] text-[12px]'>© 2023 Ztep Up</p>
            </div>
        </main>
    )
}
