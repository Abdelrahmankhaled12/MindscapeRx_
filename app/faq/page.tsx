// Import necessary components
import BannerFAQ from './banner/BannerFAQ'; // Banner section specific to the FAQ page
import { Effect, Footer, Header } from '@/components'; // Footer component for consistent site footer
import FaqSection from './faqSection/FaqSection'; // FAQ section component
import { Metadata } from 'next'; // Metadata type for SEO configuration

// Define metadata for the FAQ page
export const metadata: Metadata = {
  title: 'MindscapeRx | Frequently Asked Questions About Ketamine Therapy',
  description:
    "Find answers to common questions about at-home ketamine therapy, including its benefits, safety, effectiveness, and how it works. Learn how MindscapeRx can help improve your mental health.",
  keywords:
    "MindscapeRx FAQ, ketamine therapy questions, at-home ketamine therapy, mental health treatment, ketamine safety, ketamine benefits, low-dose ketamine, telehealth consultation, ketamine prescription, mental health solutions",
  openGraph: {
    title: 'MindscapeRx | Frequently Asked Questions About Ketamine Therapy',
    description:
      "Find answers to common questions about at-home ketamine therapy, including its benefits, safety, effectiveness, and how it works. Learn how MindscapeRx can help improve your mental health.",
    url: `https://mindscaperx.com/faq/`, // Canonical URL of the page
    images: [
      {
        url: '../../assets/logo_only_no_backgound.png', // OpenGraph image for social sharing
        width: 1200,
        height: 630,
        alt: 'MindscapeRx FAQ Page', // Alternative text for accessibility
      },
    ],
    type: 'website', // OpenGraph type for a general website
  },
  twitter: {
    card: 'summary_large_image', // Twitter card type for large preview images
    title: 'MindscapeRx | Frequently Asked Questions About Ketamine Therapy',
    description:
      "Find answers to common questions about at-home ketamine therapy, including its benefits, safety, effectiveness, and how it works. Learn how MindscapeRx can help improve your mental health.",
    images: ['../../assets/logo_only_no_backgound.png'], // Image for Twitter card
  },
};

// Define the FAQ page component
export default function Page() {
  return (
    <Effect>
      {/* Header component at the top of the page */}
      <Header />
      {/* BannerFAQ renders the page's banner section */}
      <BannerFAQ />

      {/* FaqSection renders the FAQ content */}
      <FaqSection />

      {/* Footer renders the site-wide footer */}
      <Footer />
    </Effect>
  );
}
