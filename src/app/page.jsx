"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { IoTimeOutline } from "react-icons/io5";
import { MdStarRate } from "react-icons/md";
import { FaPlay } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";

function page() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <>

      <section className='py-4'>
        <div className="relative z-0">
          <img className='w-full h-[100vh]' src="https://media.thameltravel.com/uploads/homeslide/desktop/annapurna-from-phewa-lake.webp" alt="" />
          <div className="absolute top-[25%] left-[15%]">
            <h2 className='text-[32px] font-bold uppercase text-black'><span className='text-[#FF7C5B]'>Cultures</span> & <span className='text-[#25518B]'>Adventures</span></h2>
            <div className="flex items-center my-4 "> <input type="text" name='search' placeholder='Search' className='lg:w-[500px] sm:w-[600px]   text-black h-[50px] px-3 bg-white rounded-[10px] outline-0' required /><button className='btn'><GoSearch className='size-[24px] -ml-[35px] text-black' /></button>
            </div>
            <h2 className='text-[20px] text-white sm:hidden lg:block mt-4 px-2 uppercase'>Trending Searches</h2>
            <div className="lg:flex sm:hidden gap-4 mt-4">
              <Link href="/classical-adventure"><div className='text-black bg-white rounded-[10px] px-3 text-start py-2'>Classical Adventures</div></Link>
              <Link href="/real-adventure"><div className='text-black bg-white rounded-[10px] px-3 text-start py-2'>Real Adventures</div></Link>

              <Link href="/luxury-adventure"><div className='text-black bg-white rounded-[10px] px-3 text-start py-2'>Luxury Adventures</div></Link>
              <Link href="/nepal-group-tours"><div className='text-black bg-white rounded-[10px] px-3 text-start py-2'> Small group Tours</div></Link>
              <Link href="/nepal-earlybird-tour-offers"><div className='text-black bg-white rounded-[10px] px-3 text-start py-2'> Earlybird Offers</div></Link>


            </div>

          </div>


        </div>
      </section>

      <section className="bg-[#25518B] py-8 ">

        <div className="container mx-auto">
          <div>
            <div className="flex lg:flex-nowrap flex-wrap gap-10 text-white justify-between">
              <div >
                <h2 className='text-[36px] my-3 font-bold uppercase'>Ways to Travel</h2>
                <p className='text-[16px] font-bold'>We offer you three authentic ways to travel with us: Classical Adventures, Real Adventures, or Luxury Adventures!</p>
                <Link href=""> <div className='bg-[#25518B] hover:bg-white hover:text-black transition-all duration-[.3s] border border-white rounded-3xl text-white w-[150px] text-center mt-3 pt-2 h-[40px]'>SEE ALL TRIPS</div></Link>
              </div>
              <div className=' flex  gap-10 '>
                <Link href="/classical-adventure">  <div className=' overflow-hidden w-[300px] relative'>
                  <img src="https://media.thameltravel.com/uploads/category/nepal-tours.webp" alt="" className=' w-[100%] h-[50vh] transition-transform duration-400 overflow-hidden hover:scale-110' />
                  <div className="absolute w-full bottom-0  let-[40%]">
                    <p className='text-[20px] text-white font-bold uppercase px-4'>CLASSICAL ADVENTURES</p>
                  </div>
                </div></Link>
                <Link href="/real-adventure">  <div className=' overflow-hidden w-[300px] relative'>
                  <img src="https://media.thameltravel.com/uploads/category/trekking-in-nepal.webp" alt="" className=' w-[100%] h-[50vh] transition-transform duration-400 overflow-hidden hover:scale-110' />
                  <div className="absolute w-full bottom-0  let-[40%]">
                    <p className='text-[20px] text-white font-bold uppercase px-4'>real ADVENTURES</p>
                  </div>
                </div></Link>
                <Link href="/luxury-adventure">  <div className=' overflow-hidden w-[300px] relative'>
                  <img src="https://media.thameltravel.com/uploads/category/family-and-exclusive-tour-in-nepal.webp" alt="" className=' w-[100%] h-[50vh] transition-transform duration-400 overflow-hidden hover:scale-110' />
                  <div className="absolute w-full bottom-0  let-[40%]">
                    <p className='text-[20px] text-white font-bold uppercase px-4'>Luxury ADVENTURES</p>
                  </div>
                </div></Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className='py-4 bg-[#F7F8FA]'>
        <div className="container mx-auto">
          <h2 className='text-[30px] font-bold uppercase py-3'>Travel with confidence</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            <div className='shadow bg-white rounded-[10px] border border-gray-100 py-6'>
              <img className='w-[100px] px-3 mb-4' src="https://media.thameltravel.com/uploads/icon/calander.svg" alt="" />
              <h2 className='font-bold text-[16px] px-4 my-3'>Safety First!</h2>
              <p className='text-[#757272fc] text-[14px] px-3'>At Thamel Travel safety is NUMBER ONE. Guests are the final decision makers, and all the arrangements are aimed at making their holiday a lifetime experience. Our four Main Core Values: Honesty, Guest Privacy, Responsible Travel, and Simple Reservation Terms & Trips with a Skillful local Leader are the main guidelines on our responsibility & behavior towards the Clients, Environment, and Communities.
              </p>
            </div>
            <div className='shadow bg-white rounded-[10px] border border-gray-100 py-6'>
              <img className='w-[100px] px-3 mb-4' src="https://media.thameltravel.com/uploads/icon/stupa.svg" alt="" />
              <h2 className='font-bold text-[16px] px-4 my-3'>Safety First!</h2>
              <p className='text-[#757272fc] text-[14px] px-3'>Our primary focus is on organizing authentic travel experiences at fair prices. Our team is clear on our focus and the specific travel services we offer to our clients, whom with love, we call our "guests". All of our trips are EXPERIENTIAL and RESPONSIBLE. Our main expertise lies in organizing Cultural Trips, Mountain Adventures, & Wellness, Yoga, and Meditation Tours.

              </p>
            </div>
            <div className='shadow bg-white rounded-[10px] border border-gray-100 py-6'>
              <img className='w-[100px] px-3 mb-4' src="https://media.thameltravel.com/uploads/icon/tour-guide.svg" alt="" />
              <h2 className='font-bold text-[16px] px-4 my-3'>Safety First!</h2>
              <p className='text-[#757272fc] text-[14px] px-3'>Besides being licensed & knowledgeable, our tour leaders are further trained to be hospitable, friendly & skillful! Small Group Tours, Personalized Tours, and Friend and Family private Holidays are led by leaders and guides based on their experiences, expertise & recent guest feedback. Our guides and leaders are trained professionals from the local communities you travel to.

              </p>
            </div>
            <div className='shadow bg-white rounded-[10px] border border-gray-100 py-6'>
              <img className='w-[100px] px-3 mb-4' src="https://media.thameltravel.com/uploads/icon/group.svg" alt="" />
              <h2 className='font-bold text-[16px] px-4 my-3'>Custom Group Size!</h2>
              <p className='text-[#757272fc] text-[14px] px-3'>Our Small Group Tours typically accommodate max 10 guests in a group ensuring personal attention. Friend and Family Private Holidays are ideal with 2 to 12 guests on a trip. For personalized tours, we accept your interests and requirements. You could choose ways to travel among Real Adventures, Classical Adventures, or Luxury Adventures, and the number of people in your group.

              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='py-4 shadow'>
        <div className="container mx-auto">
          <h2 className='text-black font-bold uppercase text-[30px]'>Book a Trip</h2>
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

      {/* trips feature start */}
      <section className='bg-[#f1f0f0] py-6'>
        <div className="container mx-auto">
          <h2 className='text-[30px]  font-bold uppercase'>Featured Trips</h2>

          <div className="grid lg:grid-cols-3 gap-8 sm:grid-cols-2 pb-6">
            <Link href="/kathmandu-and-pokhara-family-tours">  <div className=' bg-white shadow pb-2 overflow-hidden'>
              <img src="https://media.thameltravel.com/uploads/package/hotel-annapurna-view-sarangkot.webp" className=' transition-transform duration-400 overflow-hidden hover:scale-110' alt="" />
              <div className='px-3'>
                <h2 className='text-[20px] font-bold py-3 pt-4'>Kathmandu and Pokhara Luxury Tours</h2>
                <div className='bg-[#f5f4f4] w-full justify-between  text-center items-center flex h-[40px]'>
                  <p className='flex gap-3 items-center px-3'><IoTimeOutline className='size-[20px]' /> 5 Days</p>
                  <p className='flex gap-1 items-center px-3'><MdStarRate className='text-[#FF7C5B] size-[20px]' /> <MdStarRate className='text-[#FF7C5B] size-[20px]' /><MdStarRate className='text-[#FF7C5B] size-[20px]' /><MdStarRate className='text-[#FF7C5B] size-[20px]' /> 1 review</p>
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
              <img src="https://media.thameltravel.com/uploads/package/janakpur.webp" className=' transition-transform duration-400 overflow-hidden hover:scale-110' alt="" />
              <div className='px-3'>
                <h2 className='text-[20px] font-bold py-3 pt-4'>Nepal Spiritual Tour : Janakpur, Pashupatinath, Pokhara, Muktinath & Lumbini Tour</h2>
                <div className='bg-[#f5f4f4] w-full  h-[40px]'>
                  <p className='flex gap-3 items-center px-3 pt-2'><IoTimeOutline className='size-[20px]' /> 8 Days</p>
                </div>
              </div>
            </div>
          </div>
          <Link href="" ><div className='w-[150px] h-[50px] uppercase text-blue-900 hover:bg-blue-900 hover:text-white text-center mt-3 pt-3 lg:mx-0 sm:mx-auto border rounded-full'>See All Trips</div></Link>
        </div>
      </section>
      {/* trips end */}
      {/* play start */}

      <section className='py-5 bg-[#eae8e8]'>
        <div className="container  mx-auto">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-14">
            <div className=' px-4'>
              <h2 className='text-[28px] py-3 font-bold uppercase'>Inspiring positive impacts on communities through sustainable and responsible tourism!</h2>
              <p className='text-[16px] py-2 font-bold'>Welcome to Tibet, Nepal, Bhutan and North India Experiential Trips!</p>

              <p className='py-4 text-[16px] text-gray-600'>Our approach is simple. All our trips are connected with local communities be it Personalized Holidays or Small Group Tours. Whether Classical Adventures, Real Adventures, or Luxury Adventures, and through all routes in the town or remote mountains. Our team is clear on our focus and the specific travel services we offer to our clients, whom with love, we call "our guests". All of the trips we offer are EXPERIENTIAL and RESPONSIBLE.
              </p>
              <p className='py-3 text-[16px] text-gray-600'>We do NOT organize activities that involve animal abuse for recreation. And to keep the earth for our future generations too, we aim to pose the least impact on the environment. All our trips are environment, communities, and local culture friendly. All trips involve local communities in the crew, observing local traditions, and inspiring positive impacts through Travel. Our every step aims to encourage wildlife protection, and local economies, and inspire a lifestyle minimizing carbon footprints. You will travel with us for a good reason!
              </p>
              <p className='py-3 text-[16px] text-gray-600'>Our trip itineraries are curated with an experiential approach inspiring positive Impacts on the communities. All of our trips offer an authentic cultural engagement with respect for local cultures and traditions. Our storytelling portrays the local cultures, traditions, and lifestyles authentically and ethically. All of our guides and tour leaders are from local communities that you travel to. We aim to support local economies by training youths and women as guides and leaders and serving foods using local products.

              </p>
            </div>
            <div className='h-[700px] relative  justify-end'>
              <img className='w-full h-[700px] object-cover rounded-[10px]' src="https://media.thameltravel.com/uploads/video/ta-2023.webp" alt="" />

              {/* <Link href=""><div className=''>
                  <FaPlay className=' text-white' />
                </div></Link> */}
              {!showVideo && (
                <div className='absolute top-[45%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
                  <button
                    onClick={() => setShowVideo(true)}
                    className='bg-[#f94b1f] w-[50px] h-[50px] aa rounded-full flex items-center justify-center shadow-lg '
                  >
                    <FaPlay className='text-white size-[20px]  text-[20px]' />
                  </button>
                </div>
              )}

              {showVideo && (
                <>
                  {/* Overlay iframe */}
                  <iframe width="1200" height="700" className={`absolute top-[20%] right-[4%] rounded-xl shadow-lg `}
                    src="https://www.youtube.com/embed/rTcZv14HhQ4" title="#NepalAwaits" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                  {/* Close Button */}
                  <button
                    onClick={() => setShowVideo(false)}
                    className="absolute top-0 right-3 z-20 text-white bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full p-2 text-lg"
                    title="Close Video"
                  >
                    ✖
                  </button>
                </>
              )}


            </div>
          </div>
        </div>
      </section>
      {/* play end */}
      <section className='py-6 mb-4 bg-white'>
        <div className="container mx-auto">
          <h2 className='text-[30px] font-bold uppercase'>Recent Experience with Thamel Travels</h2>
          <div className="grid  sm:grid-cols-1  lg:grid-cols-3 gap-8">
            <div className="shadow relative border border-gray-200 py-6 ">
              <div className='px-4 py-4 '>
                <h2 className='text-[18px] font-bold py-2 '>Best guided Tour/Trek in Nepal</h2>
                <ul className="flex py-3">
                  <li><MdStarRate className='text-[#FF7C5B] size-[20px]' /></li>
                  <li><MdStarRate className='text-[#FF7C5B] size-[20px]' /></li>
                  <li><MdStarRate className='text-[#FF7C5B] size-[20px]' /></li>
                  <li><MdStarRate className='text-[#FF7C5B] size-[20px]' /></li>
                  <li><MdStarRate className='text-[#FF7C5B] size-[20px]' /></li>
                </ul>
                <p className='text-[15px]'>Excellent!</p>
                <p className='text-[15px] text-gray-700 py-3'>The Owners are really hands-on. The services are exceptional. Organized and flexible travel plans. Communication is not a problem. Well-guided tours, the owners/ guides are well versed on the tourist site. Transportation was not an issue. My team felt secure and safe on our 3week long Travel under this agency. Ighly recommended.</p>
              </div>
              <h4 className='text-[16px] font-bold px-4 uppercase'>Franz Reiz</h4>
              <ul className='flex gap-5'>
                <li className='border-r px-4 text-[15px] text-gray-700'>Germany</li>
                <li className='text-[15px] text-gray-700'> May 29, 2023</li>
              </ul>
              <div className=' justify-end  flex pr-6'><img className='w-[100px]' src="https://media.thameltravel.com/themes/images/webp/review-logo-tripadvisor.webp" alt="" />
              </div>
              <div className="absolute bg-white rounded-full border border-gray-200 w-[70px] h-[70px] text-center shadow-2xl bottom-[-30px] left-[40px]">
                <p className='pt-4 text-[24px] font-bold text-gray-600'>F</p>
              </div>
            </div>
            <div className="shadow relative border border-gray-200 py-6 ">
              <div className='px-4 py-4 '>
                <ul className="flex py-3">
                  <li><MdStarRate className='text-[#FF7C5B] size-[20px]' /></li>
                  <li><MdStarRate className='text-[#FF7C5B] size-[20px]' /></li>
                  <li><MdStarRate className='text-[#FF7C5B] size-[20px]' /></li>
                  <li><MdStarRate className='text-[#FF7C5B] size-[20px]' /></li>
                  <li><MdStarRate className='text-[#FF7C5B] size-[20px]' /></li>
                </ul>
                <h2 className='text-[18px] font-bold py-2 '>Thank you, Balaram, and Thamel Travel and Tours!</h2>

                <p className='text-[15px]'>Excellent!</p>
                <p className='text-[15px] text-gray-700 py-3'>I want to especially commend Balaram Pandey, Team Leader of Thamel Travel and Tours for exceptional service to me and my son as we arranged transportation to and from the Everest area -- after a cancellation due to issues beyond out control last year, to the successful completion of the trip this year despite a number of complications, he has been an amazing help at every turn. I would recommend him and the company unreservedly for any tourism needs and hope I will have the chance again soon to use his services. Thank you again, Balaram
                </p>
              </div>
              <h4 className='text-[16px] font-bold px-4 uppercase'>Elenabish</h4>
              <ul className='flex gap-5'>
                <li className='border-r px-4 text-[15px] text-gray-700'>United States</li>
                <li className='text-[15px] text-gray-700'>May 25, 2023</li>
              </ul>
              <div className=' justify-end  flex pr-6'><img className='w-[100px]' src="https://media.thameltravel.com/themes/images/webp/review-logo-tripadvisor.webp" alt="" />
              </div>
              <div className="absolute bg-white rounded-full border border-gray-200 w-[70px] h-[70px] text-center shadow-2xl bottom-[-30px] left-[40px]">
                <p className='pt-4 text-[24px] font-bold text-gray-600'>E</p>
              </div>
            </div>
            <div className="shadow relative border border-gray-200 py-6 ">
              <div className='px-4 py-4 '>
                <ul className="flex py-3">
                  <li><MdStarRate className='text-[#FF7C5B] size-[20px]' /></li>
                  <li><MdStarRate className='text-[#FF7C5B] size-[20px]' /></li>
                  <li><MdStarRate className='text-[#FF7C5B] size-[20px]' /></li>
                  <li><MdStarRate className='text-[#FF7C5B] size-[20px]' /></li>
                  <li><MdStarRate className='text-[#FF7C5B] size-[20px]' /></li>
                </ul>
                <h2 className='text-[18px] font-bold py-2 '>Unforgettable Everest Base Camp Journey with Thamel Travels & Tours!</h2>

                <p className='text-[15px]'>Excellent!</p>
                <p className='text-[15px] text-gray-700 py-3'>I had the most incredible experience trekking to Everest Base Camp, all thanks to Thamel Travels & Tours. Their impeccable arrangements, top-notch guide and porter, and unbeatable rates made this adventure unforgettable.</p>
              </div>
              <h4 className='text-[16px] font-bold px-4 uppercase'>Grand Tour</h4>
              <ul className='flex gap-5'>
                <li className='border-r px-4 text-[15px] text-gray-700'>India</li>
                <li className='text-[15px] text-gray-700'> May 10, 2023</li>
              </ul>
              <div className=' justify-end  flex pr-6'><img className='w-[100px]' src="https://media.thameltravel.com/themes/images/webp/review-logo.webp" alt="" />
              </div>
              <div className="absolute bg-white rounded-full border border-gray-200 w-[70px] h-[70px] text-center shadow-2xl bottom-[-30px] left-[40px]">
                <p className='pt-4 text-[24px] font-bold text-gray-600'>G</p>
              </div>
            </div>
          </div>
          <div className='flex gap-4  mt-10 justify-center'>
            <img src="https://media.thameltravel.com/themes/images/webp/review-logo-tripadvisor.webp" alt="" />
            <img src="https://media.thameltravel.com/themes/images/webp/review-logo-trustpilot.webp" alt="" />
          </div>
          <Link href="" ><div className='w-[180px] my-4 h-[50px]  text-blue-900 hover:bg-blue-900 hover:text-white text-center mt-3 pt-3 mx-auto border uppercase rounded-full'>Read All Reviews</div></Link>
        </div>
      </section>
      {/* read the ground  */}
      <section className="py-5 bg-[#F8F9FB]">
        <div className="container  mx-auto">
          <h2 className='text-[30px]  font-bold uppercase'>Read the Ground Experiences</h2>
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
