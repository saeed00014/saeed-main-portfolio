import React from 'react'
import { addcard } from '../../store/dataSlice'
import { useDispatch } from 'react-redux'

const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col items-stretch justify-between w-[10rem] h-full bg-g_Text_White px-3 py-2 cursor-pointer'>
      <img src={product.img} alt="" className='w-[130px] h-[130px]' />
      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <p className='flex gap-1'>
            <span className='-ml-1'>
              {product.price - product.price * product.discountPrecent / 100}
            </span>
            <span className='text-[.5rem]'>
              تومان
            </span>
          </p>
          <span className='flex py-[1px] px-[5px] text-[.9rem] bg-red-600 rounded-full text-white'>
            {product.discountPrecent}%
          </span>
        </div>
        <div className='relative w-fit items-center justify-center -mt-2'>
          <span className='absolute left-0 top-[13px] w-full h-[2px] bg-gray-400 rotate-3'></span>
          <small>
            {product.price} 
          </small>
        </div>
      </div>
      <button onClick={() => dispatch(addcard(product))} className='bg-yellow-500 py-1 px-3 text-[.7rem] rounded-[10px] text-g_Text_White'>
        افزودن به سبد خرید
      </button>
    </div>
  )
}

export default ProductCard