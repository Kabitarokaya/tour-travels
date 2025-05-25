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
<Link href="/">                        <p className='text-[12px] flex gap-2 items-center'>Home <IoIosArrowForward /></p></Link>
                        <p className='text-[12px] flex gap-2 items-center'>Way to Travel <IoIosArrowForward /></p>
                        <p className='text-[12px]'>
Classical Adventures</p>
                    </div>
                </div>
            </section>
            <section className='py-4'>
                <div className="container mx-auto">
                    <div className="flex py-4 justify-between">
                        <h2 className='text-[24px] font-bold uppercase'>Classical Adventures</h2>
                        <Link href=""><div className='flex gap-2 items-center'><FiShare2 className='size-[20px] text-blue-700' />Share it</div></Link>
                    </div>
                    <div>
                        <p className='py-4 text-[16px] font-[500] text-[#555454]'>Experience the magic of Nepal with our Classical and Amazing Tours. Immerse yourself in the awe-inspiring nature of Nepal on our Nature Tours, or delve into the spiritual realm with our Temple Tours. Discover the rich cultural heritage and historical landmarks that make Nepal a captivating destination for cultural exploration.</p>

                        <p className='py-4 text-[16px] font-[500] text-[#555454]'>Immerse yourself in the breathtaking scenic beauty of Nepal while embarking on captivating sightseeing adventures. Engage in authentic experiences that intimately connect you with the heart and soul of Nepal. Embark on a spiritual journey that will leave you transformed. Explore Nepal's vibrant cultural heritage through our expertly guided tours, revealing hidden gems and creating cherished lifelong memories.</p>

                        <p className='py-4 text-[16px] font-[500] text-[#555454]'>We, at Thamel Travels, invite you to immerse yourself in the diverse landscapes, ancient temples, and breathtaking beauty of Nepal. Let us guide you through the wonders of Nepal, ensuring an unforgettable and authentic experience. Discover the essence of Nepal through our Classical Nepal Tours, Amazing Nepal Tours, and a variety of nature, temple, and cultural exploration experiences. Join one of our Small Group Tours or organize an exclusive family trip with us to explore classical Nepal!</p>
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
