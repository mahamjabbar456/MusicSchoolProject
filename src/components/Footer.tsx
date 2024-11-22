import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-black p-12">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
        <h2 className="text-lg font-bold pb-4">About Us</h2>
        <p className="text-gray-500 text-base">With a team of dedicated and experienced instructors, we offer a comprehensive curriculum that spans a wide range of instruments, genres, and skill levels.</p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg font-bold pb-4">Quick Links</h2>
        <Link className="text-base text-gray-500" href={"/"}>Home</Link>
        <Link className="text-base text-gray-500" href={"/courses"}>All Courses</Link>
        <Link className="text-base text-gray-500" href={"/contact"}>Contact</Link>
      </div>
      <div>
        <h2 className="text-lg font-bold pb-4">Follow Us</h2>
        <div className="flex text-gray-500 text-base gap-3 flex-col">
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold pb-4">Contact Us</h2>
        <p className="text-base text-gray-500">Karachi,Pakistan</p>
        <p className="text-base text-gray-500">Karachi 5000</p>
        <p className="text-base text-gray-500">Email: music@gmail.com</p>
        <p className="text-base text-gray-500">Phone: +9288584673</p>
      </div>
        </div>
        <div className="mt-8 text-center">
            <p className="md:text-base text-sm text-gray-500">@ 2025 Music School. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
