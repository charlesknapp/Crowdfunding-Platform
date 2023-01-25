import React from 'react'
import { tagType, thirdweb } from '../assets';
import { daysLeft } from '../utils';

const Banner = ({ owner, title, description, target, deadline, amountCollected, image, handleClick }) => {
    const remainingDays = daysLeft(deadline);
  return (
<div className="mobile:nth-child(2)mobile2:flex-column">
    <h1 className="mb-[10px] font-epilogue font-semibold text-[18px] text-white text-left">⭐ Featured Campaigns</h1>
    <h3 className="mb-[20px] mobile:max-w-[46ch] font-epilogue font-normal text-[16px] text-[#808190] text-left">It's time to back a project! Browse from our list of most-recent.</h3>

        {/* BANNER 3 / 4 */}
    <div className="flex-row flex mobile:gap-[0.75rem] gap-[2rem]">
        <div className="hover:scale-[1.02] transition-all hover:transition-all flex flex-col w-1/2 gap-5 p-2 mb-[2rem] bg-[#1c1c24] shadow-lg select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row ">
            <div className="bg-[#272730] h-52 sm:h-full sm:w-72 rounded-xl" onClick={handleClick}>
                <img src={image} alt="Featured" className="w-full h-[100%] object-cover rounded-[15px]"/>
            </div>
            <div className="flex flex-col flex-1 gap-5 sm:p-2">
                <div className="flex flex-col flex-1 gap-3">
                    <div className="block pl-[1rem] items-center w-full h-14 rounded-2xl">
                        <h3 className="font-epilogue font-semibold text-[20px] text-white text-left leading-[26px] truncate">{title}</h3>
                        {/* <div className="flex">
                            <img src={tagType} alt="tag" className="w-[17px] h-[17px] object-contain"/>
                            <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">Category</p>
                        </div> */}
                        <p className="min-w-[10ch] max-w-[58ch] mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[17px] whitespace-pre truncate">{description}</p>
                    </div>
                </div>
                <div className="flex gap-3 mt-auto">
                    <div className="items-center justify-around flex gap-2 w-[30%] h-8 bg-[#272730] rounded-full">
                        <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">{amountCollected}</h4>
                        <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Raised of {target}</p>
                    </div>
                    <div className="items-center justify-around flex w-24 h-8 ml-auto bg-[#272730] rounded-full">
                        <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">{remainingDays}</h4>
                        <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Days Left</p>
                    </div>
                </div>
            </div>
        </div>

        {/* BANNER 1 / 2 */}

        <div className="hover:scale-[1.02] transition-all hover:transition-all flex flex-col w-1/2 gap-5 p-2 mb-[2rem] bg-[#1c1c24] shadow-lg select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row ">
            <div className="bg-[#272730] h-52 sm:h-full sm:w-72 rounded-xl">
                <img src={image} alt="Featured" className="w-full h-[100%] object-cover rounded-[15px]"/>
            </div>
            <div className="flex flex-col flex-1 gap-5 sm:p-2">
                <div className="flex flex-col flex-1 gap-3">
                    <div className="w-full h-14 rounded-2xl">
                        <h3 className="max-w-[100%] font-epilogue font-semibold text-[20px] text-white text-left leading-[26px] truncate">{title}</h3>
                        <div className="flex">
                            <img src={tagType} alt="tag" className="w-[17px] h-[17px] object-contain"/>
                            <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">Category</p>
                        </div>
                    </div>
                        <p className="min-w-[10ch] max-w-[30ch] mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[17px] whitespace-pre truncate">{description}</p>
                </div>
                <div className="flex gap-3 mt-auto">
                    <div className="w-20 h-8 bg-[#272730] rounded-full">
                    </div>
                    <div className="w-20 h-8 bg-[#272730] rounded-full">
                    </div>
                    <div className="w-20 h-8 ml-auto bg-[#272730] rounded-full">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Banner