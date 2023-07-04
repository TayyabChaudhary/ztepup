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
                    <button className='px-4 text-base heading-h'>Sign in</button>
                    <button className='bg-black w-[143px] h-[36px] text-white text-base mt-6 rounded-md mx-2'>Start Selling</button>
                </div>
            </header>
            <div className='container flex justify-center'>
                <div className='flex justify-center  bg-[#FFFFFF] rounded-xl w-[678px] h-[710px]'>
                    <div className=''>
                        <div>
                            <h1 className='text-black text-[35px] font-bold text-center tracking-wider mt-[80px]'>Sign Up</h1>
                        </div>
                        <main className='flex justify-center my-6 form'>
                            <div className=''>
                            <button className='flex items-center rounded-md border border-solid px-3 py-1 max-w-[306px] border-gray-200'>
                                    <Image className="px-2" src='/assets/images/google.svg' width={40} height={30} alt="" />
                                    <p className='py-2 text-sm tracking-wider'> Sign in with Google</p>
                                </button>
                            </div>
                            <div className='flex px-6'>
                                <button className='flex justify-center items-center rounded-md border border-solid w-[206px] py-1 border-gray-200'>
                                    <Image className="px-2 " src='/assets/images/apple.svg' width={40} height={30} alt="" />
                                    <p className='py-2 text-sm tracking-wider'> Sign in with apple</p>
                                </button>
                            </div>
                        </main>
                        <main className='flex justify-center my-4'>
                            <div className='flex justify-center '>
                                <div className='w-[100px] h-[2px] bg-gray-300'></div>
                            </div>
                            <div className=''>
                                <p className='text-[#A5A29A] px-4 tracking-wider'>Or with Email</p>
                            </div>
                            <div className='flex justify-center '>
                                <div className='w-[100px] h-[2px] bg-gray-300'></div>
                            </div>
                        </main>
                        <main className='form'>
                            <div className="flex w-full group">
                                <input type="tel" name="floating_company" id="floating_company" className="w-full h-[40px] border outline-none text-sm border-gray-200 px-4 focus: no-underline my-4 rounded-lg" placeholder="Email " required />

                            </div>
                            <div className='flex w-full'>
                                <input type="password" name="floating_company" id="floating_company" className="w-full h-[40px] border outline-none text-sm border-gray-200 px-4 focus: no-underline mt-1 mb-2 rounded-lg" placeholder="Password " required />
                            </div>

                            <main className='flex gap-4 mt-2 mb-4'>
                                <div className='w-full rounded-full h-[4px] bg-gray-300'></div>
                                <div className='w-full rounded-full h-[4px] bg-gray-300'></div>
                                <div className='w-full rounded-full h-[4px] bg-gray-300'></div>
                                <div className='w-full rounded-full h-[4px] bg-gray-300'></div>
                            </main>
                            <form className=''>
                                <p className='text-xs text-[#A5A29A]'>Use 8 or more characters with a mix of letters, numbers & symbols.</p>
                            </form>
                            <div className='flex w-full'>
                                <input type="password" name="floating_company" id="floating_company" className="w-full h-[40px] border outline-none text-sm border-gray-200 px-4 focus: no-underline mt-4 mb-2 rounded-lg" placeholder="Repeat Password " required />
                            </div>
                            <div className='flex items-center pl-0 my-4 check gap-x-1'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-[#A5A29A]' for="vehicle1"> I Accept the <span className='text-[#1984C6]'>Terms</span></label>
                            </div>

                            <a href='Verification'> <div className='flex button'>
                                <div className='flex justify-center w-full bg-black rounded-lg '>
                                    <button className=' text-white font-black py-[10px] tracking-wider text-base'>Sign Up</button>
                                </div>

                            </div>
                            </a>
                            <div className='my-4'>
                                <p className='text-sm text-center tracking-wider text-[#A5A29A]'>Already have an Account? <a href='login-page'><span className='font-bold text-black'>Sign in</span></a></p>
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
