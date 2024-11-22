// 'use client'
import CourseData from "@/data/music_courses.json"
import Image from "next/image"

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

const CoursesPage = async ({params}:any) => {
  const {slug} = await params;
  const slugCourse = CourseData.courses.find((course)=>course.slug === `/courses/${slug}`);
  console.log(slugCourse);

  if(!slugCourse){
    return(
      <div className="min-h-screen bg-black bg-grid-white/[0.2] py-12 pt-36 flex justify-center items-center">
        <p className="text-white">Course not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black bg-grid-white/[0.2] py-12 pt-36 flex justify-center items-center">
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <Image
            src={slugCourse.image}
            alt={slugCourse.title}
            height={300}
            width={200}
            />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{slugCourse.title}</h2>
          <p>{slugCourse.description}</p>
          <div className="card-actions flex flex-col">
            <p className="text-base"><span className="font-bold text-lg pr-4">Instructors:</span>{slugCourse.instructor}</p>
            <p className="text-base"><span className="font-bold text-lg pr-4">Price:</span>{slugCourse.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesPage
