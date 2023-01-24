import React from 'react'

const CountBox = ({ title, value }) => {
  return (
    <div className="flex sm:gap-1 gap-4 sm:flex-col items-center mobile:w-[100%] sm:w-[100%] md:w-[100%] w-[50%] last:w-[100%]">
      <h4 className="font-epilogue font-bold text-[26px] sm:text-[30px] text-white sm:p-3 bg-[#1c1c24] rounded-xl sm:rounded-t-[10px] w-full text-center truncate">{value}</h4>
      <p className="font-epilogue font-normal sm:text-[16px] text-[#808191] bg-[#28282e] px-3 py-2 w-full rounded-xl mobile:rounded-b-lg text-center">{title}</p>
    </div>
  )
}

export default CountBox