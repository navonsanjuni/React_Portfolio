import React from 'react'
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <div className='h-full flex items-center justify-center '>
      <img 
      src="../../public/images/ProfileME.png" 
      alt="Navon Sanjuni" 
      className='max-h-[450px] w-auto' 
      />
      <div className='absolute -z-10 justify-center items-center animate-pulse '>
        <PiHexagonThin className="md:h-[90px] sm:h-[120px] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
      
    </div>
  )
}

export default HeroPic