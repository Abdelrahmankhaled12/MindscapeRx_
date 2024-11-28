import "./globals.css"; // Import global styles for the application
import ButtonScroll from "@/components/buttonScroll/ButtonScroll"; // Importing ButtonScroll component for scroll-to-top functionality
import { AOSInit } from "@/components/aos/AOSInit"; // Importing AOSInit for animations initialization

// Define RootLayout component, which wraps the entire application layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Ensuring that children are of type ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/icon_only.ico" />
      </head>
      <body>
        {/* Rendering the children passed to this layout */}
        {children}

        {/* Initialize AOS (Animate On Scroll) for scroll-based animations */}
        <AOSInit />

        {/* Button to scroll to the top of the page, typically appears when scrolling down */}
        <ButtonScroll />
      </body>
    </html>
  );
}
