"use client"

import ContentWrapper from '@/components/contentWrapper/ContentWrapper'; // Importing ContentWrapper for consistent layout
import React, { useState } from 'react'; // Importing React and useState for handling carousel state
import { faChevronRight, faChevronLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons'; // Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Font Awesome component for rendering icons
import icon from '../../../assets/icon.png'; // Importing image for the carousel icon
import Image from 'next/image'; // Importing Next.js optimized image component

// Sample items for the carousel
const items = [
    {
        text: "Low-dose ketamine gave me better access to myself, to things that had needed to be addressed for a long time. It enabled me to release the negative self-talk and embrace self compassion. Slowly, <strong> I developed a better relationship with myself </strong> , and now my whole game has changed.",
        name: "Mindscape Rx Member"
    },
    {
        text: "Low-dose sublingual ketamine “produced <strong> rapid, clear and sustained effects</strong>, improving mood level and stability, cognition and sleep” in 77% of patients, according to a clinical study.",
        name: "D. Lara, et al, 2013"
    },
    {
        text: "Nearly <strong>60% of patients</strong> with anxiety or depression experienced <span class='underline'>significant and persistent reduction in symptoms</span>, according to a large-scale study. Based on their findings, the study authors concluded that “at-home sublingual ketamine therapy is an important avenue for overcoming long-standing barriers to depression and anxiety treatment, safely and conveniently.",
        name: "T. Hull, et al. 2022"
    },
];

const Stories = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // State to track the current index of the carousel

    const moveCarousel = (value: number) => {
        setCurrentIndex(value); // Move to a specific carousel item based on the value passed
    };

    return (
        <div className='pt-[50px] pb-[80px]  overflow-hidden'>
            {/* Wrapper for the whole section with padding */}
            <ContentWrapper>
                <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-[150px]">
                    {/* Left Section - Title and Button */}
                    <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="800">
                        <h1 className='text-[50px] text-[#000000] font-medium'>
                            Real stories, <br /> Real science
                        </h1>
                        <button className='group flex font-bold gap-2 w-[300px] bg-black p-3 text-yellow-500 rounded-full text-center justify-center items-center transition-all duration-500 mt-4 border border-solid border-black hover:text-black hover:bg-[#ffffff]'>
                            Want More Science ?
                            <div>
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    className='text-yellow-500 w-[14px] rotate-[45deg] duration-500 group-hover:text-black group-hover:bg-transparent'
                                />
                            </div>
                        </button>
                    </div>

                    {/* Right Section - Carousel Container */}
                    <div className="carousel-container w-full overflow-hidden" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                        {/* Carousel that slides based on the currentIndex */}
                        <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {/* Looping through the items array to display each carousel item */}
                            {items.map((item, index) => (
                                <div className="flex-1 min-w-full" key={index}>
                                    <div className="title">
                                        {/* Image and text for each carousel item */}
                                        <div className="image mb-1">
                                            <Image
                                                src={icon}
                                                alt="icon"
                                                className='w-[80px]'
                                            />
                                        </div>
                                        <div className="text text-[20px] leading-[1.7]">
                                            <h4 dangerouslySetInnerHTML={{ __html: item.text }} />
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-center mt-5">
                                        {/* Bullet indicator for carousel */}
                                        <span className='bg-[#d2ebf6] w-[23px] h-[23px] rounded-[50%] relative flex justify-center items-center'>
                                            <span className='bg-[#1e9bd4] w-[15px] h-[15px] rounded-[50%] z-10'></span>
                                        </span>
                                        <p className='text-[18px] text-[#000000]'>{item.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Carousel controls - Dots and arrows */}
                        <div className="controls flex justify-between items-center">
                            {/* Dot indicators */}
                            <ul className='list-none flex justify-end items-center gap-[5px] mt-[20px] cursor-pointer'>
                                {items.map((item, index) => (
                                    <li key={index} className={`w-[12px] h-[12px] rounded-full  transition-all duration-200  ${index === currentIndex ? "bg-[#ffcc00]" : "bg-[#ffeb99]"}`} onClick={() => moveCarousel(index)}></li>
                                ))}
                            </ul>

                            {/* Navigation buttons */}
                            <div className="flex gap-3">
                                {/* Left arrow */}
                                <button
                                    onClick={() => setCurrentIndex((currentIndex - 1) < 0 ? items.length - 1 : currentIndex - 1)} // Handle negative index wrap-around
                                    className='flex justify-center items-center font-bold gap-2 h-[40px] w-[40px] bg-transparent p-3 text-[#7777777d] rounded-full transition-all duration-500 border border-solid border-[#7777777d] hover:text-yellow-400 hover:bg-black'
                                >
                                    <FontAwesomeIcon
                                        icon={faChevronLeft}
                                    />
                                </button>

                                {/* Right arrow */}
                                <button
                                    onClick={() => setCurrentIndex((currentIndex + 1) !== items.length ? currentIndex + 1 : 0)} // Wrap around to the first item
                                    className='flex justify-center items-center font-bold gap-2 h-[40px] w-[40px] bg-transparent p-3 text-[#7777777d] rounded-full transition-all duration-500 border border-solid border-[#7777777d] hover:text-yellow-400 hover:bg-black'
                                >
                                    <FontAwesomeIcon
                                        icon={faChevronRight}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWrapper >
        </div >
    );
}

export default Stories;
