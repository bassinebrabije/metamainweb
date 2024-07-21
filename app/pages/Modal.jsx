"use client";
import { useState, useEffect } from 'react';
import Image from "next/image"
export default function Modal({ isOpen, onClose }) {
    // Close modal when clicking outside
    const handleClickOutside = (event) => {
        if (event.target.id === 'modal-overlay') {
            onClose();
        }
    };

    // Close modal with Escape key
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    // Block and unblock scrolling
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            <div
                id="modal-overlay"
                className="fixed inset-0 z-10 bg-black bg-opacity-50 backdrop-blur-sm"
                onClick={handleClickOutside}
            ></div>
            <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0"
                tabIndex={-1} // Make div focusable
            >
                <div className="relative mx-auto w-full overflow-hidden rounded-lg bg-white shadow-xl sm:max-w-sm">
                    {/* Close Button */}
                    <button
                        type="button"
                        className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                        onClick={onClose}
                    >
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-5">
                        <div className="text-center">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full  ">
                                <Image
                                    src="/images/logo.png"
                                    width={120}
                                    height={120}
                                    alt="Profile Picture"
                                    className="w-auto" />
                            </div>
                            <div>
                                <h3 className="text-lg text-[#43c7ed] font-medium text-secondary-900"> <span className='text-[#2e2f68]'>Meta Learning </span>Hub</h3>
                                <div className="mb-5  font-normal text-gray-800 text-center">
                                    We are here to help you Start, Optimize and Scale your e-commerce by giving you easy access to manufacturers, fulfillment centers and shipping carriers in many countries.


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
