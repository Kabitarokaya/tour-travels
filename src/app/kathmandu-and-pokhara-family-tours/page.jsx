import Link from 'next/link';
import React from 'react'
import { FiShare2 } from "react-icons/fi";
import { MdStarRate } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";

function Page() {

  return (
    <>
      <section className="py-4 mt-3 bg-[#25518B] text-white">
        <div className="container mx-auto">
          <div className="flex gap-3">
            <Link href="/" >   <p className='text-[12px] flex gap-2 items-center'>Home <IoIosArrowForward /></p></Link>
            <p className='text-[12px] flex gap-2 items-center'>Way to Travel <IoIosArrowForward /></p>
            <p className='text-[12px]'>Luxury Adventures</p>
            <p className='text-[12px]'>Kathmandu and Pokhara Luxury Tours</p>
          </div>
        </div>
      </section>
      <section className='py-7'>
        <img src="https://media.thameltravel.com/uploads/fullbanner/breakfast-at-sarangkot.webp" alt="" />



        <div className=" shadow-2xl  py-5">
          <div className="flex justify-between px-10">
            <div className='flex gap-6 items-center'><p >Overview</p>
              <p>Cost Includes</p>
              <p>Itinerary</p>
              <p>Trip Reviews</p></div>
            <Link href=""><div className='border border-b-blue-900 rounded-full lg:w-[150px] sm:w-full pt-1.5 text-center hover:bg-blue-900 hover:text-white text-blue-900 h-[35px]'>View Dates</div></Link>

          </div>
        </div>
      </section>


      <section className='bg-[#f1f0f0] py-6'>
        <div className="container mx-auto">
          <h2 className='text-[30px]  font-bold uppercase'>Similar Trips</h2>

          <div className="grid lg:grid-cols-3 gap-8 sm:grid-cols-2 pb-6">
            <Link href="/kathmandu-and-pokhara-family-tours">  <div className=' bg-white shadow pb-2 overflow-hidden'>
              <img src="https://media.thameltravel.com/uploads/package/kathmandu-pokhara-chitwan.webp" className=' transition-transform duration-400 overflow-hidden hover:scale-110' alt="" />
              <div className='px-3'>
                <h2 className='text-[20px] font-bold py-3 pt-4'>Kathmandu, Pokhara, and Chitwan Tours</h2>
                <p className=' px-3'> US$775/ Per Person</p>

                <div className='bg-[#f5f4f4] w-full justify-between  text-center items-center flex h-[40px]'>
                  <p className='flex gap-3 items-center px-3'><IoTimeOutline className='size-[20px]' /> 5 Days</p>
                </div>
              </div>
            </div></Link>
            <div className=' bg-white shadow pb-4 overflow-hidden'>
              <img src="https://media.thameltravel.com/uploads/package/nepal-family-tour.webp" className=' transition-transform duration-400 overflow-hidden hover:scale-110' alt="" />
              <div className='px-3'>
                <h2 className='text-[20px] font-bold py-3 pt-4'>Nagarkot, Chitwan, Pokhara & Kathmandu Family Tours</h2>
                <div className='bg-[#f5f4f4] w-full  h-[40px]'>
                  <p className='flex gap-3 items-center px-3 pt-2'><IoTimeOutline className='size-[20px]' /> 8 Days</p>
                </div>
              </div>
            </div>
            <div className=' bg-white shadow pb-4 overflow-hidden'>
              <img src="https://media.thameltravel.com/uploads/package/nepal-highlights-tour.webp" className=' transition-transform duration-400 overflow-hidden hover:scale-110' alt="" />
              <div className='px-3'>
                <h2 className='text-[20px] font-bold py-3 pt-4'>Nepal Highlights Tour</h2>
                <p className=' px-3'> US$775/ Per Person</p>

                <div className='bg-[#f5f4f4] w-full  h-[40px]'>
                  <p className='flex gap-3 items-center px-3 pt-2'><IoTimeOutline className='size-[20px]' /> 10 Days</p>
                </div>
              </div>
            </div>
          </div>
          <Link href="" ><div className='w-[150px] h-[50px] uppercase text-blue-900 hover:bg-blue-900 hover:text-white text-center mt-3 pt-3 lg:mx-0 sm:mx-auto border rounded-full'>See All Trips</div></Link>
        </div>
      </section>

    </>
  )
}

export default Page
