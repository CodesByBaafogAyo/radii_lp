"use client"

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaPlus, FaTimes } from "react-icons/fa";
import Image from 'next/image';
import { FaPhone } from 'react-icons/fa';


const NavigationBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        { id: 1, link: "Home" },
        { id: 2, link: "About" },
        { id: 3, link: "Features" },
        { id: 4, link: "Testimonials" },
        { id: 5, link: "FAQs" },
        { id: 6, link: "Contact Us" },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-36 z-50 text-black bg-transparent nav">
            <div>
                <Image src="/images/LogoBlack.png" className='z-10 hidden md:flex' alt='urubytes logo' width={100} height={100}/>
            </div>

            <ul className="hidden md:flex z-50">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="nav-links px-4 cursor-pointer self-center font-medium text-black hover:scale-105 hover:text-white duration-200 link-underline"
                    >
                        <Link href={`#${link}`}>{link}</Link>
                    </li>
                ))}
                <li className="nav-links px-4 cursor-pointer capitalize font-medium bg-white rounded-xl text-[#F27405] py-2 hover:scale-105 hover:text-white duration-200 link-underline">
                    <a href="https://signup.page" target="_blank" rel="noopener noreferrer">Sign up</a>
                </li>
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-50 text-black md:hidden"
            >
                {nav ? <FaTimes className="fixed right-10 top-10" size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center fixed top-0 left-0 z-30 w-full min-h-screen bg-gradient-to-r from-[#83FFD0] to-[#027368] text-black">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer py-6 text-xl"
                        >
                            <Link onClick={() => setNav(!nav)} href={`#${link}`}>
                                {link}
                            </Link>
                        </li>
                    ))}
                    <li className="px-4 cursor-pointer capitalize py-3 text-xl bg-white text-[#F27405] rounded-2xl">
                        <a onClick={() => setNav(!nav)} href="https://signup.page" target="_blank" rel="noopener noreferrer">Sign up</a>
                    </li>
                </ul>
            )}

            {/* FAB Button */}
            <a href="https://wa.link/j508ug" target="_blank" rel="noopener noreferrer">
                <button className="fab fixed bottom-10 right-10 flex items-center p-4 rounded-full bg-[#F27405] text-white shadow-lg hover:bg-[#d96304] transition duration-300">
                    <FaPhone size={24} className="mr-2" />
                    <span className="text-lg">Talk To Us</span>
                </button>
            </a>
        </div>
    );
};

export default NavigationBar;
