import Negative from './home/negative/Negative'; // Importing the Negative section component
import Effect from '@/components/effect/Effect';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import LearnMore from './home/learnMore/LearnMore'; // Importing LearnMore section component
import Works from './home/works/Works'; // Importing Works section component
import WhyLose from './home/whyLose/WhyLose'; // Importing WhyLose section component
import { Metadata } from 'next'; // Importing Next.js Metadata type for SEO optimization
import BannerHome from './home/banner/BannerHome'; // Importing BannerHome section component
import Cards from './home/cards/Cards'; // Importing Cards section component
import Stories from './home/stories/Stories'; // Importing Stories section component
import WhyChoose from './home/whyChoose/WhyChoose'; // Importing WhyChoose section component

// Define the metadata for the landing page, optimizing for SEO and social sharing
export const metadata: Metadata = {
  title: 'MindscapeRx | Transform Your Mental Landscape with At-Home Ketamine Therapy',
  description:
    "Discover how MindscapeRx's low-dose at-home ketamine therapy can transform your mental health. Improve your mood, rewire your brain, and experience rapid symptom relief for depression, anxiety, PTSD, and more.",
  keywords:
    "MindscapeRx, at-home ketamine therapy, low-dose ketamine, mental health solutions, depression treatment, anxiety relief, PTSD therapy, rapid symptom relief, brain rewiring, enhanced creativity",
  openGraph: {
    title: 'MindscapeRx | Transform Your Mental Landscape with At-Home Ketamine Therapy',
    description:
      "Discover how MindscapeRx's low-dose at-home ketamine therapy can transform your mental health. Improve your mood, rewire your brain, and experience rapid symptom relief for depression, anxiety, PTSD, and more.",
    url: `https://mindscaperx.com/`,
    images: [
      {
        url: '../../assets/logo_only_no_backgound.png', // OpenGraph image for social media preview
        width: 1200,
        height: 630,
        alt: 'MindscapeRx Homepage Banner', // Alt text for accessibility
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image', // Twitter card type for larger preview images
    title: 'MindscapeRx | Transform Your Mental Landscape with At-Home Ketamine Therapy',
    description:
      "Discover how MindscapeRx's low-dose at-home ketamine therapy can transform your mental health. Improve your mood, rewire your brain, and experience rapid symptom relief for depression, anxiety, PTSD, and more.",
      images: ['../../assets/logo_only_no_backgound.png'], // Image for Twitter card
  },
};

// Home functional component
export default function page() {
  return (
    <Effect>
      {/* Wrapping the page with the Effect component, likely for animations or transitions */}
      <Header /> {/* Renders the website header/navigation */}
      <BannerHome /> {/* Renders the main banner for the landing page */}
      <Negative /> {/* Renders the Negative section */}
      <Works /> {/* Renders the Works section */}
      <WhyLose /> {/* Renders the WhyLose section */}
      <LearnMore /> {/* Renders the LearnMore section */}
      <Cards /> {/* Renders the Cards section */}
      <Stories /> {/* Renders the Stories section */}
      <WhyChoose /> {/* Renders the WhyChoose section */}
      <Footer /> {/* Renders the website footer */}
    </Effect>
  );
}
