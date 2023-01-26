import React, { useState, useEffect } from 'react'
import { Form, useLocation, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { SiEthereum } from 'react-icons/si'
import { useStateContext } from '../context';
import { CountBox, CustomButton, Loader } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import Atropos from 'atropos/react';
import { thirdweb } from '../assets';

const CampaignDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, getDonations, contract, address } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [donators, setDonators] = useState([]);

  const remainingDays = daysLeft(state.deadline);
  const currency = "ETH";

  const fetchDonators = async () => {
    const data = await getDonations(state.pId);

    setDonators(data);
  }

  useEffect(() => {
    if(contract) fetchDonators();
  }, [contract, address])

  const handleDonate = async () => {
    setIsLoading(true);

    await donate(state.pId, amount); 

    navigate('/')
    setIsLoading(false);
  }

  return (
    <div>
      {isLoading && <Loader />}
      { /* FULL CONTAINER*/ }
      <div className="laptop-l:h-[86vh] laptop:h-[100%] tablet:h-[100%] mobile:h-[100%] mobile4:flex-col-reverse mobile:flex-col-reverse sm:flex-col xl:flex-row gap-3 flex flex-row">
      { /* ===================== LEFT COLUMN =====================*/ }
      <div id="campaignDetailCol" className="laptop-l:overflow-auto mobile:w-[100%] sm:w-[100%] flex flex-col xl:w-3/4 gap-5 mobile:mb-[2rem] select-none p-2 rounded-2xl sm:flex-row">
        
        <div className="flex-1 flex-col">
          { /* CAMPAIGN IMAGE BANNER */ }
          <Atropos activeOffset={5} rotateYMax={1} rotateXMax={1} shadow={false} highlight={false} className="atropos-banner hover:transition-all hover:shadow-[0_0px_35px_0px_rgba(0,0,0,0.3)] transition-all">
          <div data-atropos-offset="0" className="flex-1 flex-col bg-[#1c1c24] md:p-4 rounded-xl">
              <img data-atropos-offset="0.5" src={state.image} alt="campaign" className="w-full sm:h-[410px] h-[180px] object-cover rounded-t-lg"/>
                {/* PROGRESS */}
              <div data-atropos-offset="0.5" className="tablet:mt-0 rounded-b-lg relative w-full h-[10px] bg-[#3a3a43] md:mt-2">
                <div className="bg-cover rounded-bl-lg absolute h-full bg-[url(https://64.media.tumblr.com/1413b1c3862acbc67c42fe3df3609285/b6173f438e236e65-39/s400x600/3e5e6d34dfdd3e0ad9187c91f58f6c3e11d0efa2.gif)]" style={{ width: `${calculateBarPercentage(state.target, state.amountCollected)}%`, maxWidth: '100%'}}></div>
              </div>
              { /* ADDRESS */ }
              <div data-atropos-offset="0.5" className="tablet-s:flex-col tablet-s:mt-[0.5rem] mobile:flex-col mobile:justify-center mobile:mt-1 mobile:mb-3 mobile:pl-3 mobile:pr-3 tablet:mt-2 flex flex-row justify-between items-center">
                <p className="mobile-xl:hidden mobile:text-[14px] tiny:hidden flex mobile:items-center mobile:justify-center mobile:text-[16px] font-epilogue font-normal text-[16px] text-[#808191]">
                  <SiEthereum />
                  {state.owner}
                </p>
                <p className="tiny:mt-1 tablet-s:mb-[0.5rem] mobile:gap-2 mobile:flex mobile:justify-between tablet-s:text-[16px] mobile:text-[18px] float-right md:mt-1 font-epilogue font-normal text-[14px] text-[#808191]">
                  <span className="text-[lightGray] font-bold">{calculateBarPercentage(state.target, state.amountCollected)}%</span> <span>Funded</span>
                </p>
              </div>
          </div>
          </Atropos>
          {/* CAMPAIGN DETAILS */}
          <div className="mobile:mt-[1rem] mt-[2rem] flex-1 flex-col">
            <h4 className="font-epilogue font-semibold text-[20px] text-white">Campaign Details</h4>
            <div className="mt-[20px]">
              <p className="whitespace-pre-line font-epilogue font-normal text-[16px] md:mr-2 text-[#808191] leading-[26px] text-justify">{state.description}</p>
            </div>
          </div>
          {/* DONATOR LIST */}
          <div className="mobile:mt-[1rem] mt-[2rem] flex-1 flex-col">
            <h4 className="font-epilogue font-semibold text-[20px] text-white">Donator List</h4>
              <div className="mt-[20px] flex flex-col gap-4">
                {donators.length > 0 ? donators.map((item, index) => (
                  <div key={`${item.donator}-${index}`} className="mobile:flex-row flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="mobile:whitespace-nowrap mobile:w-[100%] mobile:text-ellipsis mobile: overflow-hidden font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-ll">{index + 1}. {item.donator}</p>
                    <p className="font-epilogue font-normal text-[16px] text-[#1DC071] leading-[26px] break-ll">{item.donation}
                    <span className="ml-1 text-[silver]">{currency}</span></p>
                  </div>
                  )) : (
                    <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">No donators yet. Be the first one!</p>
                )}
              </div>
          </div>
          
        </div>
      </div>
      { /* ===================== RIGHT COLUMN =====================*/ }
      <div className="laptop-l:left-0	laptop-l:sticky mobile:w-[100%] sm:w-[100%] flex flex-col xl:w-1/4 gap-5 mobile:p-2 mobile:mb-[2rem] select-none sm:p-4 rounded-2xl">

        <div className="mobile:mb-[0rem] mobile:mt-[0rem] mt-0 flex-col gap-2 items-center flex max-w-[100%]">
          <div className="mobile:mt-4 mr-2 w-[64px] h-[64px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
            <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain"/>
          </div>
          <p className="laptop:text-[20px] mobile:mb-4 mobile:text-[12px] font-epilogue font-bold text-[26px] text-center text-white">{state.name}</p>
          <p className="max-w-[20ch] laptop:text-[20px] mobile:mb-4 mobile:text-[20px] font-epilogue font-bold text-[26px] text-center text-white">{state.title}</p>
        </div>
        {/* CAMPAIGN WIDGETS */}
        <div className="tablet:flex-col md:items-center flex w-full mobile:flex-wrap mobile:gap-3 gap-[1rem] sm:flex-wrap md:flex-wrap justify-between">
          <Atropos activeOffset={12} rotateYMax={8} rotateXMax={8} shadow={false} highlight={false} className="rounded-xl hover:transition-all hover:shadow-[0_0px_35px_0px_rgba(0,0,0,0.3)] transition-all atropos-banner">
            <CountBox title="Days Left" value={remainingDays} />
          </Atropos>
          <Atropos activeOffset={12} rotateYMax={8} rotateXMax={8} shadow={false} highlight={false} className="rounded-xl hover:transition-all hover:shadow-[0_0px_35px_0px_rgba(0,0,0,0.3)] transition-all atropos-banner">
            <CountBox title={`Raised of ${state.target}`} value={state.amountCollected} />
          </Atropos>
          <Atropos activeOffset={12} rotateYMax={8} rotateXMax={8} shadow={false} highlight={false} className="rounded-xl hover:transition-all hover:shadow-[0_0px_35px_0px_rgba(0,0,0,0.3)] transition-all atropos-banner">
            <CountBox title="Total Backers" value={donators.length} />
          </Atropos>
        </div>
        {/* FUDNING WIDGET */}
        <div className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]">
            <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#808191]">
              Fund the campaign
            </p>
            <div className="md:mt-1 mt-[30px]">
              <input 
                type="number"
                placeholder="ETH 0.1"
                step="0.01"
                className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[22px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              {/* <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px]">
                <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">Back it because you believe in it.</h4>
                <p className="laptop-xl:flex tablet:flex tablet-m:hidden sm:hidden mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">Support the project for no reward, just because it speaks to you.</p>
              </div> */}

              <CustomButton 
                btnType="button"
                title="Fund Campaign"
                styles="w-full bg-[#8c6dfd]"
                handleClick={handleDonate}
              />
            </div>
          </div>
          
      </div>
      { /* ========================================================*/ }
    </div>
    { /* END FULL CONTAINER*/ }



      {/* <div className="mobile:gap-[2rem] w-full flex md:flex-row flex-col mt-10 gap-[3rem]">
        <div className="flex-1 flex-col">
          <img src={state.image} alt="campaign" className="w-full sm:h-[410px] h-[180px] object-cover rounded-t-lg"/>
          <div className="rounded-b-lg relative w-full h-[10px] bg-[#3a3a43] mt-2">
            <div className="bg-cover rounded-bl-lg absolute h-full bg-[url(https://64.media.tumblr.com/1413b1c3862acbc67c42fe3df3609285/b6173f438e236e65-39/s400x600/3e5e6d34dfdd3e0ad9187c91f58f6c3e11d0efa2.gif)]" style={{ width: `${calculateBarPercentage(state.target, state.amountCollected)}%`, maxWidth: '100%'}}>
            </div>
          </div>
          <p className="float-right mt-1 mobile:mb-4 mobile:text-[12px] font-epilogue font-normal text-[14px] text-[#808191]">
              {calculateBarPercentage(state.target, state.amountCollected)}% funded
          </p>
        </div>

        <div className="md:items-center flex md:w-[33%] w-full mobile:flex-wrap mobile:gap-3 sm:gap-1 sm:flex-wrap md:flex-wrap justify-between">
          <CountBox title="Days Left" value={remainingDays} />
          <CountBox title={`Raised of ${state.target}`} value={state.amountCollected} />
          <CountBox title="Total Backers" value={donators.length} />
        </div>
      </div> */}

      {/* <div className="mb-[1.5rem] mobile:flex-col mt-[1.5rem] gap-2 items-center flex lg:flex-row sm:flex-col max-w-[100%]">
        <div className="mobile:mt-4 mr-2 w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
          <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain"/>
        </div>
        <p className="mobile:mb-4 mobile:text-[20px] font-epilogue font-bold text-[26px] text-white">{state.title}</p>
        <p className="flex mobile:hidden lg:ml-auto font-epilogue font-normal text-[16px] text-[#808191]">
          <SiEthereum />
          {state.owner}
        </p>
      </div> */}

      {/* <div className="items-center mt-[1rem] mobile:mt-[1rem] flex lg:flex-row flex-col gap-[3rem]">
        <div className="flex-[2] flex flex-col mobile:max-w-[92%] gap-[40px]">
          <div>
            <h4 className="font-epilogue font-semibold text-[20px] text-white">Campaign Details</h4>

              <div className="mt-[20px]">
                <p className="whitespace-pre-line font-epilogue font-normal text-[16px] md:mr-2 text-[#808191] leading-[26px] text-justify">{state.description}</p>
              </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[20px] text-white">Donator List</h4>

              <div className="mt-[20px] flex flex-col gap-4">
                {donators.length > 0 ? donators.map((item, index) => (
                  <div key={`${item.donator}-${index}`} className="mobile:flex-row flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="mobile:whitespace-nowrap mobile:w-[100%] mobile:text-ellipsis mobile: overflow-hidden font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-ll">{index + 1}. {item.donator}</p>
                    <p className="font-epilogue font-normal text-[16px] text-[#1DC071] leading-[26px] break-ll">{item.donation}
                    <span className="ml-1 text-[silver]">{currency}</span></p>
                  </div>
                )) : (
                  <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">No donators yet. Be the first one!</p>
                )}
              </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]">
            <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#808191]">
              Fund the campaign
            </p>
            <div className="mt-[30px]">
              <input 
                type="number"
                placeholder="ETH 0.1"
                step="0.01"
                className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[22px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px]">
                <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">Back it because you believe in it.</h4>
                <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">Support the project for no reward, just because it speaks to you.</p>
              </div>

              <CustomButton 
                btnType="button"
                title="Fund Campaign"
                styles="w-full bg-[#8c6dfd]"
                handleClick={handleDonate}
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default CampaignDetails