import Link from 'next/link';
import React from 'react'
import { FiShare2 } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function page() {
    return (
        <>

            <section className="py-4 mt-3 bg-[#25518B] text-white">
                <div className="container mx-auto">
                    <div className="flex gap-3">
                        <Link href="/">   <p className='text-[12px] flex gap-2 items-center'>Home <IoIosArrowForward /></p></Link>
                        <p className='text-[12px] flex gap-2 items-center'>Deal <IoIosArrowForward /></p>
                        <p className='text-[12px]'>
                            EarlyBird Offers </p>
                    </div>
                </div>
            </section>
            <section className='py-4'>
                <div className="container mx-auto">
                    <div className="flex py-4 justify-between">
                        <h2 className='text-[24px] font-bold uppercase'>Terms and Conditions</h2>

                        <Link href=""><div className='flex gap-2 items-center'><FiShare2 className='size-[20px] text-blue-700' />Share it</div></Link>
                    </div>
                    <div>
                        <p className='py-4 text-[16px] font-[500] text-[#555454]'>It is simple & straight that, at Thamel Travels, date change is free and always will be (on Bhutan & Tibet trip, flight date change charge will be applicable). We want to make trip booking process simple and hassle-free for our guests. </p>
                        <div className='flex gap-3 items-center'> <FaRegArrowAltCircleRight className='size-[20px] text-orange-600' />
                            <p className='py-4 text-[16px] font-[500] text-[#555454]'> A 20% deposit is required for confirmation of the trip. And rest of the payments are to be transferred at least a week before the arrival/trip starting dates or be paid in Cash/card upon arrival in Kathmandu. </p></div>
                        <div className='flex gap-3 items-center'> <FaRegArrowAltCircleRight className=' text-orange-600' />
                            <p className='py-4 text-[16px] font-[500] text-[#555454]'>   Any seasonal offers on our official social media pages or ads are valid & entertained.</p></div>
                        <div className='flex gap-3 items-center'> <FaRegArrowAltCircleRight className=' text-orange-600' />
                            <p className='py-4 text-[16px] font-[500] text-[#555454]'> Dates are flexible & date changes are free for unlimited multiple times and always will be.</p></div>

                        <div className='flex gap-3 items-center'> <FaRegArrowAltCircleRight className='size-[20px] text-orange-600' />
                            <p className='py-4 text-[16px] font-[500] text-[#555454]'> Trip schedules may be affected due to unpredictable weather specially on trekking trips. A new trip schedule (for the day or  days) will be briefed by guide in this situation. </p></div>
                        <h2 className='text-[20px] text-black py-3 font-bold'>How to cancel a confirmed Trip?</h2>





                    </div>

                </div>
            </section>




        </>
    )
}

export default page
