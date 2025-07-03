import React from 'react'
import SingleSkill from './SingleSkill'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { RiJavaLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IoIosGitBranch } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

const skills = [
    {
        skill: 'HTML',
        icon: FaHtml5,
    },
     {
        skill: 'CSS',
        icon: IoLogoCss3,
    },
     {
        skill: 'JavaScript',
        icon: IoLogoJavascript,
    },
     {
        skill: 'Java',
        icon: RiJavaLine,
    },
     {
        skill: 'ReactJS',
        icon: FaReact,
    },
     {
        skill: 'Spring Boot',
        icon: SiSpringboot,
    },
     {
        skill: 'Node.js',
        icon: FaNodeJs,
    },
        
        {
            skill: 'MongoDB',
            icon:SiMongodb,
        },
        {
            skill: 'MySQL',
            icon: GrMysql,
        },
        {
            skill: 'Git',
            icon: IoIosGitBranch,
        },
        {
            skill: 'GitHub',
            icon: FaGithub,
        },
       
        {
            skill: 'AWS',
            icon: FaAws,
        }
]

const AllSkills = () => {
  return (
<div>
   <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
            return (
            <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>}/>
            )
        }
      )
 }
    
    </div>
</div>
  )
}

export default AllSkills