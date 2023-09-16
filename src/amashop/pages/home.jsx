import React from 'react'

import SectionWraper from '../components/hoc'
import ImgSlider from '../components/imgSlider'
import HomeDiscount from '../components/homeDiscount'
import Category from '../components/category'


const HomePage = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full'>
      <ImgSlider />
      <div className='overflow-x-scroll'>
        <HomeDiscount />
      </div>
      <Category />
    </section>
  )
}

export default SectionWraper(HomePage, 'home')