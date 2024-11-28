import Image from 'next/image'; // Importing Next.js optimized Image component
import image from '../../../assets/home/card-1.jpg'; // Importing image for the first card
import image2 from '../../../assets/home/card-2.jpg'; // Importing image for the second card
import image3 from '../../../assets/home/card-3.jpg'; // Importing image for the third card
import image4 from '../../../assets/home/card-4.jpg'; // Importing image for the fourth card
import image5 from '../../../assets/home/card-5.jpg'; // Importing image for the fifth card
import image6 from '../../../assets/home/card-6.jpg'; // Importing image for the sixth card

import { ContentWrapper } from '@/components'; // Importing ContentWrapper for consistent layout
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // FontAwesome icon for the arrow
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome component for rendering icons

// Data for the cards
const items = [
  {
    image: image,
    title: "Experience Rapid Symptom Relief",
    text: "Research shows that ketamine rapidly reduces depression and anxiety symptoms, often within 24 hours of treatment, with sustained improvements over time.",
  },
  {
    image: image2,
    title: "Improved Self-Connection",
    text: "Ketamine-assisted therapy helps you access deep self-compassion and intuition, removing psychological barriers such as fear, shame, and resistance, which can impede therapeutic progress.",
  },
  {
    image: image3,
    title: "Fewer Side Effects",
    text: "Lower-dose ketamine typically has fewer side effects compared to higher doses like those used in IV ketamine infusions. Ketamine may also have fewer side effects than many traditional antidepressant medications.",
  },
  {
    image: image4,
    title: "Reduced Psychological Barriers",
    text: "Ketamine can subdue the stress response in the nervous system, reducing feelings of fear. This allows you to process feelings of guilt, shame, and other psychological barriers.",
  },
  {
    image: image5,
    title: "Take It Anywhere, Anytime",
    text: "You can use low and mid-dose ketamine in the comfort of your home, on your own schedule, without needing a sitter or guide. And you can legally carry your medication when traveling in the U.S.",
  },
  {
    image: image6,
    title: "Enhanced Creativity",
    text: "By quieting self-doubt and removing mental barriers, ketamine frees the mind, allowing for heightened creativity and problem-solving.",
  },
];

const Cards = () => {
  return (
    <div className="overflow-hidden pt-[50px] pb-[60px] rounded-bl-[50px] rounded-br-[50px]"
      style={{ background: "linear-gradient(34deg, #ffcb00 6%, #9fe92f 21%, #57e951 53%, #15a9db 72%, #3575bd 100%)"}}
    >
      <ContentWrapper>
        {/* Grid layout for the cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Loop through items to render each card dynamically */}
          {items.map((item, index) => (
            <div
              className="relative rounded-lg overflow-hidden group cursor-pointer"
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100} // Delay for AOS (Animate On Scroll)
              data-aos-duration="800"
            >
              {/* Overlay effect that appears on hover */}
              <div className="bg-[#000000] duration-300 opacity-20 left-[0%] absolute w-[100%] h-[100%] group-hover:opacity-40"></div>
              {/* Display the image inside the card */}
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-[400px] object-cover"
              />
              {/* Text content of the card, positioned at the bottom */}
              <div className={`absolute top-[87%] left-0 text-white p-4 duration-500 ${index === 0 || index === 3 ? "group-hover:top-[54%]" : index === 5 ? "group-hover:top-[62%]" : "group-hover:top-[47%]"}   group-hover:bg-[#008000d0] group-hover:opacity-80`}>
                <h3 className="font-semibold text-[22px]">{item.title}</h3>
                <p className="text-[#ffffffec] leading-[1.9]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Button to begin transformation */}
        <button className="group flex mx-auto font-bold gap-2 w-[300px] bg-black p-3 text-yellow-500 rounded-full text-center justify-center items-center transition-all duration-500 mt-12 border border-solid border-black hover:text-black hover:bg-[#ffffff]">
          Begin your transformation
          <div>
            <FontAwesomeIcon
              icon={faArrowUp}
              className="text-yellow-500 w-[14px] rotate-[45deg] duration-500 group-hover:text-black group-hover:bg-transparent"
            />
          </div>
        </button>
      </ContentWrapper>
    </div>
  );
};

export default Cards;
