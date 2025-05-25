import Link from 'next/link';
import React from 'react'
import { FiShare2 } from "react-icons/fi";
import { MdStarRate } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

function Page() {
    return (
        <>
          <section className="py-4 mt-3 bg-[#25518B] text-white">
                        <div className="container mx-auto">
                            <div className="flex gap-3">
<Link   href="/" >   <p className='text-[12px] flex gap-2 items-center'>Home <IoIosArrowForward /></p></Link>
                                <p className='text-[12px] flex gap-2 items-center'>Company <IoIosArrowForward /></p>
                                <p className='text-[12px]'>About</p>
                            </div>
                        </div>
                    </section>
            <section className='py-7'>
                <img src="https://media.thameltravel.com/uploads/fullbanner/mountain-trek.webp" alt="" />
            </section>
            <section className='py-4'>
                <div className="container  mx-auto">

                    <div className=' w-[1000px] mx-auto'>
                        <div className="flex py-4 justify-between">
                            <h2 className='text-[24px] font-bold uppercase'>About</h2>
                            <Link href=""><div className='flex gap-2 items-center'><FiShare2 className='size-[20px] text-blue-700' />Share it</div></Link>
                        </div>
                        <p className='py-2 text-gray-600 text-[16px]'>Thamel Travels & Tours Pvt. Ltd is a travel company based in Kathmandu, Nepal. The company was established in 2009 by a team of 3 travel professionals with experiences of over a decade in hospitality and mountain tourism. Since 2011, the company has been owned and the efficient Sales, Marketing, and Operation teams are guided by its Chairman Mr Balaram Pandey, and Tour Director Ms Saru Upadhyaya. Mr Pandey & Ms. Upadhyaya are culture and mountain lovers and are noted experiential tourism managers in the country.

                        </p>
                        <p className='py-2 text-gray-600 text-[16px]'>Our team is clear on our focus and the specific travel services we offer to our clients, whom with love, we call "our guests". All of the trips we offer are EXPERIENTIAL and RESPONSIBLE.</p>

                        <table border="0" className='bg-gray-200 w-full'>

                            <tr className='h-[40px] bg-[rgb(235,235,235)]'>   <th className='text-[#746e6ef9]  text-start px-4 font-bold'>EXPERIENTIAL TRIPS  </th>
                                <th className='text-[#746e6ef9] font-bold text-start '>RESPONSIBLE TRAVEL	</th></tr>
                            <tr className=' h-[40px] bg-[white]'><td className='px-5 text-[#746e6ef9] font-bold'>Personalized & Custom Itinerary </td>
                                <td className='text-[#746e6ef9] font-bold'>Inspiring Positive Impacts on Communities Through Travel</td>	</tr>
                            <tr className=' h-[40px] bg-[rgb(235,235,235)]'>
                                <td className='px-5 font-bold text-[#746e6ef9]'>Authentic Cultural Engagements    	</td>
                                <td className='font-bold text-[#746e6ef9]'>Respect for Local Cultures and Traditions</td></tr>
                            <tr className=' h-[40px] bg-white'>
                                <td className='px-5 font-bold text-[#746e6ef9]'>Engaging Storytelling</td>
                                <td className='font-bold text-[#746e6ef9]'>	Authentic & Ethical Portrayals of cultures, traditions, and local lifestyles </td>
                            </tr>
                            <tr className=' h-[40px] border border-gray-100 bg-[rgb(235,235,235)]'>
                                <td className='px-5 font-bold text-[#746e6ef9]'>Support for Local Economies </td>
                                <td className='font-bold text-[#746e6ef9]'>	Trips with trained local Guides and Leaders, foods using local products</td>
                            </tr>
                            <tr className=' bg-white border border-gray-100 h-[40px]'>
                                <td className='px-5 font-bold text-[#746e6ef9]'>Sustainable Practices	</td>
                                <td className='font-bold text-[#746e6ef9]'>Wildlife Protection & minimizing Carbon Footprints</td>
                            </tr>
                        </table>
                        <p className='py-3 text-gray-600 text-[16px]'>Our travel services cover four main destinations in the Himalayas, Nepal being the epicenter. The Himalayas is a 2400 km long vast and majestic mountain range in south Asia. Most of the Himalayan region is covered by four countries - Tibet, Nepal, Bhutan, and North India. We offer trips through the four main Himalayan destinations - Tibet, Nepal, Bhutan, and North India.

                        </p>
                        <p className='py-3 text-[16px] text-gray-600'>Our main expertise lies in organizing Cultural Trips, Mountain Adventures, & Wellness, Yoga, and Meditation Tours for the last 16 years! Among the most popular travel routes across the four countries, we at Thamel Travels & Tours, invite you & offer travel services in four main travel routes in the region:

                        </p>

                        <table border="0" className='bg-gray-200 w-full py-5 my-5'>

                            <tr className='h-[40px] bg-[rgb(235,235,235)]'>
                                <th>S.NO.</th>  <th className='text-[#746e6ef9] font-bold text-start px-5'>Activities  </th>
                                <th className='text-[#746e6ef9] font-bold text-start '>Destinations.        	</th></tr>
                            <tr className=' h-[40px] bg-[white] '> <td className='px-4 text-[#746e6ef9]'>1</td><td className='px-5 text-[#746e6ef9] font-bold'>Luxury Trips </td>
                                <td className='text-[#746e6ef9] font-bold'>	in Nepal, & Bhutan</td>	</tr>
                            <tr className=' h-[40px] bg-[rgb(235,235,235)]'> <td className='px-4 text-[#746e6ef9]'>2</td>
                                <td className='px-5 font-bold text-[#746e6ef9]'>	Classical Adventures, Hiking, Trekking, & Expeditions  	</td>
                                <td className='font-bold text-[#746e6ef9]'>	in Nepal, Bhutan, & Tibet</td></tr>
                            <tr className=' h-[40px] bg-white'> <td className='px-4 text-[#746e6ef9]'>3</td>
                                <td className='px-5 font-bold text-[#746e6ef9]'>	Across the Himalaya Tours in one Itinerary</td>
                                <td className='font-bold text-[#746e6ef9]'>		through Tibet, Nepal, & Bhutan </td>
                            </tr>
                            <tr className=' h-[40px] border border-gray-100 bg-[rgb(235,235,235)]'> <td className='px-4 text-[#746e6ef9]'>4</td>
                                <td className='px-5 font-bold text-[#746e6ef9]'>	Buddhist, & Hindu Circuit Pilgrimage & Wellness Tours  </td>
                                <td className='font-bold text-[#746e6ef9]'>	through North India, Nepal, and Tibet</td>
                            </tr>

                        </table>
                        <p className="py-5 text-gray-600">The Himalayas in itself is an adventure travel destination and also has inspired lives and multiple cultural traditions in its history. Mainly the Hindu and Buddhist cultural traditions have emerged, developed, and spread from this region, with Nepal being the center of both traditions.</p>

                        <p className='py-4 text-gray-600'>To these four destinations, we specialize in personalized Adventures, Private holidays, and Small Group Tours. At Thamel Travel, we offer you three distinct tour styles to enjoy your holiday with us. Each of them carries specific features of traveling.</p>

                        <table border="0" className='bg-gray-200 w-full py-5 my-5'>

                            <tr className='h-[40px] bg-[rgb(235,235,235)]'>
                                <th className='text-[#746e6ef9] font-bold text-start px-5'>Small Group Tours  </th>
                                <th className='text-[#746e6ef9] font-bold text-start '>Personalized Adventures	      	</th>
                                <th className='text-[#746e6ef9] font-bold text-start '>Friend & Family Private holidays</th></tr>
                            <tr className=' h-[40px] bg-[white] '> <td className='px-5 text-[#746e6ef9] font-bold'> Classical & Established routes	 </td>
                                <td className='text-[#746e6ef9] font-bold'>	Customized & Experiential routes	</td>
                                <td className='text-[#746e6ef9] font-bold'>	Classical & Customizable routes	</td>
                            </tr>
                            <tr className=' h-[40px] bg-[rgb(235,235,235)]'>
                                <td className='px-5 font-bold text-[#746e6ef9]'>	Group of max 10 People	 	</td>
                                <td className='font-bold text-[#746e6ef9]'>	3-Star Hotels & Lodges, Tents	</td>
                                <td className='font-bold text-[#746e6ef9]'>	5-Star Hotel & Boutique Resorts</td>
                            </tr>
                            <tr className=' h-[40px] bg-[white]'>
                                <td className='px-5 font-bold text-[#746e6ef9]'>	Dinner & Breakfasts	 	</td>
                                <td className='font-bold text-[#746e6ef9]'>	Breakfasts		</td>
                                <td className='font-bold text-[#746e6ef9]'>	Dinners, Breakfasts, & Lunch</td>
                            </tr>
                            <tr className=' h-[40px] bg-[rgb(235,235,235)]'>
                                <td className='px-5 font-bold text-[#746e6ef9]'>Round Trip guided Sightseeing		</td>
                                <td className='font-bold text-[#746e6ef9]'>Activities with guide(s)		</td>
                                <td className='font-bold text-[#746e6ef9]'>	Round Trip guided by a Leader</td>
                            </tr>
                            <tr className=' h-[40px] bg-[white]'>
                                <td className='px-5 font-bold text-[#746e6ef9]'>Heritage Sites fees Included			</td>
                                <td className='font-bold text-[#746e6ef9]'>Heritage Sites Fees Included			</td>
                                <td className='font-bold text-[#746e6ef9]'>	Heritage Sites Fees Included</td>
                            </tr>
                            <tr className=' h-[40px] bg-[rgb(235,235,235)]'>
                                <td className='px-5 font-bold text-[#746e6ef9]'>Cultures, Natures, Soft Adventures				</td>
                                <td className='font-bold text-[#746e6ef9]'>All kinds of Activities				</td>
                                <td className='font-bold text-[#746e6ef9]'>	Cultures, Natures, Light Adventures
                                </td>
                            </tr>

                        </table>
                        <p className="py-4 text-[#746e6ef9]">We are a recognized and established travel company for excellent tour and trek services at very reasonable prices. We have always dedicated ourselves to warm hospitality and quality services to our guests. Our success stories consist of not only the hard work of our team members but also the drive of confidence and professionalism toward the satisfaction of the guests.</p>

                        <span className="underline font-bold text-[#746e6ef9]">Company Values & Trip Guidelines</span>
                        <p className='py-4 text-[#746e6ef9]'>At Thamel Travel safety is NUMBER ONE. Guests are the final decision makers, and all the arrangements are aimed at making their holiday a lifetime experience. The four Main Core Values that Thamel Travel upholds are: Honesty, Guest Privacy, Responsible Travel, and Simple Reservation Terms & Trips with a Skillful Leader. These are the main guidelines on our responsibility & behavior towards the Guests, Environment, and Communities.</p>


                        <table border="0" className='bg-gray-200 w-full py-5 my-5'>



                            <tr className=' h-[40px]  bg-[rgb(235,235,235)]'>
                                <td className='px-5 font-bold text-[#746e6ef9]'>	Honesty      		</td>
                                <td className='font-bold text-[#746e6ef9]'>	Responsible Travel       			</td>
                                <td className='font-bold text-[#746e6ef9]'>	Guest Privacy      	</td>
                                <td className='font-bold text-[#746e6ef9]'>	Simplified Reservations Terms      </td>
                            </tr>


                        </table>
                        <div className='py-3'>
                            <p className='py-3 text-gray-600'> <span className='underline   font-bold'>Honesty:</span>  Transparency is the most integral part of our honesty. All costs offered do not have any hidden fees. Trip Inclusions and Exclusions are clearly mentioned, and any possible extra expenses or extra available activities are also suggested with possible expenses. We are committed to transparent conversation, transactions, and services!</p>

                            <p className='py-3 text-gray-600'><span className='underline   font-bold'>Guest’s Privacy:</span> We are committed to keeping the guests’ identities, contact information, and schedules private & safe. Every trip reservation is simply private. Privacy is maintained on all trips including small group joining tours. Even when we post the group photos of the trip activities, we do so with trip names only & with consent from the group.</p>

                            <p className='py-3 text-gray-600'><span className='underline  font-bold'>Responsible Travel:</span> We do NOT organize activities that involve animal abuse for recreation. And to keep the earth for our future generations too, we aim to pose the least impact on the environment. All our trips are environment, communities, and local culture friendly. All trips involve local communities in the crew, observing local traditions, and inspiring positive impacts through Travel. You will travel with us for a good reason!</p>
                            <p className='py-3 text-gray-600'><span className='underline font-bold '>Making Reservation, Deposit Safety, Schedule Flexibility & Trip with a Skillful Local Leader: </span>  For every reservation, our guests will receive an itinerary with important information on the schedules, prices, trip preparations, arrival arrangements, reservation details, and available extra activities. Our booking process requires a 20% deposit of total trip fees (plus full flight fares if an international flight is involved), with the balance due upon arrival. Guests may also pay in full at booking. Date changes are free, except for flight change fees & the deposits are valid for a lifetime! We ensure your trip with a skillful local leader from the communities you travel!

                            </p><p className='py-3 text-gray-600'>Besides being licensed & knowledgeable, our tour leaders are further trained to be hospitable, friendly, & skillful! All private trips & even small group tours can be personalized & organized as private trips with variations in tour costs. All Group Join Tours are limited with a 10pax maximum, and schedules are fixed and can not be modified.</p>
                            <p className='py-3 text-gray-600'><span className='underline font-bold'>Office & the hospitable Team</span></p>

                            <p className='py-2 text-gray-600'>The company office is based in Kathmandu, Nepal. We welcome and invite you to make a connection for trips and information with our team.
                            </p>
                            <ul className='py-4 text-gray-600'>
                                <li className='py-3'>Chaksibari Marg Street,</li>
                                <li className='py-3'>Thamel, Kathmandu - 26, Bagmati Province, Nepal</li>
                                <li className='py-3'>Email: thameltravel@gmail.com</li>
                                <li className='py-3'>WhatsApp: +977 9841697870 (Balaram)</li>
                                <li className='py-3'>WhatsApp: +977 9841963006 (Saru)</li>
                            </ul>

                            <p className="py-4 text-gray-600">Our office is located at the same place since its establishment. Mr Balaram & Ms Saru are the team leaders at Thamel Travels & Tours. We both are a PhD fellows in Nepalese History, Culture, and Archaeology. We ensure you a trip with the best guides and group leaders in the country. We have trained them to be the most friendly, professional, and hospitable guides and group leaders. We have ensured our guides, and group leaders understand the trips they are leading. Routinely, we both also lead groups, and families to our beautiful destinations.</p>

                            <span className='underline font-bold py-3'>Partners Welcome</span>

                            <p className="py-3 text-gray-600">We have earned some good friends in the travel industry in the last 16 years! We invite new partners to join hands with us to inspire a positive impact on communities through travel! Let us work together to offer the best travel experiences to your clients.

                            </p>
                            <span className="py-3  underline font-bold">Company Recognitions:</span>
                            <p className='pt-3 pb-8 text-gray-600'>
                                Thamel Travels & Tours P Ltd is a registered company with the Government of Nepal, the Ministry of Culture, Tourism, and Civil Aviation (Lic No: 1560). We are an active member of TAAN (Trekking Agents Association of Nepal), NMA (Nepal Mountaineering Association), KEEP (Kathmandu Environment Education Project), and NTB (Nepal Tourism Board).</p>





                        </div>
                    </div>
                </div>

            </section>
            <section className='py-6 my-5 bg-[#F7F8FA]'>
                <div className="container mx-auto">
                    <h2 className='text-[30px] font-bold uppercase'>Travel with confidence</h2>
                    <div className="grid grid-cols-4 gap-6 mt-4">
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
            <section className='py-6 mb-4 bg-white'>
                <div className="container mx-auto">
                    <h2 className='text-[30px]  font-bold uppercase'>Recent Experience with Thamel Travels</h2>
                    <div className="grid  grid-cols-3 gap-8">
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
        </>
    )
}

export default Page
