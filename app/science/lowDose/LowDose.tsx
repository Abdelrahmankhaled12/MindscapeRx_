import React from 'react';
import Image from 'next/image';
import science1 from '../../../assets/science/science-7.png'; // First brain scan image
import science2 from '../../../assets/science/science-8.png'; // Second brain scan image
import ContentWrapper from '@/components/contentWrapper/ContentWrapper'; // Wrapper component for consistent layout
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // Font Awesome icon for the arrow
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Font Awesome component for rendering icons

const LowDose: React.FC = () => {
    return (
        <div className="pt-[60px] pb-[40px] mb-[40px] overflow-hidden bg-gradient-to-r from-blue-900 to-green-900 text-white rounded-bl-[50px] rounded-br-[50px]">
            <ContentWrapper>
                {/* Section 1: Introduction */}
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="text" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
                        {/* Section Heading */}
                        <h2 className="text-[30px] md:text-[45px] text-[#ffffff] leading-[1.2] font-medium mb-6">
                            The low-dose ketamine experience
                        </h2>

                        {/* Descriptive Paragraphs */}
                        <p className="text-[#ffffffd4] leading-[1.8] text-[16px] mb-5">
                            At higher doses, ketamine offers an NMDA antagonist and affects sensory perception. However, at the low doses used in Mindscape Rx&apos;s treatment, it functions as a treatment for depression, anxiety, and PTSD.
                        </p>
                        <p className="text-[#ffffffd4] leading-[1.8] text-[16px] mb-5">
                            At lower doses, the effects of ketamine are much more subtle. People experience subtle shifts in perception and typically report feeling calmer, more grounded, and less anxious. The relaxation and introspection brought on by low-dose ketamine allows many people to process difficult emotions, gain new perspectives, and gain insights about their lives.
                        </p>

                        {/* Call-to-Action Button */}
                        <button className="group text-[10px] sm:text-[15px] flex w-full font-medium gap-2 bg-black p-3 text-yellow-500 rounded-full text-center justify-center items-center transition-all duration-500 border border-solid border-black hover:text-black hover:bg-[#ffffff]">
                            Explore our FAQ to learn more about the ketamine experience
                            <div>
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    className="text-yellow-500 w-[14px] rotate-[45deg] duration-500 group-hover:text-black group-hover:bg-transparent"
                                />
                            </div>
                        </button>

                        {/* Clinical Trial Info */}
                        <div className="bg-[#ffffff] p-6  rounded-[12px] shadow-[0px_4.25px_8px_3px_rgba(171,171,171,0.4)] mt-7">
                            <p className="text-gray-800">
                                In a small clinical trial focused on low-dose, oral ketamine for suicidal ideation,
                                <span className="font-semibold"> 69% of participants </span> taking oral ketamine
                                <span className="italic"> experienced clinical improvement in symptoms</span> within 6 weeks of treatment. After 10 weeks,
                                <span className="font-semibold"> 50%</span> reported significant reduction of suicidal ideation.
                            </p>
                            <p className="mt-3 text-gray-600 font-semibold">A. Can, et. al, 2021</p>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="800">
                        <Image
                            src={science1}
                            alt="Brain Scan 1"
                            className="w-full max-w-[450px] mx-auto md:max-w-full"
                        />
                    </div>
                </div>

                {/* Section 2: Safety and Effectiveness */}
                <div className="grid md:grid-cols-2 gap-10 mt-[70px]">
                    {/* Image on the left for larger screens */}
                    <div className="order-2 md:order-1" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                        <Image
                            src={science2}
                            alt="Brain Scan 2"
                            className="w-full max-w-[450px] mx-auto md:max-w-full"
                        />
                    </div>

                    {/* Text on the right */}
                    <div className="order-1 md:order-2" data-aos="fade-left" data-aos-delay="150" data-aos-duration="800">
                        <h2 className="text-[30px] md:text-[45px] text-[#ffffff] leading-[1.2] font-medium mb-6">
                            Low-dose ketamine: safe and effective
                        </h2>
                        <p className="text-[#ffffffd4] leading-[1.8] text-[16px] mb-5">
                            Ketamine is FDA approved for use as a surgical anesthetic. It&apos;s been used for over 50 years for this purpose. In the last two decades, it&apos;s gained traction as a treatment for mood disorders when administered in much lower doses under medical supervision.
                        </p>
                        <p className="text-[#ffffffd4] leading-[1.8] text-[16px] mb-5">
                            Low-dose ketamine produces a mild dissociative effect that typically lasts 45 minutes to 2 hours. Unlike other psychedelics, ketamine does not cause hallucinations or severe alterations in consciousness at low doses.
                        </p>

                        {/* Call-to-Action Button */}
                        <button className="group text-[10px] sm:text-[15px] flex w-full font-medium gap-2 bg-black p-3 text-yellow-500 rounded-full text-center justify-center items-center transition-all duration-500 border border-solid border-black hover:text-black hover:bg-[#ffffff]">
                            Read about our ketamine therapy program
                            <div>
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    className="text-yellow-500 w-[14px] rotate-[45deg] duration-500 group-hover:text-black group-hover:bg-transparent"
                                />
                            </div>
                        </button>

                        {/* Clinical Trial Info */}
                        <div className="bg-[#ffffff] p-6 rounded-[12px] shadow-[0px_4.25px_8px_3px_rgba(171,171,171,0.4)] mt-7">
                            <p className="text-gray-800">
                                In a small clinical trial focused on low-dose, oral ketamine for suicidal ideation,
                                <span className="font-semibold"> 69% of participants </span> taking oral ketamine
                                <span className="italic"> experienced clinical improvement in symptoms</span> within 6 weeks of treatment. After 10 weeks,
                                <span className="font-semibold"> 50%</span> reported significant reduction of suicidal ideation.
                            </p>
                            <p className="mt-3 text-gray-600 font-semibold">A. Can, et. al, 2021</p>
                        </div>
                    </div>
                </div>

                <h1 className="text-[30px] sm:text-[40px]  md:text-[65px] mt-10 text-center font-medium text-transparent bg-clip-text bg-[#ffffff]">
                    Start Your <span className="bg-clip-text"
                        style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 194, 255) 25%, rgb(10 255 0 / 88%) 50%, rgb(255 204 0 / 85%) 88%)" }}
                    >Journey</span> Now.
                </h1>
            </ContentWrapper>
        </div>
    );
};

export default LowDose;
