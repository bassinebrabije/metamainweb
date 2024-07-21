"use client";

import { useState } from 'react';
import Image from "next/image";
import Modal from '../pages/Modal'; // Import the Modal component
import Home from '../pages/home';
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

    const handleClick = (link) => {
        setActiveLink(link);
        setOpen(false);
        if (link === 'About') {
            setIsModalOpen(true); // Open modal when 'About' is clicked
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close modal
    };

    return (
        <>
            <div className="w-full text-gray-700 bg-white">
                <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                    <div className="p-4 flex flex-row items-center justify-between">
                        <a href="#" className="text-lg tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline">
                            <Image
                                src="/images/metalogo.png"
                                width={120}
                                height={120}
                                alt="Profile Picture" />
                        </a>
                        <button
                            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
                            onClick={() => setOpen(!open)}
                        >
                            <svg fill="#43c7ed" viewBox="0 0 20 20" className="w-6 h-6">
                                {open ? (
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    ></path>
                                )}
                            </svg>
                        </button>
                    </div>
                    <nav
                        className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${open ? 'flex' : 'hidden'}`}
                    >
                        {['Home', 'About', 'Services', 'Reviews', 'Contact Us'].map((link) => (
                            <a
                                key={link}
                                className={`px-4 py-2 mt-2 text-sm rounded-lg md:mt-0 md:ml-4 focus:outline-none focus:shadow-outline border ${activeLink === link ? 'border-[#2e2f68]' : 'border-transparent'}`}
                                href="#"
                                onClick={() => handleClick(link)}
                            >
                                {link}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
            <Home />
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    );
}
