import React from 'react'

const CountBox = ({ title, value }) => {
  return (
    <div className="flex mobile:gap-1 sm:flex-col items-center mobile:w-[100%] sm:w-[100%] md:w-[100%] w-[50%] last:w-[100%]">
      <h4 className="mobile3:flex-[100%] mobile:flex-[25%] text-[#1DC071] font-epilogue font-bold text-[26px] sm:text-[30px] text-white sm:p-3 bg-[#1c1c24] rounded-t-2xl mobile:rounded-lg w-full text-center truncate">{value}</h4>
      <p className="mobile3:flex-[100%] mobile:flex-[50%] font-epilogue font-normal sm:text-[16px] text-[#808191] bg-[#28282e] px-3 py-2 w-full rounded-b-2xl mobile:rounded-lg text-center">{title}</p>
    </div>
  )
}

export default CountBox