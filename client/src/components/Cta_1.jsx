import React from 'react'

const Cta_1 = () => {
  return (
    <div>

{ /* ============================ HERO ELEMENT ============================ */ }
        <div className="bg-white dark:bg-[rgba(0,0,0,0.0)] rounded-t-xl overflow-hidden relative lg:flex lg:items-center">
            <div className="w-full p-8 self-start z-20">
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
            <div className="mobile:mt-[-10%] items-start flex gap-8 p-8">
                <img src="https://i.ibb.co/8cHJ0vN/heroimg-1.png" className="w-1/2 rounded-lg" alt="Tree"/>
                <div>
                    <img src="https://i.ibb.co/Yt5SnpL/heroimg-2.png" className="mb-8 rounded-lg" alt="Tree"/>
                    <img src="https://i.ibb.co/MMh4hX0/heroimg-3.png" className="relative z-[100] rounded-lg" alt="Tree"/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Cta_1