import React from 'react';
import { useNavigate } from 'react-router-dom';

import FundCard from './FundCard';
import { loader } from '../assets';
import Banner from './Banner';

var featuredSize = 1;
const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title.replace(/\s+/g, '-')}`, { state: campaign })
  }
  
  return (
    <div className="mx-auto">
        {/* {!isLoading && campaigns.length > 0 && campaigns.slice(0, featuredSize).map((campaign) => <Banner 
          key={campaign.id}
          {...campaign}
          handleClick={() => handleNavigate(campaign)}
        />)} */}

      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{title} ({campaigns.length})</h1>
      <h3 className="mb-[20px] mobile:text-[14px] mobile:max-w-[46ch] font-epilogue font-normal text-[16px] text-[#808190] text-left">Browse a list of all currently active campaigns.</h3>

      <div className="sorting-container">

        <div className="flex flex-row gap-2 sorting-pills">
          <div className="hover:text-[#cbcbcb] hover:transition-[0.2s] transition-[0.2s] cursor-pointer font-bold rounded-lg px-[12px] py-[6px] bg-[#1C1C24] text-[14px] text-[#808191] sort-by-last">
            <h3>Sort by latest</h3>
          </div>

          <div className="hover:text-[#cbcbcb] hover:transition-[0.2s] transition-[0.2s] cursor-pointer font-bold rounded-lg px-[12px] py-[6px] bg-[#1C1C24] text-[14px] text-[#808191] sort-by-first">
            <h3>Sort by oldest</h3>
          </div>
        </div>

      </div>

      <div className="flex mx-auto flex-wrap justify-between mt-[20px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            There is no campaign data to show. Start by creating your own!
          </p>
        )}

        {!isLoading && campaigns.length > 0 && campaigns.slice(0).reverse().map((campaign) => <FundCard 
          key={campaign.id}
          {...campaign}
          handleClick={() => handleNavigate(campaign)}
        />)}
      </div>
    </div>
  )
}

export default DisplayCampaigns