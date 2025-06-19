import React from 'react'

const HeroText = () => {
  return (
    <div className='flex flex-col justify-center h-full md:text-left sm:text-center'>
      <h2 className='lg:text-2xl sm:text-xl uppercase text-cyan'>Software Engineer</h2>
      <h1 className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange'>Navon Sanjuni</h1>
      <p className="text-lg mt-4 text-white">Passionate and detail-oriented software engineer skilled in designing,<br/> developing, and maintaining web and mobile applications. Experienced <br/> in full-stack development, problem-solving, and delivering user-focused solutions<br/> using modern tools and technologies.</p>

    </div>
  )
}

export default HeroText