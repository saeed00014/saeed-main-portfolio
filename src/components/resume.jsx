import React from 'react'

import persian from '../images/perres.png'
import SideLoadingCommponent from './loading'

const ResumeComponent = () => {

  return (
    <div className='flex w-full h-full'>
      <SideLoadingCommponent />
      <img src={persian} alt='persian resume' />
    </div>
  )
}

export default ResumeComponent