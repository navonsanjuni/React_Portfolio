import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'

const HeroMain = () => {
  return (
    <div className='pt-40 pb-16'>
       <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto items-center justify-between relative px-4 ">
         <HeroText />
        <HeroPic />
       </div>
    </div>
  )
}

export default HeroMain