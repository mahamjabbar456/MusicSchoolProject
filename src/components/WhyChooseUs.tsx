"use client";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: "Collaborative Music Learning",
      description:
        "Learn and create music together with fellow students, instructors, and musicians. Collaborate on compositions, share ideas, and make quick adjustments. Our platform helps streamline your musical workflow and enhances the learning experience.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Music Learning
        </div>
      ),
    },
    {
      title: "Real-Time Lesson Updates",
      description:
        "Stay updated with live changes during lessons and practice sessions. Track every note, correction, and adjustment as it happens. No more confusion over the latest version of sheet music or practice tracks. Embrace the ease of real-time updates in your music education.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/guitar.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="real-time music lesson demo"
          />
        </div>
      ),
    },
    {
      title: "Sheet Music & Track Version Control",
      description:
        "Access the latest versions of sheet music, audio tracks, and lesson plans without any confusion. Our platform ensures you're always working with the most recent materials, eliminating the need for manual updates. Keep your music class on track and aligned.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Sheet Music & Track Version Control
        </div>
      ),
    },
    {
      title: "Never Run Out of Musical Inspiration",
      description:
        "With our extensive library of sheet music, practice exercises, and lesson plans, you'll never run out of content. Our platform provides the tools to keep your creativity flowing and ensures that you always have new material to explore and enjoy.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Musical Inspiration at Your Fingertips
        </div>
      ),
    },
  ];
  

const WhyChooseUs = () => {
  return (
    <div className="p-10">
      <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs
