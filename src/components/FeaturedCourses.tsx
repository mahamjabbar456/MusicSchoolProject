'use client';

import Link from "next/link"
import { Button } from "./ui/moving-border";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string
}

const FeaturedCourses = () => {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);
    return (
        <div className="py-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="uppercase text-base text-teal-600 font-semibold tracking-wide">Featured Courses</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {featuredCourses.map((course: Course) => {
                            return (
                                <div key={course.id} className="flex justify-center">
                                    <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                        <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                            <Image
                                                src={course.image}
                                                alt={course.title}
                                                width={400}
                                                height={400}
                                                className="object-contain w-[350px] h-[250px]"
                                            />
                                            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">{course.description}</p>
                                            <Link href={course.slug}>
                                                <Button
                                                    borderRadius="1.75rem"
                                                    className="bg-white dark:bg-white text-black dark:text-black border-neutral-200 font-bold dark:border-slate-800"
                                                >Learn More</Button>
                                            </Link>
                                        </div>
                                    </BackgroundGradient>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="mt-20 text-center">
                    <Link href={"/courses"}>
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 font-bold dark:border-slate-800"
                        >
                            View All Courses
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCourses
