import React from 'react'

const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <button
      type={btnType}
      className={`mt-3 mobile:w-[100%] font-epilogue font-semibold text-[14px] leading-[26px] text-white md:min-h-[40px] py-2 px-3 rounded-[10px] ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton