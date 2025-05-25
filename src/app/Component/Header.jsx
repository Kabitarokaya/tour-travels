"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { PiList } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { BsListNested } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";

function Header() {
    const [mobilemenuopen, setMobilemenuopen] = useState(false)
    const [mobilepluse, setMobilepluse] = useState(false)
    const [header, setHeader] = useState(false)
    const scrollHeader = () => {
        if (window.scrollY >= 100) {
            setHeader(true)
        }
        else {
            setHeader(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHeader)
    }, [])

    const [isToursOpen, setIsToursOpen] = useState(false);

    const toggleTours = () => {
        setIsToursOpen(!isToursOpen);
    };

    const [isDealsOpen, setIsDealsOpen] = useState(false);

    const toggleDeals = () => {
        setIsDealsOpen(!isDealsOpen);
    };

    const [isDestinationOpen, setIsDestinationOpen] = useState(false);

    const toggleDestination = () => {
        setIsDestinationOpen(!isDestinationOpen);
    };
    return (
        <>
            <div className={header ? "fixed w-full z-10 kala bg-white" : "bg-[transparent]"}>
                <header className='py-1   header bg-white z-50 '>
                    <div className="container  flex items-center justify-between mx-auto">
                        <div className='lg:flex sm:hidden gap-30 items-center '>
                            <Link href="/"> <img className='w-[150px]' src="https://media.thameltravel.com/themes/images/logo.svg" alt="" /></Link>
                            <ul className="flex  gap-10">
                                <li className='flex gap-2 hover:text-[#FF8070] items-center'><Link href="/about">About</Link></li>
                                <li className='flex gap-2    hover:text-[#FF8070] items-center ' onClick={toggleTours}>Tours <IoIosArrowDown className={`cursor-pointer  ${isToursOpen ? "rotate-180" : "rotate-0"}`} /></li>
                                {/* drop down */}
                                {isToursOpen && (
                                    <div className="absolute w-[900px]  left-[20px]   top-20 gap-2  bg-[#d8d9d9] py-3  hover:flex flex-col  shadow-md transition-all z-10">
                                        <div className="grid grid-cols-3 gap-5 px-4 py-5">
                                            <div>
                                                <Link href=""><h2 className='text-blue-800 font-bold text-[16px]'>Small Group Tours</h2></Link>
                                                <ul>
                                                    <Link href=""><li className='text-[14px] py-1 text-black'>Annapurna Base Camp Trek</li></Link>
                                                    <Link href=""><li className='text-[14px] py-1 text-black'>Everest Base Camp Trekking</li></Link>
                                                    <Link href=""><li className='text-[14px] py-1 text-black'>Kathmandu Valley Real Adventures</li></Link>
                                                    <Link href=""><li className='text-[14px] py-1 text-black'>Annapurna Circuit Trek with Tilicho Lake</li></Link>
                                                    <Link href=""><li className='text-[14px] py-1 text-black'>Classical Nepal Adventures</li></Link>
                                                </ul>
                                            </div>
                                            <div>
                                                <Link href=""><h2 className='text-blue-800 font-bold text-[16px]'>Personalized Tours</h2></Link>
                                                <ul>
                                                    <Link href=""><li className='text-[14px] py-1 text-black'>Amazing Nepal Tours</li></Link>
                                                    <Link href=""><li className='text-[14px] py-1 text-black'>Glimpse of Nepal and Bhutan Tours</li></Link>
                                                    <Link href=""><li className='text-[14px] py-1 text-black'>Kathmandu and Pokhara Luxury Tours</li></Link>

                                                </ul>
                                            </div>
                                            <div>
                                                <Link href=""><h2 className='text-blue-800 font-bold text-[16px]'> Friend & Family Private Holidays</h2></Link>
                                                <ul>
                                                    <Link href=""><li className='text-[14px] py-1 text-black'>Kathmandu, Pokhara, and Chitwan Tours</li></Link>
                                                    <Link href=""><li className='text-[14px] py-1 text-black'>Nepal Highlights Tour</li></Link>
                                                    <Link href=""><li className='text-[14px] py-1 text-black'>Nagarkot, Chitwan, Pokhara & Kathmandu Family Tours</li></Link>
                                                    <Link href=""><li className='text-[14px] py-1 text-black'>Nepal Spiritual Tour : Janakpur, Pashupatinath, Pokhara, Muktinath & Lumbini Tour</li></Link>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>)}

                                {/* drop down end */}


                                <li className='flex hover:text-[#FF8070] gap-2 items-center ' onClick={toggleDeals}>Deals <IoIosArrowDown className={`cursor-pointer  ${isDealsOpen ? "rotate-180" : "rotate-0"}`} /></li>
                                {/* dropdown */}
                                {isDealsOpen && (
                                    <div className="absolute right-0 left-[20%] top-30 w-[900px]   gap-2  bg-[#F9FBFC] py-3  hover:flex flex-col  shadow-md transition-all z-10">
                                        <div className="grid grid-cols-3 gap-5 px-4 py-5">
                                            <div>
                                                <Link href=""><h2 className='text-blue-800 font-bold text-[16px]'>EarlyBird Offers</h2></Link>
                                                <ul>
                                                    <Link href=""><li className='text-[14px] py-1'>Annapurna Base Camp Trek</li></Link>
                                                    <Link href=""><li className='text-[14px] py-1'>Everest Base Camp Trekking</li></Link>
                                                    <Link href=""><li className='text-[14px] py-1'>Annapurna Circuit Trek with Tilicho Lake</li></Link>
                                                    <Link href=""><li className='text-[14px] py-1'>Classical Nepal Adventures</li></Link>
                                                </ul>
                                            </div>
                                            <div>
                                                <Link href=""><h2 className='text-blue-800 font-bold text-[16px]'>Family Holiday Deals</h2></Link>
                                                <ul>
                                                    <Link href=""><li className='text-[14px] py-1'>Kathmandu and Pokhara Luxury Tours</li></Link>
                                                    <Link href=""><li className='text-[14px] py-1'>Nagarkot, Chitwan, Pokhara & Kathmandu Family Tours</li></Link>
                                                    <Link href=""><li className='text-[14px] py-1'>Nepal Spiritual Tour : Janakpur, Pashupatinath, Pokhara, Muktinath & Lumbini Tour</li></Link>

                                                </ul>
                                            </div>
                                            <div>
                                                <Link href=""><h2 className='text-blue-800 font-bold text-[16px]'> Exclusive and Luxury Tour Deals</h2></Link>
                                                <ul>

                                                    <Link href=""><li className='text-[14px] py-1'>Pashupatinath & Muktinath Darshan Tour   </li></Link>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>)}
                                {/* dropdown */}

                                <li className='flex gap-2 hover:text-[#FF8070] items-center ' onClick={toggleDestination}>Destinations <IoIosArrowDown className={`cursor-pointer  ${isDestinationOpen ? "rotate-180" : "rotate-0"}`} /></li>
                                {/* dropdown */}
                                {isDestinationOpen && (
                                    <div className="absolute right-0 left-[30%] top-30 w-[900px]    gap-2  bg-[#F9FBFC] py-3  hover:flex flex-col  shadow-md transition-all z-10">
                                        <div className="grid grid-cols-3 gap-5 px-4 py-5">
                                            <div>
                                                <Link href=""><h2 className='text-blue-800 font-bold text-[16px]'>Nepal</h2></Link>

                                            </div>
                                            <div>
                                                <Link href=""><h2 className='text-blue-800 font-bold text-[16px]'>Nepal and Bhutan</h2></Link>
                                                <ul>
                                                    <Link href=""><li className='text-[14px] py-1'>Glimpse of Nepal and Bhutan Tours</li></Link>

                                                </ul>
                                            </div>
                                            <div>
                                                <Link href=""><h2 className='text-blue-800 font-bold text-[16px]'> Tibet, Nepal, Bhutan, and North India</h2></Link>

                                            </div>
                                        </div>
                                    </div>)}
                                {/* dropdown */}

                            </ul>

                        </div>
                        <div className='  items-center sm:hidden lg:flex gap-8'>
                            <FaWhatsapp className='size-[28px] text-green-600 ' />
                            <Link href="https://wa.me/9779841697870"><p className='text-black'>+977 9841697870 (Bala)</p>
                            </Link>
                            <GoSearch className=' sm:block  size-[28px] text-blue-900' />
                        </div>

                    </div>
                    {/* small block */}
                    <div className="container lg:hidden sm:flex items-center p-6 font-[500] text-white justify-between mx-auto">


                        <div className='flex gap-[400px] items-center'>
                            <div className=" border w-[150px] items-center ">
                                <Link href="/"> <img className='w-full' src="https://media.thameltravel.com/themes/images/logo.svg" alt="" /></Link>


                            </div>
                            <div className='  border-red-900 border'>
                                {!mobilemenuopen ? (
                                    <BsListNested className='size-[32px] text-red-900 ' onClick={() => setMobilemenuopen(true)} />
                                )
                                    : (
                                        <RxCross2 className='size-[32px] text-red-900' onClick={() => setMobilemenuopen(false)} />)

                                }

                            </div>
                            <div className='fixed top-[20%] border  px-20 ka grid grid-rows-2 ml-[-8%]  py-20 box-border z-[99] text-[20px] bg-[#25518B]' style={{ transform: mobilemenuopen && "translateY(0%)" }}>

                                <ul className="grid grid-rows-1  gap-10">
                                    <li className='flex gap-2 hover:text-[#FF8070] items-center'><Link href="/about">About</Link></li>
                                    <Link href="" className='relative transition-all '><li className='flex justify-between px-3   hover:text-[#FF8070] items-center '>Tours
                                        {!mobilepluse ? (
                                            <MdAdd className='size-[30px]' onClick={() => setMobilepluse(true)} />
                                        ) :
                                            (

                                                <FaMinus className='size-[30px]' onClick={() => setMobilepluse(false)} />
                                            )
                                        }
                                    </li>
                                        {/* drop down */}
                                        <div className="absolute right-0 left-[40px] top-10 w-[900px] hidden      gap-2  bg-[#F9FBFC] py-3   hover:flex flex-col  shadow-md transition-all z-10" style={{ transform: mobilepluse && "transla10%)" }}>
                                            <div className="grid grid-cols-3 gap-5 px-4 py-5">
                                                <div>
                                                    <Link href=""><h2 className='text-blue-800 font-bold text-[16px]'>Small Group Tours</h2></Link>
                                                    <ul>
                                                        <Link href=""><li className='text-[14px] py-1 text-black'>Annapurna Base Camp Trek</li></Link>
                                                        <Link href=""><li className='text-[14px] py-1 text-black'>Everest Base Camp Trekking</li></Link>
                                                        <Link href=""><li className='text-[14px] py-1 text-black'>Kathmandu Valley Real Adventures</li></Link>
                                                        <Link href=""><li className='text-[14px] py-1 text-black'>Annapurna Circuit Trek with Tilicho Lake</li></Link>
                                                        <Link href=""><li className='text-[14px] py-1 text-black'>Classical Nepal Adventures</li></Link>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <Link href=""><h2 className='text-blue-800 font-bold text-[16px]'>Personalized Tours</h2></Link>
                                                    <ul>
                                                        <Link href=""><li className='text-[14px] py-1 text-black'>Amazing Nepal Tours</li></Link>
                                                        <Link href=""><li className='text-[14px] py-1 text-black'>Glimpse of Nepal and Bhutan Tours</li></Link>
                                                        <Link href=""><li className='text-[14px] py-1 text-black'>Kathmandu and Pokhara Luxury Tours</li></Link>

                                                    </ul>
                                                </div>
                                                <div>
                                                    <Link href=""><h2 className='text-blue-800 font-bold text-[16px]'> Friend & Family Private Holidays</h2></Link>
                                                    <ul>
                                                        <Link href=""><li className='text-[14px] py-1'>Kathmandu, Pokhara, and Chitwan Tours</li></Link>
                                                        <Link href=""><li className='text-[14px] py-1'>Nepal Highlights Tour</li></Link>
                                                        <Link href=""><li className='text-[14px] py-1'>Nagarkot, Chitwan, Pokhara & Kathmandu Family Tours</li></Link>
                                                        <Link href=""><li className='text-[14px] py-1'>Nepal Spiritual Tour : Janakpur, Pashupatinath, Pokhara, Muktinath & Lumbini Tour</li></Link>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* drop down end */}

                                    </Link>
                                    <Link href="/nepal-tour-offer/" className='relative transition-all '> <li className='flex justify-between px-3 hover:text-[#FF8070] items-center '>Deals     {!mobilepluse ? (
                                        <MdAdd className='size-[30px]' onClick={() => setMobilepluse(true)} />
                                    ) :
                                        (

                                            <FaMinus className='size-[30px]' onClick={() => setMobilepluse(false)} />
                                        )
                                    }


                                    </li>
                                        {/* dropdown */}
                                        <div className="absolute right-0 left-[7%] top-20 w-[900px] hidden  gap-2  bg-[#F9FBFC] py-3  hover:flex flex-col  shadow-md transition-all z-10">
                                            <div className="grid grid-cols-3 gap-5 px-4 py-5">
                                                <div>
                                                    <Link href=""><h2 className='text-blue-800 font-bold text-[16px]'>EarlyBird Offers</h2></Link>
                                                    <ul>
                                                        <Link href=""><li className='text-[14px] py-1 text-black'>Annapurna Base Camp Trek</li></Link>
                                                        <Link href=""><li className='text-[14px] py-1 text-black'>Everest Base Camp Trekking</li></Link>
                                                        <Link href=""><li className='text-[14px] py-1 text-black'>Annapurna Circuit Trek with Tilicho Lake</li></Link>
                                                        <Link href=""><li className='text-[14px] py-1 text-black'>Classical Nepal Adventures</li></Link>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <Link href=""><h2 className='text-blue-800 font-bold text-[16px]'>Family Holiday Deals</h2></Link>
                                                    <ul>
                                                        <Link href=""><li className='text-[14px] py-1 text-black'>Kathmandu and Pokhara Luxury Tours</li></Link>
                                                        <Link href=""><li className='text-[14px] py-1 text-black'>Nagarkot, Chitwan, Pokhara & Kathmandu Family Tours</li></Link>
                                                        <Link href=""><li className='text-[14px] py-1 text-black'>Nepal Spiritual Tour : Janakpur, Pashupatinath, Pokhara, Muktinath & Lumbini Tour</li></Link>

                                                    </ul>
                                                </div>
                                                <div>
                                                    <Link href=""><h2 className='text-blue-800 font-bold text-[16px]'> Exclusive and Luxury Tour Deals</h2></Link>
                                                    <ul>

                                                        <Link href=""><li className='text-[14px] py-1'>Pashupatinath & Muktinath Darshan Tour   </li></Link>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* dropdown */}
                                    </Link>
                                    <Link href="/destination/" className='relative transition-all '><li className='flex justify-between px-3  hover:text-[#FF8070] items-center '>Destinations     {!mobilepluse ? (
                                        <MdAdd className='size-[30px]' onClick={() => setMobilepluse(true)} />
                                    ) :
                                        (

                                            <FaMinus className='size-[30px]' onClick={() => setMobilepluse(false)} />
                                        )
                                    }


                                    </li>
                                        {/* dropdown */}
                                        <div className="absolute right-0 left-[10%] top-20 w-[900px]  hidden  gap-2  bg-[#F9FBFC] py-3  hover:flex flex-col  shadow-md transition-all z-10">
                                            <div className="grid grid-cols-3 gap-5 px-4 py-5">
                                                <div>
                                                    <Link href=""><h2 className='text-blue-800 font-bold text-[16px]'>Nepal</h2></Link>

                                                </div>
                                                <div>
                                                    <Link href=""><h2 className='text-blue-800 font-bold text-[16px]'>Nepal and Bhutan</h2></Link>
                                                    <ul>
                                                        <Link href=""><li className='text-[14px] py-1 text-black'>Glimpse of Nepal and Bhutan Tours</li></Link>

                                                    </ul>
                                                </div>
                                                <div>
                                                    <Link href=""><h2 className='text-blue-800 font-bold text-[16px]'> Tibet, Nepal, Bhutan, and North India</h2></Link>

                                                </div>
                                            </div>
                                        </div>
                                        {/* dropdown */}
                                    </Link>
                                </ul>

                            </div>
                        </div>
                    </div>

                </header>


            </div>


        </>
    )
}

export default Header
