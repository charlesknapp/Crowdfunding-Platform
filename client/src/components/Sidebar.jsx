import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logo, sun, createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';
import { navlinks } from '../constants';
import { Tooltip, Button } from "@material-tailwind/react";
import './sidebar.css'

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-3/4 h-3/4" />
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`hover:grayscale-0 hover:cursor-pointer w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    )}
  </div>
)

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link className="transition-all mt-2" to="/">
        <Icon styles="bg-[#2c2f32]" imgUrl={logo} />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
        
        {/* <Tooltip
            className="mobile:hidden shadow-lg ml-1 rounded-lg items-center text-[20px] bg-[#2c2f32]"
            content="Home"
            placement="right"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
          <div className="w-[48px] h-[48px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
              <Button variant="primary">
                <img className="hover:grayscale-0 grayscale" src={dashboard} alt="Home" />
              </Button>
          </div>
          </Tooltip>
        <Tooltip
            className="mobile:hidden shadow-lg ml-1 rounded-lg items-center text-[20px] bg-[#2c2f32]"
            content="Create"
            placement="right"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
          <div className="w-[48px] h-[48px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
              <Button variant="primary">
                <img src={createCampaign} alt="Create Campaign" />
              </Button>
          </div>
          </Tooltip> */}

          {navlinks.map((link) => (
            <Icon className="sidebar__links-container"
            key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if(!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))
          }
        </div>

        {/* <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun} /> */}
        <div className="bg-[#1c1c24] shadow-secondary w-[48px] h-[48px] rounded-[10px] flex justify-center items-center cursor-pointer">
            <Tooltip className="shadow-md bg-[#1C1C24] ml-[1.5rem] font-bold" content="Light Mode" placement="right">
              <Button variant="gradient">
                <img src={sun} alt="Home" />
              </Button>
            </Tooltip>
        </div>

      </div>
    </div>
  )
}

export default Sidebar