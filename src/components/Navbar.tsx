'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="flex flex-col space-y-4 text-sm">
               <HoveredLink href="/courses">All Courses</HoveredLink>
               <HoveredLink href="/courses/guitar-fundamentals">Guitar Fundamentals</HoveredLink>
               <HoveredLink href="/courses/piano-for-beginners">Piano for Beginners</HoveredLink>
               <HoveredLink href="/courses/advanced-vocal-techniques">Advanced Vocal Techniques</HoveredLink>
               <HoveredLink href="/courses/drumming-mastery">Drumming Mastery</HoveredLink>
            </div>
        </MenuItem>
        <Link href={"/contact"}>
           <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar
