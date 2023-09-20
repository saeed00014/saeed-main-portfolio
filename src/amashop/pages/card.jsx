import React, { useState } from 'react'
import { productCardDiscount } from '../data'

import SectionWraper from '../components/hoc'

import { AiTwotoneStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import RateHandler from '../components/rateHandler'
import { useDispatch, useSelector } from 'react-redux'
import { addcard, deletecard, selectquantitycard } from '../../store/dataSlice'

const CardPage = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)
  console.log(data.cardproducts)

  const CardMaker = ({product}) => {
    const [quantity, setQuantity] = useState(product.quantity)

    const handleSelect = (e) => {
      const value = e.target.value
      dispatch(selectquantitycard({...product, quantity: Number(value)}))
      setQuantity(value)
    }

    return (
      <div className='flex flex-col bg-g_Text_White w-full h-fit'>
        <div className='flex flex-row-reverse'>
          <div className='w-[12rem]'>
            <img src={product.img} alt="" className='object-contain w-full h-full' />
          </div>
          <div className='flex flex-col justify-between text-right p-4'>
            <div className='flex flex-col items-end gap-1'>
              <p>{product.title}</p>
              <span className='flex flex-row-reverse gap-1'>
                {product.price} 
                <p>تومان</p>  
              </span>
              <div className='flex flex-col text-[.8rem]'>
              <div className='flex gap-2 justify-end'>
                <label htmlFor={`gift${product.id}`} className='pb-1'>این یک هدیه است</label>
                <input id={`gift${product.id}`} type="checkbox" />
              </div>
                <div className='flex flex-row-reverse gap-1'>
                  {product.avalability ? <span className='flex w-fit text-[.7rem]'>
                    موجود
                  </span> : <span className='flex w-fit font-[500]'>
                    نا موجود
                  </span>}
                  {product.remaining ? <span className='flex gap-1 pt-[.1rem] text-red-600 -mt-[.2rem]'>
                    <p>
                      عدد در انبار باقی مانده  
                    </p>
                    _{product.remaining} 
                  </span> : '' }
                </div>
                <span>رنگ</span>
                <span>حالت</span>
                <span>نوع</span>
              </div>
            </div>
            <div className='flex flex-row-reverse flex-wrap items-center pt-2'>
              <div className='relative flex items-center justify-center '>
                <select id={product.id} name='تعداد' value={quantity} onChange={(e) => handleSelect(e)} className='w-[73px] h-[30px] px-1 pb-1 rounded-[15px] bg-transparent shadow-3xl z-10'>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                </select>
                <label onClick={() => document.getElementById(product.id).click()} htmlFor={product.id} className='absolute left-0 top-0 flex items-center justify-center font-[500] text-[.8rem] w-[73px] h-[30px] px-1 pb-1 rounded-[15px] bg-g_Background_White_Shop shadow-3xl'>: تعداد</label> 
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
          <div className='flex justify-end w-full pb-4 pt-1 pr-4 border-t-2'>
          هزینه کل : {product.price * product.quantity} تومان
          </div>
      </div>
    )
  }

  const SuggestMaker = ({product}) => {
    return (
      <div className='flex flex-row-reverse bg-g_Text_White h-[130px] w-[250px] py-1 overflow-hidden'>
        <div className='flex w-[7rem]'>
          <img src={product.img} alt="" className='w-full h-full'/>
        </div>
        <div className='flex flex-col justify-center items-end'>
          <p>{product.title}</p>
          <span className='flex w-full justify-end'>تومان {product.price}</span>
          <div className='relative w-full'>
            <RateHandler product={product}/>
          </div>
          <button onClick={() => dispatch(addcard(product))} className='bg-red-400 py-1 px-3 text-[.7rem] mt-5 rounded-[10px] text-g_Text_White'>
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    )
  }

  return (
    <section className='flex items-center justify-center w-screen'>
      <div className='flex flex-row-reverse justify-center gap-4 w-full max-w-[1450px]'>
        <div className='flex flex-col w-full'>
          <div className='flex justify-end w-full bg-g_Text_White border-b-[1px] border-g_Border_Shaded_Shop text-2xl p-4'>
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
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col items-center justify-center w-[250px] h-[125px] p-4 bg-g_Text_White gap-4'>
            <div className='flex gap-1'>
              <span className='flex flex-row-reverse'>
                {data.totalprice} 
                <p>تومان</p>  
              </span>
              <p className='flex flex-row-reverse'>
                {data.totalitems}&#41;
                <p>مورد</p>: &#40;
              </p><p>هزینه کل</p>  
            </div>
            <button className='w-full pt-1 pb-2 rounded-full bg-red-400 text-g_Text_White font-[500]'>
              پرداخت صورت حساب
            </button>
          </div>
          <div className='flex flex-col [&>*:nth-child(1)]:rounded-t-[1rem]'>
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