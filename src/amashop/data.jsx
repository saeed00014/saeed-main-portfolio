import {TbDiscount} from 'react-icons/tb'
import {AiFillShop} from 'react-icons/ai'
import {AiOutlineFire} from 'react-icons/ai'
import {AiFillAmazonCircle} from 'react-icons/ai'
import {BiShoppingBag} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'

export const navLink = [
  {
    name: 'دسته‌بندی کالاها',
    path: '',
    icon: <GiHamburgerMenu />
  },
  {
    name: 'شگفت‌انگیزها',
    path: '',
    icon: <TbDiscount />
  },
  {
    name: 'سوپرمارکت',
    path: '',
    icon: <BiShoppingBag />
  },
  {
    name: 'پرفروش‌ترین‌ها',
    path: '',
    icon: <AiOutlineFire />
  },
  {
    name: 'دریافت نمایندگی',
    path: '',
    icon: <AiFillShop />
  },
  {
    name: 'درباره ما',
    path: '',
    icon: <AiFillAmazonCircle />
  }
]

import {TbCategory} from 'react-icons/tb'
import {AiFillHome} from 'react-icons/ai'
import {GoPerson} from 'react-icons/go'

export const navLinkPhone = [
  {
    name: 'خانه',
    path: '',
    icon: <AiFillHome />
  },
  {
    name: 'دسته‌بندی',
    path: '',
    icon: <TbCategory />
  },
  {
    name: 'سبد خرید',
    path: '',
    icon: <TbCategory />
  },
  {
    name: 'آمای من',
    path: '',
    icon: <GoPerson />
  }
]

import header1 from './images/header1.webp'
import header2 from './images/header2.webp'
import header3 from './images/header3.webp'
import header4 from './images/header4.webp'
import header5 from './images/header5.webp'
import header6 from './images/header6.webp'

export const headerImg = [
  {
    index: 1,
    img: header1 
  },
  {
    index: 2,
    img: header2 
  },
  {
    index: 3,
    img: header3 
  },
  {
    index: 4,
    img: header4 
  },
  {
    index: 5,
    img: header5 
  },
  {
    index: 6,
    img: header6 
  }
]

import product1 from './images/product1.webp'
import product2 from './images/product2.webp'
import product3 from './images/product3.webp'
import product4 from './images/product4.webp'
import product5 from './images/product5.webp'
import product6 from './images/product6.webp'
import product7 from './images/product7.webp'
import product8 from './images/product8.webp'
import product9 from './images/product9.webp'
import product10 from './images/product10.webp'

export const productCardDiscount = [
  {
    img: product1,
    price: 950000,
    discountPrecent: 10,
    discountPrice: '',
  },
  {
    img: product2,
    price: 24000000 ,
    discountPrecent: 1,
    discountPrice: '',
  },
  {
    img: product3,
    price: 100000,
    discountPrecent: 20,
    discountPrice: '',
  },
  {
    img: product4,
    price: 8800000,
    discountPrecent: 5,
    discountPrice: '',
  },
  {
    img: product8,
    price: 2200000,
    discountPrecent: 30,
    discountPrice: '',
  },
  {
    img: product1,
    price: 2200000,
    discountPrecent: 30,
    discountPrice: '',
  },
  {
    img: product5,
    price: 2200000,
    discountPrecent: 30,
    discountPrice: '',
  },
  {
    img: product6,
    price: 2200000,
    discountPrecent: 30,
    discountPrice: '',
  },
  {
    img: product7,
    price: 2200000,
    discountPrecent: 30,
    discountPrice: '',
  },
  {
    img: product8,
    price: 2200000,
    discountPrecent: 30,
    discountPrice: '',
  },
  {
    img: product9,
    price: 2200000,
    discountPrecent: 30,
    discountPrice: '',
  },
  {
    img: product10,
    price: 2200000,
    discountPrecent: 30,
    discountPrice: '',
  }
]

import category9 from './images/category9.jpg'
import category1 from './images/category1.jpg'
import category2 from './images/category2.jpg'
import category3 from './images/category3.jpg'
import category4 from './images/category4.jpg'
import category5 from './images/category5.jpg'
import category6 from './images/category6.jpg'
import category7 from './images/category7.jpg'
import category8 from './images/category8.jpg'

export const categoryCard = [
  {
    title: 'گوشی موبایل',
    img: category9,
    moreButton: ''
  },
  {
    title: 'مد و پوشاک',
    img: category1,
    moreButton: ''
  },
  {
    title: 'اسباب بازی، کودک و نوزاد',
    img: category6,
    moreButton: ''
  },
  {
    title: 'ابزار آلات و تجهیزات',
    img: category8,
    moreButton: ''
  },
  {
    title: 'کالای دیجیتال',
    img: category3,
    moreButton: ''
  },
  {
    title: 'زیبایی و سلامت',
    img: category5,
    moreButton: ''
  },
  {
    title: 'ورزش',
    img: category4,
    moreButton: ''
  },
  {
    title: 'خانه و آشپزخانه',
    img: category7,
    moreButton: ''
  },
  {
    title: 'کتاب، لوازم تحریر و هنر',
    img: category2,
    moreButton: ''
  }
]

export const footer = [
  {
    title: 'دسترسی سریع',
    link : [
     ' تماس با ما',
     ' نصب اپلیکیشن',
     ' پرسش و پاسخ متداول',
     ' فروش سازمانی',
     ' فروش آما کارت',
     ' فروش انبوه (کالا)',
     ' مجله آما',
    ]
  },
  {
    title: 'درباره آما ',
    link : [
     ' درباره ما',
     ' فروشگاه ها',
     ' اخبار',
     ' اعضاء هیئت مدیره',
     ' کمیته‌های تخصصی',
     ' امور سهام'
    ]
  },
  {
    title: 'همکاری با ما',
    link : [
     ' کارمند فروشگاه',
     ' مشاغل حوزه انبار',
     ' فرصت های شغلی',
     ' دریافت نمایندگی (فرانچایز)',
    ]
  },
  {
    title: 'همراه ما باشید!',
    link : [
      'https://www.instagram.com/digikalacom/',
      'https://twitter.com/digikalacom',
      'https://www.linkedin.com/company/digikala/mycompany/',
      'https://www.aparat.com/digikala/'
    ]
  }
]