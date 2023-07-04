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
            <div className='container flex justify-center pt-10'>
                <div className='flex justify-center items-center bg-[#FFFFFF] rounded-xl w-[678px] h-[660px]'>
                    <div className=''>
                        <div>
                            <h1 className='text-black text-[35px] font-bold text-center '>Forgot Password ?</h1>
                        </div>
                        <div className=''>
                            <p className='text-[#A5A29A] text-sm text-center'>Enter your email to reset your password.</p>
                        </div>
                        <main className='form'>
                            <div className="flex justify-center w-full mt-4 group">
                                <input type="email" text="email" name="femail" id="email" className="w-[300px] h-[40px] outline-none text-sm border border-gray-200 px-4 focus: no-underline my-4 rounded-lg" placeholder="Please enter your email address " required />
                            </div>
                            <div className='flex justify-center button'>
                                <a href='erropage'>
                                    <div className=' bg-black w-[300px] flex justify-center rounded-lg'>
                                        <button className=' text-white font-black py-[10px]  text-base'>Submit</button>
                                    </div>
                                </a>
                            </div>
                            <div className='text-center'>
                                <a href='BillingDetails'>
                                <button className=' text-[#1984C6] text-sm py-4'>Back</button>
                                </a>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </main>
    )
}
