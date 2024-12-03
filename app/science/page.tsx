import Header from '@/components/header/Header'; // Importing Header component for site-wide navigation
import BannerScience from './banner/BannerScience'; // Importing the banner section specific to the science page
import ScienceSection from './scienceSection/ScienceSection'; // Importing the section that explains the science behind ketamine
import LowDose from './lowDose/LowDose'; // Importing the LowDose section explaining low-dose ketamine therapy
import Effect from '@/components/effect/Effect';
import Footer from '@/components/footer/Footer';
import { Metadata } from 'next'; // Importing Metadata type for SEO configuration

// Define metadata for the SciencePage to improve SEO and social sharing
export const metadata: Metadata = {
  title: 'MindscapeRx | The Science Behind Ketamine Therapy',
  description:
    "Discover the science behind ketamine therapy and how it works to improve mental health. Learn about its benefits, rapid results, and why it's a revolutionary treatment for depression, anxiety, and PTSD.",
  keywords:
    "MindscapeRx, ketamine therapy science, mental health improvement, ketamine benefits, depression treatment, anxiety relief, PTSD therapy, low-dose ketamine, neuroscience, ketamine research",
  openGraph: {
    title: 'MindscapeRx | The Science Behind Ketamine Therapy',
    description:
      "Discover the science behind ketamine therapy and how it works to improve mental health. Learn about its benefits, rapid results, and why it's a revolutionary treatment for depression, anxiety, and PTSD.",
    url: `https://mindscaperx.com/science/`,
    images: [
      {
        url: '../../assets/logo_only_no_backgound.png', // Image for OpenGraph (social media sharing)
        width: 1200,
        height: 630,
        alt: 'Science of Ketamine Therapy',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image', // Twitter card type for large image preview
    title: 'MindscapeRx | The Science Behind Ketamine Therapy',
    description:
      "Discover the science behind ketamine therapy and how it works to improve mental health. Learn about its benefits, rapid results, and why it's a revolutionary treatment for depression, anxiety, and PTSD.",
      images: ['../../assets/logo_only_no_backgound.png'], // Image for Twitter card
    },
};

// Define the SciencePage component
export default function SciencePage() {
  return (
    <Effect>
      <Header /> {/* Renders the header navigation */}
      <BannerScience /> {/* Renders the banner section related to science */}
      <ScienceSection /> {/* Section explaining the science behind ketamine therapy */}
      <LowDose /> {/* Section about low-dose ketamine and its benefits */}
      <Footer /> {/* Renders the footer with site-wide information */}
    </Effect>
  );
}
