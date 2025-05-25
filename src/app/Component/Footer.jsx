import Link from 'next/link';
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <>
      <section className='py-5 bg-[#eae8e8]'>
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h2 className='text-[20px] py-3 uppercase font-bold'>About Us</h2>
              <ul>
                <Link href=""><li className='py-1.5 text-[14px] hover:underline'>About</li></Link>
                <Link href=""><li className='py-1.5 text-[14px] hover:underline'>Leader and Guides</li></Link>
                <Link href=""><li className='py-1.5 text-[14px] hover:underline'>Tour Information</li></Link>
                <Link href=""><li className='py-1.5 text-[14px] hover:underline'>Responsible Travel</li></Link>
                <Link href=""><li className='py-1.5 text-[14px] hover:underline'>Partner with Us</li></Link>
                <Link href=""><li className='py-1.5 text-[14px] hover:underline'>Office & Contacts</li></Link>
              </ul>
            </div>
            <div>
              <h2 className='text-[20px] py-3 font-bold uppercase'>Booking</h2>
              <ul>
                <Link href=""><li className='py-1.5 text-[14px] hover:underline'>Travel Styles</li></Link>
                <Link href=""><li className='py-1.5 text-[14px] hover:underline'>How to Book?</li></Link>
                <Link href=""><li className='py-1.5 text-[14px] hover:underline'>Group Booking</li></Link>
                <Link href=""><li className='py-1.5 text-[14px] hover:underline'>My Reservations</li></Link>
                <Link href=""><li className='py-1.5 text-[14px] hover:underline'>Terms and Conditions</li></Link>
              </ul>
            </div>
            <div>
              <h2 className='text-[20px] py-3 font-bold uppercase'>Before You Go</h2>
              <ul>
                <Link href=""><li className='py-1.5 text-[14px] hover:underline'>Borders and Visa Info</li></Link>
                <Link href=""><li className='py-1.5 text-[14px] hover:underline'>Seasons</li></Link>
                <Link href=""><li className='py-1.5 text-[14px] hover:underline'>Trip Styles</li></Link>
                <Link href=""><li className='py-1.5 text-[14px] hover:underline'>Packing Lists</li></Link>
                <Link href=""><li className='py-1.5 text-[14px] hover:underline'>Foods and Festivals</li></Link>
              </ul>
            </div>
            <div>
              <h2 className='text-[20px] py-3 font-bold uppercase'>Relations & Recognitions</h2>
              <ul className='flex gap-4'>
                <li className='py-1.5 text-[14px] hover:underline'><img className='w-[60px] h-[60px]' src="https://media.thameltravel.com/themes/images/svg/associated/nepal-goverment.svg" alt="" /></li>
                <li className='py-1.5 text-[14px] hover:underline'><img className='w-[60px] h-[60px]' src="https://media.thameltravel.com/themes/images/svg/associated/nma.svg" alt="" /></li>
                <li className='py-1.5 text-[14px] hover:underline'><img className='w-[60px] h-[60px]' src="https://media.thameltravel.com/themes/images/svg/associated/taan.svg" alt="" /></li>
                <li className='py-1.5 text-[14px] hover:underline'><img className="w-[60px] h-[60px]" src="https://media.thameltravel.com/themes/images/svg/associated/ntb.svg" alt="" /></li>
              </ul>
              <h2 className='text-[18px] font-bold mt-3'>Payments</h2>
              <Link href=""><div className='py-1.5 text-[14px] hover:underline'><img className='w-[300px] h-[100px]' src="https://media.thameltravel.com/themes/images/svg/payment/pay-cards01.svg" alt="" /></div></Link>
            </div>
          </div>
        </div>
      </section>
      <footer className='bg-[#082346] text-white py-5'>
        <div className="container  mx-auto">
          <div className="grid py-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className='flex gap-4 items-center'><FaWhatsapp className='size-[40px] text-[#5de348] ' />
              <div>
                <p className='text-gray-400 text-[14px]'>  Connect for Trips & Information</p>
                <h3 className='text-white font-bold text-[18px]'>+977 9841697870</h3>
              </div>
            </div>

            <div className='flex gap-4 items-center'>
              <FiMail className='size-[40px] text-white' />

              <div>
                <p className='text-[14px] text-gray-400'>Enquire a Tour & Information</p>
                <Link href="mailto:thameltravel@gmail.com"><h3 className='text-white text-[18px] font-bold'>thameltravel@gmail.com</h3></Link>
              </div>
            </div>
            <div className='sm:pt-4 text-center'>
              <h2 className='text-[18px] text-white uppercase py-3'>Stay Connected</h2>
              <ul className="flex px-25 gap-4">
                <Link href="https://facebook.com/"><FaFacebook className='size-[24px] hover:text-blue-700 ' /></Link>
                <Link href="https://twitter.com/"><FaTwitter className='size-[24px]  hover:text-blue-700' /></Link>
                <Link href="https://instagram.com/"><FaInstagram className='size-[24px]  hover:text-pink-700' /></Link>
                <Link href="https://linkedin.com/"><FaLinkedinIn className='size-[24px] hover:text-blue-700 ' /></Link>
                <Link href="https://pinterset.com/"><FaPinterestP className='size-[24px] hover:text-red-500 ' /></Link>
                <Link href="https://youtube.com/"><IoLogoYoutube className='size-[24px] hover:text-red-500 ' /></Link>
              </ul>
            </div>
          </div>
          <div className="py-4 pb-9 text-center">
            <Link href="https://thmeltravel.com"><h2 className='text-[18px] uppercase py-3'>© 2025, Thamel Travels & Tours Pvt. Ltd. All Rights Reserved. </h2></Link>
            <p className='flex justify-center text-[14px] gap-3'>Crafted by: <img src="https://media.thameltravel.com/themes/images/imagine-web-solution.svg" alt="" /></p>
          </div>
        </div>
        <Link href="https://wa.me/97798456789">  <div className=" bg-[#0BAB54] w-[55px] h-[55px] items-center rounded-full bottom-[50px] fixed ml-[2%]">
          <BsWhatsapp className='size-[36px] mt-2.5 ml-2.5 text-white' />
        </div></Link>


      </footer>
    </>
  )
}

export default Footer
