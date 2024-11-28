import BannerProgram from './banner/BannerProgram'; // Importing BannerProgram component to display the program banner
import { Effect, Footer, Header, JoinNow } from '@/components'; // Importing common components such as Header, Footer, JoinNow, and Effect
import Steps from './steps/Steps'; // Importing the Steps component which details the program steps
import { Metadata } from 'next'; // Importing Metadata type from Next.js for SEO optimization

// Define metadata for SEO, Open Graph, and Twitter cards for better search visibility and social sharing
export const metadata: Metadata = {
  title: 'MindscapeRx | How Our Program Works', // Page title for search engines
  description:
    "Learn how MindscapeRx's program works, from initial intake to telehealth consultation and monthly delivery of at-home ketamine therapy. Explore our risk-free process and affordable pricing.",
  keywords:
    "MindscapeRx program, how it works, at-home ketamine therapy, telehealth consultation, ketamine delivery, ketamine membership, mental health solutions, program pricing, ketamine treatment steps", // Keywords for SEO
  openGraph: {
    title: 'MindscapeRx | How Our Program Works', // Title for social sharing
    description:
      "Learn how MindscapeRx's program works, from initial intake to telehealth consultation and monthly delivery of at-home ketamine therapy. Explore our risk-free process and affordable pricing.",
    url: `https://mindscaperx.com/program/`, // URL for Open Graph metadata
    images: [
      {
        url: '../../assets/logo_only_no_backgound.png', // Image for social sharing preview
        width: 1200,
        height: 630,
        alt: 'MindscapeRx Program Overview', // Alt text for the image
      },
    ],
    type: 'website', // Open Graph type (website)
  },
  twitter: {
    card: 'summary_large_image', // Twitter card type for large preview images
    title: 'MindscapeRx | How Our Program Works', // Title for Twitter sharing
    description:
      "Learn how MindscapeRx's program works, from initial intake to telehealth consultation and monthly delivery of at-home ketamine therapy. Explore our risk-free process and affordable pricing.",
      images: ['../../assets/logo_only_no_backgound.png'], // Image for Twitter card
    },
};

// Define the ProgramPage component
export default function ProgramPage() {
  return (
    <Effect>
      {/* Wrapping the page with the Effect component, likely for animations or transitions */}
      <Header /> {/* Renders the website header/navigation */}
      <BannerProgram /> {/* Renders the program banner that likely highlights key information about the program */}
      <Steps /> {/* Renders the Steps component to explain how the program works */}
      <JoinNow text={false}/> {/* Renders a call-to-action section to encourage users to join the program */}
      <Footer /> {/* Renders the website footer */}
    </Effect>
  );
}
