import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMeImage from './AboutMeImage'

const AboutMeMain = () => {
  return (
    <div className='flex md:flex-row sm:flex-col max-w-[1200px] mx-auto items-center justify-between relative px-4 gap-12 mt-[100px]'>
        <div>
          <AboutMeText/>
        </div>
        <div>
          <AboutMeImage/>
        </div>
    </div>
  )
}

export default AboutMeMain