// Import necessary components and modules
import ContentWrapper from '@/components/contentWrapper/ContentWrapper'; // Wrapper component for consistent layout styling
import React from 'react'; // React library for building components
import image from '../../../assets/getStarted/get-started-1.jpg'; // First image for the component
import image2 from '../../../assets/getStarted/get-started-2.jpg'; // Second image for the component
import Image from 'next/image'; // Next.js optimized image component

// Array of study findings to dynamically render the statistics
const items = [
    { percentage: "89%", description: "of clients reported improvement in their depression and anxiety symptoms after 4 sessions" },
    { percentage: "62%", description: "of participants who reported suicidal ideation no longer reported any suicidal ideation after 4 sessions" },
    { percentage: "95%", description: "of clients reported no side effects from their ketamine treatment with MindBloom" },
    { percentage: "30%", description: "of clients experiencing depression and anxiety achieved remission for virtually no symptoms after 4 sessions" },
];

// Functional component to display study findings and additional information
const StudyFound = () => {
    return (
        <div className='bg-[#ffffff] pt-10 pb-[60px] relative top-[-40px] rounded-tl-[50px] rounded-tr-[50px] overflow-hidden'> {/* White background with rounded top corners */}
            <div className="hidden md:block h-[393px] w-[363px] absolute left-0 bottom-[250px] filter blur-[50px]  bg-gradient-to-tr from-green-100 via-yellow-100 to-blue-100 p-8 rounded-lg">
            </div>

            <ContentWrapper> {/* Wrapper for consistent content alignment */}

                {/* Introductory text */}
                <p className="text-center text-[#7d7d7d] mb-2">
                    A large-scale study concluded that at-home ketamine therapy is a safe and effective <br />
                    treatment for moderate to severe anxiety and depression.
                </p>

                {/* Section heading */}
                <h2 className="text-[30px]  sm:text-[40px] font-medium text-center mb-8 text-[#000000]" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">The Study Found That:</h2>

                {/* Statistics grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10"> {/* Responsive grid: 1 column on mobile, 4 columns on medium+ screens */}
                    {items.map((stat, index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={((index + 1) * 100)} data-aos-duration="800">
                            {/* Percentage heading */}
                            <h3 className="description text-[55px] font-semibold text-[#000000e6] pb-4 mb-5 relative">
                                {stat.percentage}
                            </h3>

                            {/* Description text */}
                            <p className="text-[#7d7d7d] leading-8 text-[15px]">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Additional content section */}
                <div className="pt-[90px]">
                    <div className="grid md:grid-cols-[1fr_1fr] gap-10"> {/* Grid for image and text side-by-side */}

                        {/* Image container */}
                        <div className="flex relative space-x-6 bg-gradient-to-r from-green-100 via-blue-100 to-indigo-100 p-6 rounded-lg h-[350px] md:h-auto " data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
                            {/* Foreground image */}
                            <div className="absolute z-10">
                                <Image
                                    src={image2}
                                    alt="Telehealth Consultation"
                                    className="w-[230px] h-[180px] sm:w-[280px] sm:h-[300px] rounded-xl shadow-md"
                                />
                            </div>

                            {/* Background image */}
                            <div className="absolute bottom-[18px] right-[18px]">
                                <Image
                                    src={image}
                                    alt="Person Relaxing"
                                    className="w-[230px]  sm:w-[320px] sm:h-[300px] rounded-xl shadow-md"
                                />
                            </div>
                        </div>

                        {/* Text content */}
                        <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="800">
                            {/* Title */}
                            <h2 className="text-[30px]  md:text-[40px] font-bold mb-4 leading-[1.2] text-[#000]">
                                Speak With An Experienced, Licensed MD Consultant
                            </h2>

                            {/* Descriptive paragraphs */}
                            <p className="text-[#7d7d7d] leading-7 mb-4">
                                Everyone&apos;s ketamine needs are unique. It&apos;s critical to consider individual factors, such as medical history, existing mental health conditions, current medications, lifestyle, personal preferences, and other factors.
                            </p>
                            <p className="text-[#7d7d7d] leading-7 mb-6">
                                Your MD consultant ensures you&apos;re a candidate for ketamine therapy and designs a customized approach to help you achieve the best possible results.
                            </p>

                            {/* Pricing information */}
                            <p className="text-[25px] font-bold mb-4 leading-[1.2] text-[#000]">
                                Virtual Consultation Fee: 99$
                            </p>

                            {/* Refund policy */}
                            <p className="text-[#7d7d7d] leading-7 mb-4">
                                If your MD consultant identifies a health contraindication that disqualifies you from ketamine therapy, you&apos;ll receive a full refund.
                            </p>
                        </div>
                    </div>
                    <p className='mt-[50px] text-[#000000] text-[18px] font-medium'>Our montht-to-month plans provide a 30-day supply of medication, tailored to your personal needs.</p>
                    <p className='mt-[10px] text-[#000000] text-[18px] font-medium'>To schedule your telehealth consultation, select a plan:</p>
                </div>
            </ContentWrapper>
        </div>
    );
};

// Export the component as default
export default StudyFound;
