import React from 'react'
import Image from 'next/image'
import science1 from '../../../assets/science/science-1.jpg'
import science3 from '../../../assets/science/science-2.jpg'
import science4 from '../../../assets/science/science-3.jpg'
import science5 from '../../../assets/science/science-4.jpg'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // Font Awesome icon for the arrow
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Font Awesome component for rendering icons
import ContentWrapper from '@/components/contentWrapper/ContentWrapper';


const ScienceSection: React.FC = () => {
    return (
        <div className='bg-[#ffffff] relative top-[-40px] pt-[10px] pb-[80px] rounded-tl-[50px] rounded-tr-[50px] overflow-hidden'>
            <div className="hidden md:block h-[393px] w-[363px] absolute right-0 top-[290px] filter opacity-50 blur-[50px] p-8 rounded-lg"
                style={{ backgroundImage: "linear-gradient(180deg, #eae66e 20%, #62e05e 50%, #52bdd4 80%)" }}
            >
            </div>
            <div className="hidden md:block h-[393px] w-[363px] absolute  opacity-50 left-0 bottom-[250px] filter blur-[50px] p-8 rounded-lg"
                style={{ backgroundImage: "linear-gradient(180deg, #eae66e 20%, #62e05e 50%, #52bdd4 80%)" }}
            >
            </div>
            <ContentWrapper>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                    <h2 className="text-[30px] sm:text-[40px]  font-bold mb-4">It&apos;s all in the science</h2>
                    <p className="text-[#000000c2] text-[15px] mb-5">Why is ketamine therapy so effective? Can it really help with depression, anxiety, and PTSD? How does it work? Here&apos;s what the science says:</p>
                    <p className="text-[#000000c2] text-[15px]">Ketamine induces profound changes inside the brain, stimulating neural processes related to neuroplasticity and learning. <br /> It can effectively help the brain regenerate and adapt to change.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-10 mt-[50px] ">
                    <div className="text" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                        <h2 className="text-[30px] sm:text-[45px] text-[#000000] leading-[1.2] font-semibold mb-6">Repair your brain, improve your mood fast</h2>
                        <p className="text-[#000000c2] leading-[1.8] text-[16px] mb-5">Depression, anxiety, and PTSD are associated with chronic stress, a loss of synaptic connections in key brain regions, and changes in neural circuits. Ketamine works differently than traditional antidepressants by rapidly increasing the growth and density of neurons and synapses. This glutamate system activation contributes to learning, memory, and mood regulation.</p>
                        <p className="text-[#000000c2] leading-[1.8] text-[16px] mb-5">Ketamine causes a rapid expansion in the brain by targeting the glutamate system to amplify neuroplasticity (NMDA) receptors, quickly initiating the growth of new neural connections. This process is called synaptogenesis.</p>
                        <p className="text-[#000000c2] leading-[1.8] text-[16px] mb-8">Research from ketamine treatment for mental health conditions is ongoing, but a growing body of evidence suggests ketamine therapy is an effective option for people experiencing depression, anxiety, and PTSD symptoms.</p>

                        <div className="bg-gray-100 p-6 rounded-[12px]">
                            <p className="text-gray-800">
                                <span className="font-semibold">A 2024 study </span> found that ketamine can be
                                <span className="font-semibold"> effective for chronic and treatment-resistant depression and PTSD. </span>
                                The study authors suggest that ketamine therapy
                                <span className="italic underline"> can offer an alternative for individuals who haven’t responded to conventional treatments.</span>
                            </p>
                            <p className="mt-3 text[#000000] font-semibold">J. Liu, et al. 2024</p>
                        </div>

                    </div>
                    <div className="relative flex  sm:justify-center  md:justify-end py-[20px]" data-aos="fade-left" data-aos-delay="150" data-aos-duration="800">
                        <div className="absolute left-[50px] bottom-[0px] md:bottom-[280px] md:left-[41px] transform translate-x-8 translate-y-8 w-[350px] h-[280px] rounded-[12px] overflow-hidden shadow-lg">
                            <Image src={science3} alt="Background Image" className="w-full h-full object-cover rounded-[12px]" />
                        </div>

                        <div className="relative w-[300px] border-[8px] border-solid border-[#ffffff]  rounded-[12px] h-[350px] overflow-hidden bg-white">
                            <Image src={science1} alt="Foreground Image" className="w-full h-full object-cover rounded-[12px]" />
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-10 mt-[80px]">
                    <div className="relative flex justify-center  md:justify-start py-[20px] order-2 md:order-1" data-aos="fade-left" data-aos-delay="100" data-aos-duration="800">
                        <div className="absolute bottom-0 md:bottom-[220px] right-[90px] transform translate-x-8 translate-y-8 w-[350px] h-[280px] rounded-[6px] overflow-hidden shadow-lg">
                            <Image src={science5} alt="Background Image" className="w-full h-full object-cover rounded-[12px]" />
                        </div>

                        <div className="relative w-[300px] border-[8px] border-solid border-[#ffffff] bg-white rounded-[12px] h-[350px] overflow-hidden shadow-lg">
                            <Image src={science4} alt="Foreground Image" className="w-full h-full object-cover rounded-[12px]" />
                        </div>
                    </div>
                    <div className="text order-1 md:order-2" data-aos="fade-up" data-aos-delay="150" data-aos-duration="800">
                        <h2 className="text-[30px] sm:text-[45px] text-[#000000] leading-[1.2] font-semibold mb-6">Advantages over SSRIs</h2>
                        <p className="text-[#000000c2] leading-[1.8] text-[16px] mb-5">The goal of ketamine treatment is to induce neuroplasticity and rewire neural pathways associated with depression and anxiety. Unlike traditional antidepressants that can take weeks or months to be effective, many people who use ketamine report feeling better within hours.</p>
                        <p className="text-[#000000c2] leading-[1.8] text-[16px] mb-5">Ketamine&apos;s rapid action on glutamate levels is far more effective and direct than SSRIs, which focus on serotonin neurotransmitters. Because of how quickly ketamine works, it can be a game-changer for people who are having thoughts of suicide or are dealing with severe, treatment-resistant depression.</p>
                        <button className="group text-[15px] mb-[30px] flex w-[280px] font-medium gap-2 bg-black p-3 text-yellow-500 rounded-full text-center justify-center items-center transition-all duration-500 border border-solid border-black hover:text-black hover:bg-[#ffffff]">
                            Am I a consultation
                            <div>
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    className="text-yellow-500 w-[14px] rotate-[45deg] duration-500 group-hover:text-black group-hover:bg-transparent"
                                />
                            </div>
                        </button>

                        <div className="bg-gray-100 p-6 rounded-[12px]">
                            <p className="text-gray-800">
                                <span className="font-semibold">A 2024 study </span> found that ketamine can be
                                <span className="font-semibold"> effective for chronic and treatment-resistant depression and PTSD. </span>
                                The study authors suggest that ketamine therapy
                                <span className="italic underline"> can offer an alternative for individuals who haven’t responded to conventional treatments.</span>
                            </p>
                            <p className="mt-3 text[#000000] font-semibold">J. Liu, et al. 2024</p>
                        </div>

                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default ScienceSection