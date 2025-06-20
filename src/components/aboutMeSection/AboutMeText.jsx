import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center '>
      <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
      <p className='text-white'>I'm Navon Sanjuni, a passionate Software Engineer, Web Developer, and Full Stack Engineer with a strong background in building dynamic, scalable, and user-friendly web applications. I specialize in both front-end and back-end development, using modern frameworks and technologies to deliver complete digital solutions. I’m always eager to learn, solve real-world problems, and collaborate on innovative projects.
      </p>
      <button className='border border-orange rounded-full py-2 px-4 text-lg items-center flex mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan '>My Projects</button>
    </div>
  )
}

export default AboutMeText