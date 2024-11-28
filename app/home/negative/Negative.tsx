// Import necessary components and modules
import ContentWrapper from '@/components/contentWrapper/ContentWrapper'; // Wrapper component for consistent layout styling
import React from 'react'; // React library for building components
import image from '../../../assets/home/home-1.jpg'; // First image for the component
import image2 from '../../../assets/home/home-2.jpg'; // Second image for the component
import Image from 'next/image'; // Next.js optimized image component

// Functional component to display study findings and additional information
const Negative = () => {
    return (
        <div className='bg-[#ffffff]  pt-2 pb-[30px] rounded-tl-[50px] rounded-tr-[50px] overflow-hidden relative top-[-50px]'> {/* White background with rounded top corners */}

            <div className="hidden md:block h-[393px] w-[363px] absolute left-[-120px] bottom-[80px] filter blur-[120px]  bg-gradient-to-tr from-green-100 via-yellow-100 to-blue-100 p-8 rounded-lg">
            </div>
            <ContentWrapper> {/* Wrapper for consistent content alignment */}
                <div className="pt-[90px]">
                    <div className="grid md:grid-cols-[1fr_1fr] gap-5">
                        {/* Image container */}
                        <div className="flex relative space-x-6 bg-gradient-to-r from-green-100 via-blue-100 to-indigo-100 p-6 rounded-lg h-[350px] md:h-auto " data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
                            {/* Foreground image */}
                            <div className="absolute z-10 bottom-[15px]">
                                <Image
                                    src={image2}
                                    alt="Telehealth Consultation"
                                    className="w-[230px] h-[180px] sm:w-[360px] sm:h-[200px] rounded-xl shadow-md"
                                />
                            </div>

                            {/* Background image */}
                            <div className="absolute top-[18px] right-[18px]">
                                <Image
                                    src={image}
                                    alt="Person Relaxing"
                                    className="w-[230px]  sm:w-[320px] sm:h-[200px] rounded-xl shadow-md"
                                />
                            </div>
                        </div>

                        {/* Text content */}
                        <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="800" >
                            {/* Title */}
                            <h2 className="text-[30px] pl-4 font-bold mb-4 leading-[1.2] text-[#000]">
                                Negative thoughts and emotions can make your mental landscape feel confusing, cluttered, and even painful.
                            </h2>

                            {/* Descriptive paragraphs */}
                            <p className="text-[#7d7d7d] leading-7 mb-4 pl-4 ">
                                Mindscape Rx is an at-home, ketamine program that can help shift negative thinking and reduce anxiety and depression symptoms. We offer <strong>low and mid-dose ketamine therapy</strong>  that helps you rediscover serenity, find balance, and view challenges from a fresh perspective. When your mental landscape feels more peaceful, it’s easier to release old patterns and embark on new journeys.                            </p>

                            <p className="text-[#7d7d7d] leading-7 mb-6 pl-4 ">
                                Mindscape Rx programs are administered under the guidance of a licensed medical provider.
                            </p>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default Negative;










