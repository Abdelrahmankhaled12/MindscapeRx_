// Import necessary modules and assets
import { faCheck, faArrowUp } from '@fortawesome/free-solid-svg-icons'; // Font Awesome icons for checkmarks and arrows
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Font Awesome component for rendering icons
import Image from 'next/image'; // Next.js optimized image component
import React from 'react'; // React library for building components

import logo from '../../assets/logo2.png'; // Logo image for Mindscape Rx

// Functional component for the "Join Now" section
const JoinNow = ({ text }: { text: boolean }) => {
    return (
        <div className="pt-[40px] pb-[40px] rounded-bl-[50px] rounded-br-[50px] mb-[50px]"
        style={{background: "linear-gradient(34deg, rgb(255, 203, 0) 5%, rgb(158 240 33) 26%, rgb(87, 233, 79) 51%, rgb(21, 169, 219) 65%, rgb(53, 117, 189) 100%)"}}
        
        >
            {/* Gradient background with rounded bottom corners */}
            <div className='w-full max-w-[900px] mx-auto px-5 py-3 xl:px-0 xl:py-4'>
                {
                    !text && (
                        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                            <h2 className='mb-3 text-[#000] text-[45px] text-center'>Program Pricing</h2>
                            <p className='leading-7 text-[#000] text-[15px] text-center mb-8'>
                                We offer two diffrerent Mindscape Rx month-to-month plans. You select the plan that bes serves your individual <br /> needs at his time. You can upgrade, downgrade, or cancel your plan at any time, with 30 days notice.
                            </p>
                        </div>

                    )
                }
                {/* Centered container with maximum width */}
                <div className="box bg-[#ffffff] p-10 flex flex-col md:flex-row items-center justify-center gap-0 md:gap-10 rounded-[40px]" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                    {/* White box with padding, responsive flex layout */}
                    <div className="mb-8 md:mb-0 relative">
                        {/* Left section: Membership logo and price */}
                        <div className="logo flex items-center">
                            <Image
                                src={logo}
                                alt="Mindscape Rx Logo"
                                width={100}
                                height={100}
                                className="mb-4"
                            />
                            {/* Logo and text */}
                            <div className='pl-3 leading-[1.2]'>
                                <p className='font-medium text-2xl'>Mindscape Rx</p>
                                <p className='text-[29px] font-bold'>Membership</p>
                            </div>
                        </div>

                        {/* Pricing information */}
                        <div className="text-[60px] pl-2 font-bold text-blue-500 text-center border border-dashed border-r-0 border-l-0 border-gray-500/40 relative">
                            <span className='text-[30px] absolute top-2 left-8 font-medium'>$</span>
                            199
                            <span className="text-sm text-[#777777bd] font-medium">/ MONTHLY</span>
                        </div>

                        {/* "Join Now" button */}
                        <button className='group flex font-bold gap-2 w-[250px] bg-black p-3 text-yellow-500 rounded-full text-center justify-center items-center transition-all duration-500 mt-4 md:mt-0 md:absolute bottom-[-65px] border border-solid border-black hover:text-black hover:bg-[#ffffff]'>
                            Join Now
                            <div>
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    className='text-yellow-500 w-[14px] rotate-[45deg] duration-500 group-hover:text-black group-hover:bg-transparent'
                                />
                            </div>
                        </button>
                    </div>

                    {/* Right section: Membership benefits */}
                    <div className="space-y-5 flex-1">
                        {/* List of membership benefits */}
                        <div className="flex items-start">
                            <div className="mr-2 circle">
                                <FontAwesomeIcon icon={faCheck} className='w-[13px] text-[#ffffff]' />
                            </div>
                            <p className='flex-1'>Choose Either Nasal Spray or Troches</p>
                        </div>
                        <div className="flex items-start">
                            <div className="mr-2 circle">
                                <FontAwesomeIcon icon={faCheck} className='w-[13px] text-[#ffffff]' />
                            </div>
                            <div className='flex-1'>
                                This plan offers a 30-day supply of either nasal spray or troches, tailored to your individual needs.
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="mr-2 circle">
                                <FontAwesomeIcon icon={faCheck} className='w-[13px] text-[#ffffff]' />
                            </div>
                            <p className='flex-1'>
                                Choose between 30ml of nasal solution or 30 troches at your current dosage for $350.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Additional information and refund policy */}
                {
                    text && (
                        <div className='mt-14' data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                            <div className='leading-7 text-[#000] text-[14px]'>
                                By providing your payment card information, you authorize a charge of
                                <strong className='text-[15px] underline'> $99 for the medical consultation plus the first month payment </strong>
                                for the plan you&apos;ve selected (<strong>$350</strong> or <strong>$375</strong>).
                                The month-to-month plan will renew automatically. You may cancel at any time with 30-days notice, and your service will continue through the end of the current billing cycle.
                            </div>

                            {/* Refund Policy */}
                            <h2 className='mt-5 mb-5'>Refund Policy</h2>
                            <p className='leading-7 text-[#000] text-[14px]'>
                                If your consultant determines ketamine therapy is contraindicated due to a health condition, you’ll receive a full refund for both the consult and the first month payment.
                            </p>
                            <p className='leading-7 text-[#000] text-[14px]'>
                                If, after your medical consultation, you chose not to move forward with Mindscape Rx, we’ll refund your first month payment.
                                The <strong>$99 consultation fee</strong> is not refundable in this instance.
                            </p>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

// Export the component as default
export default JoinNow;
