'use client';
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const MusicSchoolTestimonials = [
    {
        quote:
            "Joining this music school has been a life-changing experience. I've learned to express myself through music in ways I never thought possible, and every lesson brings new challenges and excitement.",
        name: "John Smith",
        title: "Piano Student",
    },
    {
        quote:
            "Teaching here has allowed me to watch students grow from complete beginners to confident musicians. There's nothing more rewarding than seeing someone discover their passion for music.",
        name: "Emily Brown",
        title: "Violin Instructor",
    },
    {
        quote:
            "The moment when you finally master a piece you've been struggling with—that’s what makes all the practice worth it. This school has given me the support and guidance I needed to reach that moment time and time again.",
        name: "Alex Turner",
        title: "Guitar Student",
    },
    {
        quote:
            "As a parent, I've seen my child's confidence soar as they've progressed from simple melodies to complex compositions. The personalized approach to teaching makes all the difference.",
        name: "Sarah Johnson",
        title: "Parent of a Student",
    },
    {
        quote:
            "Learning here has been like setting sail on a musical adventure. The instructors inspire curiosity and creativity, making each lesson an exciting exploration of sound and rhythm.",
        name: "Michael Lee",
        title: "Drum Student",
    },
];


const MusicSchoolTestimonialCards = () => {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] flex items-center justify-center flex-col relative overflow-hidden">
            <h2 className="font-bold text-center text-3xl mb-8 z-10">Hear our Harmony: Voices of Success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={MusicSchoolTestimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default MusicSchoolTestimonialCards
