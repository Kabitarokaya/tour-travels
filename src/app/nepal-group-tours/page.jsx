import Link from 'next/link';
import React from 'react'
import { FiShare2 } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

function page() {
    return (
        <>

            <section className="py-4 mt-3 bg-[#25518B] text-white">
                <div className="container mx-auto">
                    <div className="flex gap-3">
                        <Link href="/">   <p className='text-[12px] flex gap-2 items-center'>Home <IoIosArrowForward /></p></Link>
                        <p className='text-[12px] flex gap-2 items-center'>Way to Travel <IoIosArrowForward /></p>
                        <p className='text-[12px]'>
                            small group Tours </p>
                    </div>
                </div>
            </section>
            <section className='py-4'>
                <div className="container mx-auto">
                    <div className="flex py-4 justify-between">
                        <h2 className='text-[24px] font-bold uppercase'>Small Group Tours</h2>

                        <Link href=""><div className='flex gap-2 items-center'><FiShare2 className='size-[20px] text-blue-700' />Share it</div></Link>
                    </div>
                    <div>
                        <h2 className='text-[20px] text-black py-3 font-bold'>Small Group Tours in Nepal, Tibet, and Bhutan</h2>

                        <p className='py-4 text-[16px] font-[500] text-[#555454]'>Small Group Tours to Nepal, Tibet, and Bhutan are group-join trips organized in a small convenient group size. Trips that run through classical and established routes in Nepal, Tibet, and Bhutan are available to join throughout the year. The tour dates are offered considering the season, ways to travel, and route feasibility. Over 160 trip dates are available throughout the year to join a small, exciting group to travel with. Group tours are mostly very helpful in making new friends from around the world, are normally run on more famous and established routes, and are very helpful to travel at decent tour prices!</p>

                        <p className='py-4 text-[16px] font-[500] text-[#555454]'>At Thamel Travels & Tours, Small group tours offer a unique and enriching travel experience for adventurers seeking a more intimate and immersive journey. With limited group sizes, typically ranging from 6 to 16 people, these tours provide a chance to forge meaningful connections with fellow travelers and local communities. Whether exploring exotic destinations or delving into cultural heritage, small group tours offer personalized attention, allowing participants to engage deeply with their surroundings. Trips are led by knowledgeable guides; these tours often uncover hidden gems and off-the-beaten-path treasures, offering a fresh perspective on popular destinations. With shared experiences and a sense of camaraderie, small group tours create memories that last a lifetime, fostering a sense of discovery and adventure.</p>



                    </div>

                </div>
            </section>

            <section className='py-6 my-4 shadow bg-[#F7F8FA]'>
                <div className="container mx-auto">
                    <h2 className='text-black font-bold uppercase text-[20px]'>Package(s)</h2>
                    <div className="grid shadow-xl border my-3 sm:grid-cols-1 border-gray-200 py-4 px-4 lg:grid-cols-3">
                        <div className='flex gap-4  '>
                            <div className="flex gap-4">
                                <img className='w-[150px] h-[100px]' src="https://media.thameltravel.com/uploads/package/map/10-days-annapurna-base-camp-trek-map.webp" alt="" />
                                <div className='py-3'>
                                    <Link href="https://themeltravel.com"><h2 className='font-bold text-[16px]'>Annapurna Base Camp Trek</h2></Link>
                                    <p className='pt-2'>10 days Trekking & Active Tour</p>
                                </div>

                            </div>
                        </div>
                        <div className='flex justify-center gap-20'>
                            <div>
                                <p className='uppercase text-[16px] font-bold '>Price</p>
                                <p className='text-[#FF7C5B] font-bold text-[16px]'>US$775</p>
                            </div>
                            <div>
                                <h2 className='text-[16px] font-bold'>Season</h2>
                                <p>15 Sep - 15 Jun</p>
                            </div>
                        </div>

                        <div className=' pb-5 justify-end'>
                            <h2 className=' text-[16px] font-bold uppercase'>  Nights</h2>
                            <p className='py-2'>2N Kathmandu, 2N Pokhara 5N Himalayas</p>
                            <Link href=""><div className='border border-b-blue-900 rounded-full lg:w-[150px] sm:w-full pt-1.5 text-center hover:bg-blue-900 hover:text-white text-blue-900 h-[35px]'>View Dates</div></Link>
                        </div>
                    </div>

                    <div className="grid shadow-xl border my-5 sm:grid-cols-1 border-gray-200 py-4 px-4 lg:grid-cols-3">
                        <div className='flex gap-4  '>
                            <div className="flex gap-4">
                                <img className='w-[150px] h-[100px]' src="https://media.thameltravel.com/uploads/package/map/everest-base-camp-trek-map.webp" alt="" />
                                <div className='py-3'>
                                    <Link href="https://themeltravel.com"> <h2 className='font-bold text-[16px]'>Everest Base Camp Trekking</h2></Link>
                                    <p className='pt-2'>15 days Trekking & Active Tour</p>
                                </div>

                            </div>
                        </div>
                        <div className='flex justify-center gap-20'>
                            <div>
                                <p className='uppercase text-[16px] font-bold '>Price</p>
                                <p className='text-[#FF7C5B] font-bold text-[16px]'>US$1375</p>
                            </div>
                            <div>
                                <h2 className='text-[16px] font-bold'>Season</h2>
                                <p>25 SEP - 30 MAY</p>

                            </div>
                        </div>

                        <div className=' pb-5 justify-end'>
                            <h2 className=' text-[16px] font-bold uppercase'>  Nights</h2>
                            <p className='py-2'>2N Kathmandu, 2N Pokhara 5N Himalayas</p>
                            <Link href=""><div className='border border-b-blue-900 rounded-full lg:w-[150px] sm:w-full pt-1.5 text-center hover:bg-blue-900 hover:text-white text-blue-900 h-[35px]'>View Dates</div></Link>
                        </div>
                    </div>
                    <div className="grid shadow-xl border my-5 sm:grid-cols-1 border-gray-200 py-4 px-4 lg:grid-cols-3">
                        <div className='flex gap-4  '>
                            <div className="flex gap-4">
                                <img className='w-[150px] h-[100px]' src="https://media.thameltravel.com/uploads/package/map/kathmandu-valley-tours.webp" alt="" />
                                <div className='py-3'>
                                    <Link href="https://themeltravel.com"> <h2 className='font-bold text-[16px]'>Kathmandu Valley Real Adventures</h2></Link>
                                    <p className='pt-2'>6 days Exploratory Tour</p>
                                </div>

                            </div>
                        </div>
                        <div className='flex justify-center gap-20'>
                            <div>
                                <p className='uppercase text-[16px] font-bold '>Price</p>
                                <p className='text-[#FF7C5B] font-bold text-[16px]'>US$425</p>
                            </div>
                            <div>
                                <h2 className='text-[16px] font-bold'>Season</h2>
                                <p>25 SEP - 30 MAY</p>

                            </div>
                        </div>

                        <div className=' pb-5 justify-end'>
                            <h2 className=' text-[16px] font-bold uppercase'>  Nights</h2>
                            <p className='py-2'>2N Kathmandu, 2N Pokhara 5N Himalayas</p>
                            <Link href=""><div className='border border-b-blue-900 rounded-full lg:w-[150px] sm:w-full pt-1.5 text-center hover:bg-blue-900 hover:text-white text-blue-900 h-[35px]'>View Dates</div></Link>
                        </div>
                    </div>
                    <div className="grid shadow-xl border my-5 sm:grid-cols-1 border-gray-200 py-4 px-4 lg:grid-cols-3">
                        <div className='flex gap-4  '>
                            <div className="flex gap-4">
                                <img className='w-[150px] h-[100px]' src="https://media.thameltravel.com/uploads/package/map/tilicho-lake-annapurna-circuit-trek-map.webp" alt="" />
                                <div className='py-3'>
                                    <Link href="https://themeltravel.com"> <h2 className='font-bold text-[16px]'>Annapurna Circuit Trek with Tilicho Lake</h2></Link>
                                    <p className='pt-2'>14 days Trekking & Active Tour</p>
                                </div>

                            </div>
                        </div>
                        <div className='flex justify-center gap-20'>
                            <div>
                                <p className='uppercase text-[16px] font-bold '>Price</p>
                                <p className='text-[#FF7C5B] font-bold text-[16px]'>US$975</p>
                            </div>
                            <div>
                                <h2 className='text-[16px] font-bold'>Season</h2>
                                <p>25 Feb - 15 Dec</p>

                            </div>
                        </div>

                        <div className=' pb-5 justify-end'>
                            <h2 className=' text-[16px] font-bold uppercase'>  Nights</h2>
                            <p className='py-2'>2N Kathmandu, 2N Pokhara 5N Himalayas</p>
                            <Link href=""><div className='border border-b-blue-900 rounded-full lg:w-[150px] sm:w-full pt-1.5 text-center hover:bg-blue-900 hover:text-white text-blue-900 h-[35px]'>View Dates</div></Link>
                        </div>
                    </div>
                    <div className="grid shadow-xl border my-5 sm:grid-cols-1 border-gray-200 py-4 px-4 lg:grid-cols-3">
                        <div className='flex gap-4  '>
                            <div className="flex gap-4">
                                <img className='w-[150px] h-[100px]' src="https://media.thameltravel.com/uploads/package/map/nepal-classical-tours-map.webp" alt="" />
                                <div className='py-3'>
                                    <Link href="https://themeltravel.com"> <h2 className='font-bold text-[16px]'>Classical Nepal Adventures</h2></Link>
                                    <p className='pt-2'>9 days Classical Tour</p>
                                </div>

                            </div>
                        </div>
                        <div className='flex justify-center gap-20'>
                            <div>
                                <p className='uppercase text-[16px] font-bold '>Price</p>
                                <p className='text-[#FF7C5B] font-bold text-[16px]'>US$1475</p>
                            </div>
                            <div>
                                <h2 className='text-[16px] font-bold'>Season</h2>
                                <p>15 Sep - 15 Jun</p>

                            </div>
                        </div>

                        <div className=' pb-5 justify-end'>
                            <h2 className=' text-[16px] font-bold uppercase'>  Nights</h2>
                            <p className='py-2'>2N Kathmandu, 2N Pokhara 5N Himalayas</p>
                            <Link href=""><div className='border border-b-blue-900 rounded-full lg:w-[150px] sm:w-full pt-1.5 text-center hover:bg-blue-900 hover:text-white text-blue-900 h-[35px]'>View Dates</div></Link>
                        </div>
                    </div>
                    <Link href="" ><div className='w-[150px] h-[50px] uppercase text-blue-900 hover:bg-blue-900 hover:text-white text-center mt-3 pt-3 lg:mx-0 sm:mx-auto border rounded-full'>See All Dates</div></Link>
                </div>
            </section>
            <section className="py-5 my-4 bg-[#F8F9FB]">
                <div className="container  mx-auto">
                    <h2 className='text-[30px]  font-bold uppercase'>Latest Blog Posts</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
                        <div className='  overflow-hidden h-[450px] shadow'>
                            <img src="https://media.thameltravel.com/uploads/blog/chandragirijpg.webp" alt="" className=' transition-transform duration-400 overflow-hidden hover:scale-110' />

                            <p className='py-2 mt-2 flex gap-3 items-center px-2'><IoTimeOutline className='size-[30px]' />July 13, 2024</p>
                            <h3 className='text-[20px] font-bold px-2'>Embracing the Monsoon Magic; Best time to enjoy the beauty of Kathmandu Valley</h3>
                        </div>
                        <div className='  overflow-hidden h-[450px] shadow'>
                            <img src="https://media.thameltravel.com/uploads/blog/thumb.webp" alt="" className=' transition-transform duration-400 overflow-hidden hover:scale-110' />

                            <p className='py-2 mt-2 flex gap-3 items-center px-2'><IoTimeOutline className='size-[30px]' />February 13, 2024</p>
                            <h3 className='text-[20px] font-bold px-2'>Luxury and Family Tours in Nepal: A Journey Through Cultural Valleys and Himalayan Majesty</h3>
                        </div>
                        <div className='  overflow-hidden h-[450px] shadow'>
                            <img src="https://media.thameltravel.com/uploads/blog/bhutan.webp" alt="" className=' transition-transform duration-400 overflow-hidden hover:scale-110' />

                            <p className='py-2 mt-2 flex gap-3 items-center px-2'><IoTimeOutline className='size-[30px]' />August 26, 2023</p>
                            <h3 className='text-[20px] font-bold px-2'>Bhutan reduces its SDF Tourism Tax to USD 100 per night!</h3>
                        </div>
                    </div>
                    <Link href="" ><div className='w-[150px] h-[50px] uppercase text-blue-900 hover:bg-blue-900 hover:text-white text-center mt-3 pt-3 mx-auto border rounded-full'>See All Posts</div></Link>
                </div>
            </section>

        </>
    )
}

export default page
