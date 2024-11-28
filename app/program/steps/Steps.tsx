import { ContentWrapper } from '@/components'; // Importing ContentWrapper for consistent layout
import Image from 'next/image'; // Importing Next.js Image component for optimized images
import React from 'react'; // Importing React
import logo from '../../../assets/logo_only_2.jpg'; // Importing the logo image
import program_1 from '../../../assets/program/program-2.svg'
import program_2 from '../../../assets/program/program-3.svg'
import program_3 from '../../../assets/program/program-4.svg'

const Steps = () => {
    return (
            <div className='bg-[#ffffff] relative top-[-40px] pt-[60px] pb-[80px] rounded-tl-[50px] rounded-tr-[50px] overflow-hidden text-center'>
                <ContentWrapper>
                    {/* Steps Container */}
                    <div className='relative steps' data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">

                        {/* Step 1: Initial Intake */}
                        <div className='mb-[90px]'>
                            <div className="flex items-center justify-center bg-[#ffffff] z-10 relative">
                                <div className="px-10 pt-[15px] pb-[5px] border border-teal-400 rounded-full bg-blue-50">
                                    <span className="text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-400 to-blue-400 font-bold">
                                        Step 1
                                    </span>
                                </div>
                            </div>
                            <h2 className="text-[50px] font-medium mt-5 pb-2 text-[#000000] bg-[#ffffffbd] z-10 relative">Initial Intake</h2>
                            <p className="text-[#7d7d7d] pb-6 text-[17px] bg-[#ffffff] z-10 relative">Complete our brief questionnaire to get started.</p>
                            <Image src={program_1} alt="Initial Intake" width={400} height={400} className="mx-auto bg-[#ffffffbd] z-10 relative" />
                        </div>

                        {/* Step 2: Telehealth Consultation */}
                        <div className="mb-[90px]">
                            <div className="flex items-center justify-center bg-[#ffffff] z-10 relative">
                                <div className="px-10 pt-[15px] pb-[5px] border border-teal-400 rounded-full bg-blue-50">
                                    <span className="text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-400 to-blue-400 font-bold">
                                        Step 2
                                    </span>
                                </div>
                            </div>
                            <h2 className="text-[45px] font-medium mt-4 pb-2 text-[#000000] bg-[#ffffffbd] z-10 relative">Telehealth Consultation</h2>
                            <p className="text-[#7d7d7d] pb-6 text-[16px] bg-[#ffffff] z-10 relative">Schedule a 60-minute virtual consultation with a licensed physician at a time that&apos;s good for you.</p>
                            <p className="text-[#7d7d7d] pb-6 text-[17px] md:w-[950px] mx-auto leading-[1.7] bg-[#ffffff] z-10 relative">
                                Your telehealth consultation includes a comprehensive review of your health history, treatment goals, personal preferences, and other considerations. The MD will also answer questions and address any concerns you have about ketamine therapy. This ensures that ketamine is safe and appropriate for your needs and that you have all relevant information about the medication, dosages, administration, methods, and monitoring schedule.
                            </p>
                            <Image src={program_3} alt="Telehealth Consultation" width={500} height={300} className="mx-auto bottom-[-20px] bg-[#ffffffbd] z-10 relative" />

                            {/* Risk-Free Guarantee */}
                            <div className="bg-[#ffffffbd] z-10 relative p-6 rounded-[40px] shadow-md border-[1px] border-black w-full max-w-[530px] relative overflow-hidden mx-auto rounded-b-[0px]">
                                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-yellow-100 to-transparent"></div>
                                <h3 className="text-lg font-bold text-gray-800 text-center relative z-10">Risk-Free Guarantee</h3>
                                <p className="mt-4 text-gray-700 text-center relative z-10">
                                    We charge a <span className="font-semibold">$99 fee</span> for the initial medical consultation. If the MD consultant identifies a health contraindication that disqualifies you from ketamine therapy, we will provide a full refund.
                                </p>
                            </div>
                        </div>

                        {/* Step 3: Delivery */}
                        <div className="mb-[90px]">
                            <div className="flex items-center justify-center bg-[#ffffff] z-10 relative">
                                <div className="px-10 pt-[15px] pb-[5px] border border-teal-400 rounded-full bg-blue-50">
                                    <span className="text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-400 to-blue-400 font-bold">
                                        Step 3
                                    </span>
                                </div>
                            </div>
                            <h2 className="text-[40px] font-medium mt-4 pb-2 text-[#000000] bg-[#ffffffbd] z-10 relative">Delivery</h2>
                            <p className="text-[#7d7d7d] pb-6 text-[16px] md:w-[850px] mx-auto leading-[1.7] bg-[#ffffff] z-10 relative">
                                After the consultation, you&apos;ll decide whether you receive your monthly supply through one of our trusted pharmacies or a pharmacy of your choice. Your monthly at-home treatment kit is delivered to your doorstep within 3-5 business days.
                            </p>
                            <Image src={program_2} alt="Delivery" width={400} height={400} className="mx-auto bg-[#ffffffbd] z-10 relative" />
                        </div>

                        {/* Logo Section */}
                        <div className="flex justify-center items-center">
                            <Image src={logo} width={150} alt='logo' className='bg-[#ffffff] z-10 relative'/>
                        </div>
                    </div>
                </ContentWrapper>
            </div>

    );
}

export default Steps;
