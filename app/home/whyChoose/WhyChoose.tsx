"use client"

import { ContentWrapper } from '@/components'
import Image from 'next/image'
import React, { useState } from 'react'
import icon from '../../../assets/icon_2.png'
import image from '../../../assets/home/home-4.jpg'
import image2 from '../../../assets/home/home-5.jpg'

// Importing Material-UI components and icons
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome for social media icons
import { faPlus, faMinus, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'

const items = [
  { title: "Improve your mood fast", content: "Ketamine acts on glutamate, a neurotransmitter that supports synaptic communication in brain areas involved in learning and mood regulation. Ketamine therapy increases synaptic activity right away, rapidly improving mood and mental processing." },
  { title: "Rewire your brain for long-lasting benefits", content: "Ketamine’s effect on glutamate increases neuroplasticity, or the brain's ability to form new neural connections. Neuroplasticity helps you reframe negative thought patterns, develop healthier coping strategies, and see challenges from a fresh perspective. Over time, neuroplasticity improves emotional resilience and cognitive function, promoting an overall sense of well-being." },
  { title: "Cut ties with SSRIs", content: "If saying goodbye to SSRIs is a goal, ketamine offers a powerful alternative. <br /> <br /> SSRI antidepressants affect the neurotransmitter serotonin, but they don’t work for everyone, and they can take weeks to become effective. <br /> <br /> Ketamine works differently, acting on glutamate instead of serotonin. Ketamine therapy is effective for most people, providing symptom relief faster than SSRIs, with fewer side effects. Research shows ketamine for treatment-resistant depression can help people who’ve tried other medications without success." }
]

const WhyChoose = () => {

  const router = useRouter()

  // Initialize state with an array of booleans for each accordion
  const [openStates, setOpenStates] = useState(Array(items.length).fill(false));

  // Toggle the state of a specific accordion
  const toggleAccordion = (index: number) => {
    setOpenStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className='relative bg-[#f2fdeb] pt-[50px] pb-[60px] overflow-hidden'>
      <ContentWrapper>
        <div className="grid lgg:grid-cols-2">
          <div className="text">
            <h1 className='text-[35px] md:text-[60px] leading-[1.1] font-medium' data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
              Why Choose
            </h1>
            <h1 className='text-[35px] md:text-[60px] text-transparent font-medium bg-clip-text bg-gradient-to-r from-[#00bfff] to-[#54e951]' data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
              ketamine therapy ?
            </h1>
            <div className="icon my-2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
              <Image src={icon} alt='' />
            </div>
            {items.map((item, index) => (
              <div
                className="accordionSection"
                key={index}
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                <Accordion className="accordion">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <p
                      className="titleAccordion text-[25px] sm:text-[30px] font-medium text-[#000000] relative w-full"
                      onClick={() => toggleAccordion(index)}
                    >
                      {item.title}
                      <span className={`spanPlus w-[40px] h-[40px] duration-500 bg-black text-yellow-500 rounded-full absolute flex items-center justify-center right-[-40px] ${index === 1 ? "top-[15px]" : "top-[0px]"}  z-20`}>
                        <FontAwesomeIcon
                          icon={openStates[index] ? faMinus : faPlus}
                          className='duration-500 text-[25px]'
                        />
                      </span>
                    </p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="bodyAccordion text-[15px] text-[#000000b0] leading-[1.7]" dangerouslySetInnerHTML={{ __html: item.content }} />
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
            <button onClick={() => router.push("faq")} className="group flex mx-auto font-bold gap-2 w-[300px] bg-black p-3 text-yellow-500 rounded-full text-center justify-center items-center transition-all duration-500 mt-12 border border-solid border-black hover:text-black hover:bg-[#ffffff]">
              Explore our FAQ
              <div>
                <FontAwesomeIcon
                  icon={faArrowUp}
                  className="text-yellow-500 w-[14px] rotate-[45deg] duration-500 group-hover:text-black group-hover:bg-transparent"
                />
              </div>
            </button>
          </div>
          <div className="images"></div>
        </div>
      </ContentWrapper>
      <div className="images absolute right-0 top-0 hidden lgg:block">
        <div className="flex gap-1">
          <Image src={image} alt='' className=' w-[280px] xl:w-[350px] h-[1050px] object-cover' />
          <Image src={image2} alt='' className='w-[280px] xl:w-[350px] h-[1050px] object-cover' />
        </div>
      </div>
    </div>
  )
}

export default WhyChoose
