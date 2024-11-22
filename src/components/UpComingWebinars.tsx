'use client';

import Link from "next/link"
import { Button } from "./ui/moving-border"
import { HoverEffect } from "./ui/card-hover-effect";

interface Webinars {
    title:string,
    description:string,
    slug:string,
    isFeatured:boolean
}

export const featuredWebinars = [
    {
      title: "Mastering Music Theory",
      description:
        "Join us for an in-depth webinar on the fundamentals of music theory. Learn how scales, chords, and harmony come together to create beautiful music.",
      slug:"mastering-music-theory",
      isFeatured:true
    },
    {
      title: "Improvisation Techniques with Jazz Experts",
      description:
        "A live session with experienced jazz musicians who will guide you through the art of improvisation. Perfect for those looking to enhance their creativity and play spontaneously.",
        slug:"improvisation-techniques-with-jazz-experts",
        isFeatured:true
    },
    {
      title: "Vocal Techniques for Beginners",
      description:
        "Discover the basics of vocal techniques in this beginner-friendly webinar. Learn how to improve your voice control, pitch, and confidence while singing.",
        slug:"vocal-techniques-for-beginners",
        isFeatured:true
    },
    {
      title: "Guitar Fingerstyle Masterclass",
      description:
        "A comprehensive masterclass focusing on fingerstyle guitar techniques, covering everything from basic patterns to advanced playing styles.",
        slug:"guitar-fingerstyle-masterclass",
        isFeatured:true
    },
    {
      title: "Composing for Film and Media",
      description:
        "Explore the world of music composition for film and media. This webinar will cover the essentials of scoring, soundtracking, and creating mood with music.",
        slug:"composing-for-film-and-media",
        isFeatured:true
    },
    {
      title: "Drum Beats and Rhythms Workshop",
      description:
        "Join our expert drummer for a workshop that dives into the rhythms and beats essential to various music genres. Suitable for all levels.",
        slug:"drum-beats-and-rhythms-workshop",
        isFeatured:true
    },
  ];
  

const UpComingWebinars = () => {
    const featuredWebinar = featuredWebinars.filter((webinar: Webinars) => webinar.isFeatured);
    return (
        <div className="py-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="uppercase text-base text-teal-600 font-semibold tracking-wide">Featured Webinars</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
                </div>
                <div className="mt-10">
                     <HoverEffect items={featuredWebinar.map((webinar:Webinars,index:number) =>(
                        {
                            title:webinar.title,
                            description:webinar.description,
                            link:webinar.slug
                        }
                     ))} />
                </div>
                <div className="mt-20 text-center">
                <Link href={"/"}>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 font-bold dark:border-slate-800"
                    >
                        View All Webinars
                    </Button>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default UpComingWebinars
