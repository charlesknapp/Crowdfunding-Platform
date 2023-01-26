import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
        { /* ============================ HERO ELEMENT ============================ */ }
        <div className="bg-white dark:bg-[#1c1c24] rounded-t-xl overflow-hidden relative lg:flex lg:items-center">
            <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-[6rem] z-20">
                <h2 className="font-extrabold text-black dark:text-white lg:leading-[3.5rem] sm:text-[48px]">
                    <span className="laptop:max-w-[22ch] block">
                        Create Extraordinary Things Together
                    </span>
                </h2>
                <p className="text-md mt-4 text-gray-400">
                    KROWD can help you achieve your crowdfunding campaign goals, powered by the blockchain!
                    Built with ReactJS, NodeJS, Vite, Tailwind CSS and more
                    - KROWD is a fully-responsive solution to your next crowdfunding project.
                </p>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="gap-4 laptop:w-[100%] max-w-[100%] mt-12 flex rounded-md shadow">
                        <a href="/create-campaign">
                            <button type="button" className="laptop:text-[14px] py-2 px-2  bg-[#4ACD8D] hover:bg-green-700 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none  rounded-lg ">
                                Get Started
                            </button>
                        </a>
                        <a href="/landing">
                            <button type="button" className="laptop:text-[14px] py-2 px-2  bg-gray-500 hover:bg-gray-700 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none  rounded-lg ">
                                Explore All Campaigns
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-8 p-8 lg:p-24">
                <img src="https://www.tailwind-kit.com/images/landscape/3.jpg" className="w-1/2 rounded-lg" alt="Tree"/>
                <div>
                    <img src="https://www.tailwind-kit.com/images/landscape/2.jpg" className="mb-8 rounded-lg" alt="Tree"/>
                    <img src="https://www.tailwind-kit.com/images/landscape/4.jpg" className="rounded-lg" alt="Tree"/>
                </div>
            </div>
        </div>

        { /* ============================ MEMBERS ELEMENT ============================ */ }
    <div className="flex-col bg-white dark:bg-[#1c1c24] rounded-b-xl overflow-hidden relative lg:flex">
        <div className="flex flex-col mobile:mx-[1rem] mx-[6rem]">
            <p className="sm:text-[42px] ml-auto text-3xl font-bold text-center text-gray-800 dark:text-white">
                Receiving Funding Was Never So Easy
            </p>
            <p className="md:mt-5 ml-auto mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-300">
                Meet some of the members who've received funding on their projects.
            </p>
        </div>
        <div className="mx-[2rem] md:mb-[4rem] md:mx-[4rem] grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                            <img alt="profil" src="https://www.tailwind-kit.com/images/person/4.jpg" className="mx-auto object-cover rounded-full h-20 w-20 "/>
                        </a>
                    </div>
                    <div className="mt-2 text-center flex flex-col">
                        <span className="text-lg font-medium text-gray-600 dark:text-white">
                            Hean Hiut
                        </span>
                        <span className="text-xs text-gray-400">
                            Designer
                        </span>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                            <img alt="profil" src="https://www.tailwind-kit.com/images/person/5.jpg" className="mx-auto object-cover rounded-full h-20 w-20 "/>
                        </a>
                    </div>
                    <div className="mt-2 text-center flex flex-col">
                        <span className="text-lg font-medium text-gray-600 dark:text-white">
                            Igor Novak
                        </span>
                        <span className="text-xs text-gray-400">
                            Designer
                        </span>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                            <img alt="profil" src="https://www.tailwind-kit.com/images/person/6.jpg" className="mx-auto object-cover rounded-full h-20 w-20 "/>
                        </a>
                    </div>
                    <div className="mt-2 text-center flex flex-col">
                        <span className="text-lg font-medium text-gray-600 dark:text-white">
                            Jig sa Hiut
                        </span>
                        <span className="text-xs text-gray-400">
                            Boucher
                        </span>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                            <img alt="profil" src="https://www.tailwind-kit.com/images/person/7.jpg" className="mx-auto object-cover rounded-full h-20 w-20 "/>
                        </a>
                    </div>
                    <div className="mt-2 text-center flex flex-col">
                        <span className="text-lg font-medium text-gray-600 dark:text-white">
                            Norman Tuck
                        </span>
                        <span className="text-xs text-gray-400">
                            Architect
                        </span>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                            <img alt="profil" src="https://www.tailwind-kit.com/images/person/8.jpg" className="mx-auto object-cover rounded-full h-20 w-20 "/>
                        </a>
                    </div>
                    <div className="mt-2 text-center flex flex-col">
                        <span className="text-lg font-medium text-gray-600 dark:text-white">
                            Masrt kik
                        </span>
                        <span className="text-xs text-gray-400">
                            Chef
                        </span>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                            <img alt="profil" src="https://www.tailwind-kit.com/images/person/9.jpg" className="mx-auto object-cover rounded-full h-20 w-20 "/>
                        </a>
                    </div>
                    <div className="mt-2 text-center flex flex-col">
                        <span className="text-lg font-medium text-gray-600 dark:text-white">
                            Louis Bol
                        </span>
                        <span className="text-xs text-gray-400">
                            Sdf
                        </span>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                            <img alt="profil" src="https://www.tailwind-kit.com/images/person/10.jpg" className="mx-auto object-cover rounded-full h-20 w-20 "/>
                        </a>
                    </div>
                    <div className="mt-2 text-center flex flex-col">
                        <span className="text-lg font-medium text-gray-600 dark:text-white">
                            Izno god
                        </span>
                        <span className="text-xs text-gray-400">
                            American
                        </span>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                            <img alt="profil" src="https://www.tailwind-kit.com/images/person/1.jpg" className="mx-auto object-cover rounded-full h-20 w-20 "/>
                        </a>
                    </div>
                    <div className="mt-2 text-center flex flex-col">
                        <span className="text-lg font-medium text-gray-600 dark:text-white">
                            Serena Quille
                        </span>
                        <span className="text-xs text-gray-400">
                            Designer
                        </span>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                            <img alt="profil" src="https://www.tailwind-kit.com/images/person/6.jpg" className="mx-auto object-cover rounded-full h-20 w-20 "/>
                        </a>
                    </div>
                    <div className="mt-2 text-center flex flex-col">
                        <span className="text-lg font-medium text-gray-600 dark:text-white">
                            Edouard Sert
                        </span>
                        <span className="text-xs text-gray-400">
                            Developer
                        </span>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                            <img alt="profil" src="https://www.tailwind-kit.com/images/person/8.jpg" className="mx-auto object-cover rounded-full h-20 w-20 "/>
                        </a>
                    </div>
                    <div className="mt-2 text-center flex flex-col">
                        <span className="text-lg font-medium text-gray-600 dark:text-white">
                            Parki Son
                        </span>
                        <span className="text-xs text-gray-400">
                            Designer
                        </span>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                            <img alt="profil" src="https://www.tailwind-kit.com/images/person/9.jpg" className="mx-auto object-cover rounded-full h-20 w-20 "/>
                        </a>
                    </div>
                    <div className="mt-2 text-center flex flex-col">
                        <span className="text-lg font-medium text-gray-600 dark:text-white">
                            Marine Lo
                        </span>
                        <span className="text-xs text-gray-400">
                            SEO
                        </span>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                            <img alt="profil" src="https://www.tailwind-kit.com/images/person/4.jpg" className="mx-auto object-cover rounded-full h-20 w-20 "/>
                        </a>
                    </div>
                    <div className="mt-2 text-center flex flex-col">
                        <span className="text-lg font-medium text-gray-600 dark:text-white">
                            Mickal Poul
                        </span>
                        <span className="text-xs text-gray-400">
                            Freelance
                        </span>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                            <img alt="profil" src="https://www.tailwind-kit.com/images/person/5.jpg" className="mx-auto object-cover rounded-full h-20 w-20 "/>
                        </a>
                    </div>
                    <div className="mt-2 text-center flex flex-col">
                        <span className="text-lg font-medium text-gray-600 dark:text-white">
                            Isac Tou
                        </span>
                        <span className="text-xs text-gray-400">
                            Freelance
                        </span>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                            <img alt="profil" src="https://www.tailwind-kit.com/images/person/6.jpg" className="mx-auto object-cover rounded-full h-20 w-20 "/>
                        </a>
                    </div>
                    <div className="mt-2 text-center flex flex-col">
                        <span className="text-lg font-medium text-gray-600 dark:text-white">
                            Jean Eu
                        </span>
                        <span className="text-xs text-gray-400">
                            Designer
                        </span>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                            <img alt="profil" src="https://www.tailwind-kit.com/images/person/9.jpg" className="mx-auto object-cover rounded-full h-20 w-20 "/>
                        </a>
                    </div>
                    <div className="mt-2 text-center flex flex-col">
                        <span className="text-lg font-medium text-gray-600 dark:text-white">
                            Yves P
                        </span>
                        <span className="text-xs text-gray-400">
                            Humor
                        </span>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                            <img alt="profil" src="https://www.tailwind-kit.com/images/person/1.jpg" className="mx-auto object-cover rounded-full h-20 w-20 "/>
                        </a>
                    </div>
                    <div className="mt-2 text-center flex flex-col">
                        <span className="text-lg font-medium text-gray-600 dark:text-white">
                            Marco Tol
                        </span>
                        <span className="text-xs text-gray-400">
                            Designer
                        </span>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                            <img alt="profil" src="https://www.tailwind-kit.com/images/person/6.jpg" className="mx-auto object-cover rounded-full h-20 w-20 "/>
                        </a>
                    </div>
                    <div className="mt-2 text-center flex flex-col">
                        <span className="text-lg font-medium text-gray-600 dark:text-white">
                            Huge Ar
                        </span>
                        <span className="text-xs text-gray-400">
                            CEA
                        </span>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex-col  flex justify-center items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                            <img alt="profil" src="https://www.tailwind-kit.com/images/person/8.jpg" className="mx-auto object-cover rounded-full h-20 w-20 "/>
                        </a>
                    </div>
                    <div className="mt-2 text-center flex flex-col">
                        <span className="text-lg font-medium text-gray-600 dark:text-white">
                            Big Bro
                        </span>
                        <span className="text-xs text-gray-400">
                            CTO
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    { /* ============================ ABOUT ELEMENT ============================ */ }
</div>
  )
}

export default Hero