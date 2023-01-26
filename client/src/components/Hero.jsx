import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="rounded-xl dark:bg-[#1c1c24]">
        { /* ============================ HERO ELEMENT ============================ */ }
        <div className="bg-white dark:bg-[#1c1c24] rounded-t-xl overflow-hidden relative lg:flex lg:items-center">
            <div className="w-full py-12 px-4 sm:px-6 xl:py-16 xl:px-12 self-start z-20">
                <h2 className="font-extrabold text-black dark:text-white lg:leading-[3.5rem] text-[26px] sm:text-[48px]">
                    <span className="laptop:max-w-[22ch] block">
                        Create <b className="text-[#4ACD8D]">Extraordinary</b> Things Together
                    </span>
                </h2>
                <p className="xl:max-w-[60ch] text-md xl:text-xl xl:mt-16 mt-4 text-gray-400">
                    KROWD can help you achieve your crowdfunding campaign goals, powered by the blockchain!
                    Built with ReactJS, NodeJS, Vite, Tailwind CSS and more
                    - KROWD is a fully-responsive solution to your next crowdfunding project.
                </p>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    {/* <div className="gap-4 laptop:w-[100%] max-w-[100%] mt-12 flex rounded-md shadow">
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
                    </div> */}
                </div>
            </div>
            <div className="mobile:mt-[-10%] items-start flex gap-8 p-8 xl:p-12">
                <img src="https://i.ibb.co/8cHJ0vN/heroimg-1.png" className="w-1/2 rounded-lg" alt="Tree"/>
                <div>
                    <img src="https://i.ibb.co/Yt5SnpL/heroimg-2.png" className="mb-8 rounded-lg" alt="Tree"/>
                    <img src="https://i.ibb.co/MMh4hX0/heroimg-3.png" className="relative z-[100] rounded-lg" alt="Tree"/>
                </div>
            </div>
        </div>

    { /* ============================ ABOUT ELEMENT ============================ */ }
    <div className="sm:mb-[8%] mb-[6%] xl:mb-[0%] mt-[0%] 2xl:mt-[-10%] xl:mt-[0%] px-6 lg:px-12 xl:px-20 flex-col bg-[white] dark:bg-[#1c1c24] overflow-hidden relative lg:flex">

        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-4 lg:items-center">
            <div class="ml-auto lg:col-start-2 lg:max-w-2xl">
                <p class="text-base font-semibold leading-6 text-indigo-500 uppercase">
                    Responsive
                </p>
                <h4 class="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                    <b className="text-[#4ACD8D]">KROWD</b> is built for all device sizes
                </h4>
                <p class="l:max-w-[60ch] text-md xl:text-xl xl:mt-12 mt-4 text-gray-400">
                    With full mobile, tablet, and desktop responsive screen designs, your next campaign project looks clean from the start.
                    We're even compatible with retina and 4K devices!
                </p>
                <ul class="gap-6 mt-8 md:grid md:grid-cols-2">
                    <li class="mt-6 lg:mt-0">
                        <div class="flex">
                            <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                Dynamic Sidebar
                            </span>
                        </div>
                    </li>
                    <li class="mt-6 lg:mt-0">
                        <div class="flex">
                            <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                MetaMask Enabled
                            </span>
                        </div>
                    </li>
                    <li class="mt-6 lg:mt-0">
                        <div class="flex">
                            <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                Modern Animations
                            </span>
                        </div>
                    </li>
                    <li class="mt-6 lg:mt-0">
                        <div class="flex">
                            <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                Unique Canvas Display
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                <div class="sm:hidden md:flex md:flex-col lg:flex mobile:hidden relative space-y-4">
                    <div class="flex items-end justify-center space-x-4 lg:mr-[25%] mr-[0%] xl:mr-[0%] xl:justify-start">
                        <img class="w-32 rounded-lg shadow-lg md:w-56" width="200" src="https://www.tailwind-kit.com/images/object/8.jpg" alt="1"/>
                        <img class="xl:flex lg:hidden w-40 rounded-lg shadow-lg md:w-64" width="260" src="https://www.tailwind-kit.com/images/landscape/4.jpg" alt="2"/>
                    </div>
                    <div class="sm:hidden xl:flex items-start justify-center xl:ml-12 space-x-4 lg:justify-start">
                        <img class="w-24 rounded-lg shadow-lg md:w-40" width="170" src="https://www.tailwind-kit.com/images/landscape/3.jpg" alt="3"/>
                        <img class="xl:flex lg:hidden w-32 rounded-lg shadow-lg md:w-56" width="200" src="https://www.tailwind-kit.com/images/object/9.jpg" alt="4"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    { /* ============================ MEMBERS ELEMENT ============================ */ }
    <div className="xl:text-end flex-col bg-white rounded-b-xl dark:bg-[#1c1c24] overflow-hidden relative lg:flex">
        <div className="flex flex-col xl:py-12 mobile:mx-[1rem] md:mx-[3rem] xl:mx-[6rem]">
            <p className="text-center lg:text-left xl:max-w-[48ch] mobile:mb-4 text-[22px] sm:text-[30px] md:text-[26px] lg:text-[28px] xl:text-[40px] xl:text-left font-bold text-gray-800 dark:text-white">
                Join the Movement Towards a More Decentralized World
            </p>
            <p className="l:max-w-[60ch] md:mt-5 xl:text-left mb-12 text-xl font-normal text-center text-gray-400">
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

</div>
  )
}

export default Hero