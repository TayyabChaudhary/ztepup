import Image from 'next/image'
import React from 'react'

export default function Posts() {
    return (
        <div className='p-32'>
            <div className='w-full bg-white shadow h-52 rounded-xl'>
                <div className='flex flex-shrink-0 w-full'>
                    <div className='w-full border-r border-gray-200 border-solid h-52'>
                        <div className='flex flex-col p-10 pb-6'>
                            <span className='text-sm font-medium tracking-wider text-gray-400'>
                                Followers
                            </span>
                            <div className="flex items-center justify-between pt-2">
                                <h1 className='text-2xl font-bold tracking-wide'>
                                    2,123
                                </h1>
                                <svg
                                    width="62"
                                    height="33"
                                    viewBox="0 0 62 33"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 29.6111C2.76604 26.9238 5.06415 21.7465 8.1283 22.5362C11.9585 23.5234 13.2565 28.5773 14.2019 29.6111C17.5396 33.2613 16.9925 29.6111 20.3302 19.9037C25.1537 5.87501 26.1849 19.9037 28.866 19.9037C30.7264 19.9037 31.354 9.05154 36.7453 12.9933C39.2623 14.8336 41.5057 14.6386 42.6547 10.3608C43.8038 6.08291 47.3604 2.79225 49.8226 4.76664C52.2849 6.74104 54.102 4.91386 54.6925 3.77945C56.6623 -0.0048069 58.1396 2.95678 60 6.08291"
                                        stroke="#289D99"
                                        stroke-width="3"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className='border-t border-gray-200 border-solid'></div>
                        <div className='flex items-center pt-2 pl-8 gap-x-1'>
                            <h2 className='text-base font-bold'>
                                +5.27%
                            </h2>
                            <Image src="/assets/images/arrow.svg" alt="" width={20} height={20} />
                        </div>
                    </div>
                    <div className='w-full border-r border-gray-200 border-solid h-52'>
                        <div className='flex flex-col p-10 pb-6'>
                            <span className='text-sm font-medium tracking-wider text-gray-400'>
                                Revenue
                            </span>
                            <div className="flex items-center justify-between pt-2">
                                <h1 className='text-2xl font-bold tracking-wide'>
                                    $695
                                </h1>
                                <svg
                                    width="62"
                                    height="33"
                                    viewBox="0 0 62 33"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 29.6111C2.76604 26.9238 5.06415 21.7465 8.1283 22.5362C11.9585 23.5234 13.2565 28.5773 14.2019 29.6111C17.5396 33.2613 16.9925 29.6111 20.3302 19.9037C25.1537 5.87501 26.1849 19.9037 28.866 19.9037C30.7264 19.9037 31.354 9.05154 36.7453 12.9933C39.2623 14.8336 41.5057 14.6386 42.6547 10.3608C43.8038 6.08291 47.3604 2.79225 49.8226 4.76664C52.2849 6.74104 54.102 4.91386 54.6925 3.77945C56.6623 -0.0048069 58.1396 2.95678 60 6.08291"
                                        stroke="#289D99"
                                        stroke-width="3"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className='border-t border-gray-200 border-solid'></div>
                        <div className='flex items-center pt-2 pl-8 gap-x-1'>
                            <h2 className='text-base font-bold'>
                                +1.78%
                            </h2>
                            <Image src="/assets/images/arrow.svg" alt="" width={20} height={20} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto p-6 mt-5 bg-white shadow rounded-xl'>
                <div className="flex items-center justify-between pb-3">
                    <div className='flex items-center gap-x-2'>
                        <Image src="/assets/images/bag.svg" alt="" width={20} height={20} />
                        <b>
                            7 Orders
                        </b>
                        <span className='tracking-wider'>to fufill</span>
                    </div>
                    <Image src="/assets/images/arrowblack.svg" alt="" width={10} height={20} />
                </div>
                <div className='border-t border-gray-200 border-solid'></div>
                <div className="flex items-center justify-between pt-3">
                    <div className='flex items-center gap-x-2'>
                        <Image src="/assets/images/bag.svg" alt="" width={20} height={20} />
                        <b>
                            8 messages
                        </b>
                        <span className='tracking-wider'>to respond to</span>
                    </div>
                    <Image src="/assets/images/arrowblack.svg" alt="" width={10} height={20} />
                </div>
            </div>
        </div>
    )
}
