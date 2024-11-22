'use client'
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FormEvent, useState } from "react";

const contact = () => {
    const [email,setEmail] = useState<string>('');
    const [message,setMessage] = useState<string>("");
    
    const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log("Submitted", {email,message});
    }
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      <div className="max-w-2xl mx-auto p-4 z-10 relative">
        <h1 className="text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center font-bold">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
        We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <input
            type="email"
            value={email}
            placeholder="Your email address"
            onChange={(e)=>setEmail(e.target.value)}
            className="rounded-lg border text-neutral-600 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
            />
            <textarea
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            placeholder="Your message"
            rows={5}
            className="rounded-lg text-neutral-600 border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
            ></textarea>
            <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:ring-2 focus:ring-teal-500 focus:outline-none focus:ring-offset-2"
            >
                Send Message
            </button>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default contact
