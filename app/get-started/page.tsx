// Import necessary components and metadata from Next.js and other files
import Header from '@/components/header/Header'; // Header component
import StudyFound from './studyFound/StudyFound'; // Section for study information
import JoinNow from '../../components/joinNow/JoinNow'; // Section for joining the program
import Footer from '@/components/footer/Footer'; // Footer component
import BannerHero from './bannerHero/BannerHero'; // Hero banner component
import { Metadata } from 'next'; // Metadata type from Next.js
import { Effect } from '@/components';

// Define metadata for the page to improve SEO and social media sharing
export const metadata: Metadata = {
  // Page title
  title: 'MindscapeRx | Get Started with At-Home Ketamine Therapy',
  
  // Meta description for search engines
  description: "Begin your journey to improved mental health with MindscapeRx's at-home ketamine therapy. Discover safe and effective treatments tailored to your needs, with licensed MD consultations and personalized plans.",
  
  // Keywords for search engine optimization
  keywords: "MindscapeRx, at-home ketamine therapy, mental health improvement, licensed MD consultation, anxiety treatment, depression treatment, virtual mental health solutions, personalized mental health care, ketamine therapy plans",
  
  // Open Graph metadata for sharing on social media platforms
  openGraph: {
    // Title of the page for social media preview
    title: 'MindscapeRx | Get Started with At-Home Ketamine Therapy',
    
    // Description for social media preview
    description: "Begin your journey to improved mental health with MindscapeRx's at-home ketamine therapy. Discover safe and effective treatments tailored to your needs, with licensed MD consultations and personalized plans.",
    
    // URL of the page
    url: `https://mindscaperx.com/get-started/`,
    
    // Image metadata for social sharing
    images: [
      {
        url: '../../assets/logo_only_no_backgound.png', // Image URL
        width: 1200, // Image width in pixels
        height: 630, // Image height in pixels
        alt: 'MindscapeRx Get Started', // Alt text for the image
      },
    ],
    
    // Type of Open Graph object
    type: 'website',
  },
  
  // Twitter card metadata for better Twitter previews
  twitter: {
    card: 'summary_large_image', // Twitter card type
    title: 'MindscapeRx | Get Started with At-Home Ketamine Therapy', // Title for Twitter card
    description: "Begin your journey to improved mental health with MindscapeRx's at-home ketamine therapy. Discover safe and effective treatments tailored to your needs, with licensed MD consultations and personalized plans.", // Description for Twitter card
    images: ['../../assets/logo_only_no_backgound.png'], // Image for Twitter card
  },
};

// Functional component for the "Get Started" page
export default function GetStartedPage() {
  return (
    <Effect>
      {/* Header component at the top of the page */}
      <Header />
      
      {/* Hero banner section for the page */}
      <BannerHero />
      
      {/* Study information section */}
      <StudyFound />
      
      {/* Join now call-to-action section */}
      <JoinNow text={true} />
      
      {/* Footer component at the bottom of the page */}
      <Footer />
    </Effect>
  );
}
