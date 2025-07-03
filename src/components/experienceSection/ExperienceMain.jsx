import React from 'react'
import ExperienceTop from './ExperienceTop'
import ExperienceText from './ExperienceText'
import AllExperiences from './AllExperiences'

const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4">
        <ExperienceText />
        <ExperienceTop />
        <div className="w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>
        <AllExperiences />
    </div>
  )
}

export default ExperienceMain