import React, { useState } from 'react'

import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import {MdOutlineLocationOn} from 'react-icons/md'
import {RiShoppingCartLine} from 'react-icons/ri'

import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLink, navLinkPhone } from '../data';

const Header = () => {
  const [active, setActive] = useState(window.location.href)
  console.log(active)

  const ATagMaker = ({name, path, icon}) => {
    return (
      <Link onClick={() => setActive(path)} to={path} className='flex lg:px-4 px-2 font-bold min-w-max gap-1 text-[14px]'>
        {name}
        <span>
          {icon}
        </span>
      </Link>
    )
  }

  const LiMaker = ({ename, name, path, icon, activeIcon, i}) => {
    return (
      <li onClick={() => setActive(path)} className={`flex justify-center items-center ${i== '1' ? 'h-full' : 'h-8'}  xl:px-3 px-2`}>
        <Link to={path} className={`flex ${i == '1' ? 'flex-col-reverse gap-2' : 'gap-1 '} font-[400] text-[14px] min-w-max`}> 
          {name}
          <span className={`flex items-center justify-center pt-[3px] ${i == '1' ? 'scale-[1.7]' :'scale-125'} `}>
            {active.substring(active.length - 4) == 'shop' && ename == 'shop' ? activeIcon
            : active.includes(ename) && ename !== 'shop' ? activeIcon : icon}
          </span>
        </Link>
      </li>
    )
  }

  return (
    <header className={`fixed top-0 ${styles.paddingX} py-1 pb-0 flex flex-col justify-center items-center w-screen  border-b-[3px] !bg-g_Text_White z-50`}>
      <div className='flex flex-col w-full max-w-[1600px]'>
        <div className='flex justify-between h-16'>
          <div className='sm:flex hidden items-center justify-start w-1/4 gap-4'>
            <Link onClick={() => setActive('/shop/card')} to='/shop/card' className='md:flex hidden justify-center w-16 border-r-[1px] cursor-pointer'>
              <RiShoppingCartLine className='lg:text-3xl text-2xl'/>
            </Link>
            <div className='flex border-[1px] rounded-[5px] py-2 [&>*:nth-child(1)]:border-r-[2px] [&>*:nth-child(1)]:border-r-g_Text_Black'>
              <ATagMaker name='تبت نام' path='/shop' />
              <ATagMaker name='ورود' path='/shop' icon={<LoginIcon />} />
            </div>
          </div>
          <div className='flex items-center justify-end sm:w-3/4 w-full lg:gap-8 gap-4'>
            <div className='relative sm:flex hidden items-center justify-end w-full'>
              <input type="text" id='search' placeholder='جستجو' className='text-end md:w-5/6 w-full max-w-[600px] h-12 bg-g_Background_Shaded_Shop rounded-[10px] pr-12 text-[18px] cursor-pointer' />
              <label htmlFor='search' className='absolute pr-3 cursor-pointer'>
                <SearchIcon />
              </label>
            </div>
            <Link onClick={() => setActive('/shop')} to='/shop' className='sm:flex hidden font-primary text-2xl font-[700]'>
              AMASHOP
            </Link>
            <div className='sm:hidden flex items-center justify-end md:w-5/6 w-full max-w-[600px] h-12 pr-10 bg-g_Background_Shaded_Shop rounded-[10px] text-[18px] cursor-pointer'>
              <span className='absolute right-6 cursor-pointer'>
                <SearchIcon />
              </span>
              <p>
                جستجو در
              </p>
              <h1 to='/shop' className='absolute right-32 sm:hidden flex font-primary text-2xl font-[700]'>
                AMASHOP
              </h1>
            </div>
          </div>
        </div>
        <nav className='md:flex hidden lg:justify-between justify-end items-center w-full h-full'>
          <div className='lg:flex hidden items-center justify-center h-8 gap-2 cursor-pointer'>
            <p className='min-w-max font-[800] xl:text-[1rem] text-[0.7rem]'>
              لطفا شهر خود را انتخاب کنید   
            </p>
            <span>
              <MdOutlineLocationOn className='text-[20px]' />
            </span>
          </div>
          <ul className='flex flex-row-reverse justify-between items-center h-14 max-w-[1100px] [&>*:nth-child(1)]:pr-0'>
            <li className={`flex justify-center items-center gap-2 h-8 px-3`}>
              <Link onClick={() => setActive(navLink[0].path)} to={navLink[0].path} className='font-[700] text-[18px]  min-w-max'> 
                {navLink[0].name}
              </Link>
              <span className='flex items-center justify-center scale-125'>
                {navLink[0].icon}
              </span>
            </li>
            <div className='flex flex-row-reverse 2xl:border-l-[1px] border-l-none border-r-[1px]'>
              {navLink.map((link) => {
                return (
                  <>
                    {link.name == 'دسته‌بندی کالاها' ? '' : <LiMaker name={link.name} icon={link.icon} path={link.path} />}
                  </>
                )
              })}
            </div>
            <div className='2xl:flex hidden'>
              <LiMaker name='سوالی دارید؟'/>
              <LiMaker name='در آماشاپ بفروشید!'/>
            </div>
          </ul>
        </nav>
        <nav className={`${styles.paddingX} fixed bottom-0 left-0 md:hidden flex flex-row-reverse items-center w-screen h-16 justify-between border-t-[3px] bg-white z-50`}>
          {navLinkPhone.map((link) => {
            return (
              <LiMaker ename={link.ename} name={link.name} icon={link.icon} activeIcon={link.activeIcon} path={link.path} i='1' />
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Header