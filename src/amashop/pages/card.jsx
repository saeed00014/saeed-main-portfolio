import React, { useState } from 'react'
import { productCardDiscount } from '../data'

import { useTextWidth } from '@tag0/use-text-width';

import SectionWraper from '../components/hoc'

import { AiTwotoneStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import RateHandler from '../components/rateHandler'
import { useDispatch, useSelector } from 'react-redux'
import { addcard, clearall, deletecard, selectquantitycard } from '../../store/dataSlice'

const CardPage = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

  const CardMaker = ({product}) => {
    const [quantity, setQuantity] = useState(product.quantity)

    const handleSelect = (e) => {
      const value = e.target.value
      dispatch(selectquantitycard({...product, quantity: Number(value)}))
      setQuantity(value)
    }

    return (
      <div className='flex flex-col bg-g_Text_White w-full h-fit'>
        <div className='flex sm:flex-row flex-col'>
          <div className='flex items-center justify-center sm:w-[12rem] w-full'>
            <img src={product.img} alt="" className='object-contain sm:w-[12rem] w-[8rem] h-full' />
          </div>
          <div className='flex flex-col justify-between text-right p-4'>
            <div className='flex flex-col items-start gap-1'>
              <p>{product.title}</p>
              <div className='flex gap-4'>
                <span className='flex flex-row gap-1'>
                  {product.price}
                  <small>تومان</small>  
                </span>
                {product.discountPrecent !== 0 && <span className='flex py-[1px] px-[5px] text-[.9rem] bg-red-600 rounded-full text-white'>
                  {product.discountPrecent}%-
                </span>}
              </div>
              <div className='flex flex-col text-[.8rem]'>
              <div className='flex gap-2 justify-start'>
                <input id={`gift${product.id}`} type="checkbox" />
                <label htmlFor={`gift${product.id}`} className='pb-1'>این یک هدیه است</label>
              </div>
                <div className='flex flex-row gap-1'>
                  {product.avalability ? <span className='flex w-fit text-[.7rem] text-green-600'>
                    موجود
                  </span> : <span className='flex w-fit font-[500] text-red-600'>
                    نا موجود
                  </span>}
                  {product.remaining ? <div className='flex gap-1 pt-[.1rem] text-red-600 -mt-[.2rem]'>
                    {product.remaining}_ 
                    عدد در انبار باقی مانده  
                  </div> : '' }
                </div>
                <span>رنگ</span>
                <span>حالت</span>
                <span>نوع</span>
              </div>
            </div>
            <div className='flex flex-row flex-wrap items-center pt-2'>
              <div className='relative flex items-center justify-center '>
                <select style={{direction: 'initial'}} id={product.id} name='تعداد' value={quantity} onChange={(e) => handleSelect(e)} className='flex w-[73px] h-[30px] px-1 pb-1 rounded-[15px] bg-transparent shadow-3xl z-10'>
                  {product.avalability 
                  ?<>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                  </>                     
                  : <option value='0'>0</option>}

                </select>
                <label style={{direction: 'initial'}} onClick={() => document.getElementById(product.id).click()} htmlFor={product.id} className='absolute left-0 top-0 flex items-center justify-center font-[500] text-[.8rem] w-[73px] h-[30px] px-1 pb-1 rounded-[15px] bg-g_Background_White_Shop shadow-3xl'>: تعداد</label> 
              </div>
              <button onClick={() => dispatch(deletecard(product))} className='border-l-[1px] px-4 h-6 min-w-max font-[400] text-[.8rem]'>
                حذف
              </button>
              <button className='border-l-[1px] px-4 h-6 min-w-max font-[400] text-[.8rem]'>
                ذخیره برای بعد
              </button>
              <button className='border-l-[1px] px-4 h-6 min-w-max font-[400] text-[.8rem]'>
                مقایسه با محصولات مشابه
              </button>
              <button className='border-l-[1px] px-4 h-6 min-w-max font-[400] text-[.8rem]'>
                به اشتراک گذاشتن
              </button>
            </div>
        </div>
        </div>
        {product.avalability ? <div className='flex justify-start w-full pb-4 pt-1 pr-4 border-t-2'>
          هزینه کل : {(product.price - product.price * product.discountPrecent / 100) * product.quantity} تومان
          </div>
          : <div className='flex justify-start w-full pb-4 pt-1 pr-4 border-t-2'>موجود شد اطلاع بده</div> }  
      </div>
    )
  }

  const SuggestMaker = ({product}) => {
    const width = useTextWidth({ text: product.title})
    return (
      <div className='flex bg-g_Text_White h-[130px] w-[250px] py-1 overflow-hidden'>
        <div className='flex w-[7rem]'>
          <img src={product.img} alt="" className='w-full h-full'/>
        </div>
        <div className='flex flex-col justify-center items-start w-[133px]'>
          <div style={{width: `${width}px`}} className='flex justify-start overflow-hidden'>
            <div className='flex justify-start w-[111px] text-right overflow-hidden'>   
              <p className='flex min-w-max text-right overflow-hidden'>
                {product.title}
              </p>
            </div>
            <p>...</p>
          </div>
          <span className='flex w-full justify-start'>
            <small>تومان</small> 
            {product.price}
          </span>
          <div style={{direction: 'initial'}} className='flex relative w-full h-[16px]'>
            <RateHandler product={product}/>
          </div>
          <button onClick={() => dispatch(addcard(product))} className='bg-red-400 py-1 px-3 text-[.7rem] mt-2 rounded-[10px] text-g_Text_White'>
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    )
  }

  return (
    <section className='flex items-center justify-center w-screen'>
      <div className='flex md:flex-row flex-col justify-center gap-4 w-full max-w-[1450px]'>
        <div className='flex flex-col w-full'>
          <div className='flex justify-start w-full bg-g_Text_White border-b-[1px] border-g_Border_Shaded_Shop text-2xl p-4'>
            سبد خرید
          </div>
          <div>
            {data.cardproducts && 
            data.cardproducts.map((product, e) => {
              return (
                <CardMaker product={product}/>
              )
            })}
          </div>
          <div className='flex w-full justify-start'>
            {data.cardproducts.length > 0 && <button onClick={() => dispatch(clearall())} className='flex items-center justify-center bg-red-400 text-g_Text_White py-3 px-12 w-fit mt-4'>
              حذف همه
            </button>}
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col items-center justify-center md:w-[250px] h-[125px] p-2 bg-g_Text_White gap-4'>
            <div className='flex gap-1'>
              <span className='flex flex-row'>
                <p>هزینه کل</p>  
                &#40;
                {data.totalitems}
                <p>مورد</p>
                &#41;:
                {data.totalprice}
                <p className='text-[.6rem]'>تومان</p>  
              </span>
            </div>
            <button className='w-full pt-1 pb-2 rounded-full bg-red-400 text-g_Text_White font-[500]'>
              پرداخت صورت حساب
            </button>
          </div>
          <div className='flex md:flex-col flex-wrap items-center justify-around md:[&>*:nth-child(1)]:rounded-t-[1rem] gap-y-2'>
            {productCardDiscount.map((product, e) => {
              return (
                <SuggestMaker product={product}/>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionWraper(CardPage, 'card')