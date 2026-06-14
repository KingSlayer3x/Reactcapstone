import React, { useState } from "react";
import { navLinks } from "../utils/data";
import { FiList, FiX } from "react-icons/fi";
import { Logo } from "./Logo";
export default function Navbar(){
    const [ isOpen, setIsOpen ] = useState(false);
    return(
        <header className="sticky top-0 bg-white">
            <nav className=" flex justify-around items-center py-4">
                <div className="shrink-0">
                    <Logo />
                </div>
                <div className=" hidden md:block md:items-center">
                    <ul className="flex space-x-6">
                        {navLinks.map((link, index) => (
                            <li key={index} className="hover:scale-110 transition-all">
                                <a href={link.href} className="hover:text-gray-600">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sm:block md:hidden cursor-pointer text-2xl" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX /> : <FiList />}
                </div>
            </nav>
            {/* Mobile dropdown menu controlled by state*/}
            {isOpen && (
                <div className="sm:block md:hidden pb-1 w-40 mt-[-3%] absolute right-[10%]">
                    <ul className="flex flex-col space-y-4 bg-gray-200 rounded shadow p-3">
                        {navLinks.map((link, index) => (
                            <li key={index} className="">
                                <a href={link.href} className="block hover:text-gray-600" onClick={() => setIsOpen(false)}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    )
}

