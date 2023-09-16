import React from 'react'
import HocWraper from '../HOC/hoc'
import { projects } from '../data'
import { Link } from 'react-router-dom'
import { Tilt } from 'react-tilt'
import GitHubIcon from '@mui/icons-material/GitHub'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

const ProjectPage = () => {
  const options = {
    max: 10,
    scale: 1,
    speed: 350
  }


  return (
    <section className='flex items-start justify-center min-h-screen pt-[80px] w-screen'>
      <div className='flex flex-col w-full max-w-[1400px] sm:gap-20 gap-12 pt-10'>
        <div className='flex flex-col gap-4'>
          <h1 className='sm:text-5xl text-4xl font-[600]'>
            projects .
          </h1>
          <p className='sm:text-2xl text-[1.3rem]'>
            Take a Look at my Best Work
          </p>
        </div>
        <div className='flex flex-wrap justify-evenly w-full gap-4'>
          {projects.map((project) => {
            return (
              <Tilt options={options} key={project.id} className='flex'>
                <div className='relative flex flex-col sm:w-[350px] w-[300px] sm:p-4 p-2 bg-g_Background_Shaded rounded-[15px] gap-4'>
                  <img src={project.img} alt="project intro image" className='rounded-[10px]' />
                  <h1 className='text-2xl font-[600]'>{project.name}</h1>
                  <p>{project.dis}</p>
                  <div className='flex absolute sm:top-5 top-3 sm:right-5 right-3 sm:gap-2 gap-1'>
                    {project.Link.map((link) => {
                      console.log(link.name)
                      return (
                        <Link to={link.path} className='flex items-center justify-center w-8 h-8 bg-gray-900 rounded-full scale-115'>
                          {link.name == 'Github' ? <GitHubIcon /> : <ArrowOutwardIcon /> }
                        </Link>
                      )
                    })}
                  </div>
                  <div className='flex w-full justify-between gap-1'>
                    {project.skill.map((skill) => {
                      return (
                        <p className='flex items-center justify-center sm:px-3 px-2 sm:py-2 py-1 rounded-[5px] bg-gray-900'>
                          {skill}
                        </p>
                      )
                    })}
                  </div>
                </div>
              </Tilt>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HocWraper(ProjectPage, 'projects')