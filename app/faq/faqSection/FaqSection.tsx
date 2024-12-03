// Import necessary components and dependencies
import ContentWrapper from '@/components/contentWrapper/ContentWrapper'; // Wrapper component for consistent layout
import React from 'react';
import { FAQS_ITEMS } from '..'; // FAQ items to be displayed, imported from a parent file

// Importing Material-UI components and icons
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Define the type for FAQ items to ensure type safety
interface FAQItem {
    question: string;
    answer: string;
}

// FaqSection functional component
const FaqSection: React.FC = () => {
    return (
        <div className="relative top-[-40px]" >
            {/* Inner container with additional gradient and rounded corners */}
            <div className="bg-[linear-gradient(1deg,_#a0d8ff54,_#ffffff,_#ffffff,_#ffffff,_#ffffff)] pb-[60px] rounded-tl-[50px] rounded-tr-[50px]" >
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                    <ContentWrapper> {/* ContentWrapper ensures consistent alignment */}
                        {/* Render FAQ items dynamically */}
                        {FAQS_ITEMS.map((item: FAQItem, index: number) => (
                            <div
                                className="accordionSection"
                                key={index} // Use index as key when items are not uniquely identifiable
                            >
                                <Accordion className="accordion">
                                    {/* Accordion summary (the question part) */}
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />} // Expand icon
                                        aria-controls={`panel${index}-content`} // Accessible attribute
                                        id={`panel${index}-header`} // Accessible attribute
                                    >
                                        <Typography className="titleAccordion text-[14px] md:text-[18px] font-medium text-[#000000]">
                                            {item.question} {/* Display FAQ question */}
                                        </Typography>
                                    </AccordionSummary>
                                    {/* Accordion details (the answer part) */}
                                    <AccordionDetails>
                                        <Typography className="bodyAccordion text-[15px] text-[#000000b0] leading-[1.7]">
                                            {item.answer} {/* Display FAQ answer */}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        ))}
                    </ContentWrapper>
                </div>
            </div>
        </div>
    );
};

export default FaqSection; // Export component as default
