import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Cta_1, Cta_2, Teams } from './'

const Hero = () => {
  return (
    <div className="xs:max-h-[75vh] xl:max-h-[86vh] max-h-[84vh] overflow-auto  rounded-xl dark:bg-[rgba(0,0,0,0.0)]">
        <Cta_1 />
        <Cta_2 />
        <Teams />
    </div>
  )
}

export default Hero