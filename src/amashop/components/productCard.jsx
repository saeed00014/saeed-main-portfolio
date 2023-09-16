import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='flex flex-col items-stretch justify-between w-[10rem] h-full bg-g_Text_White p-4 cursor-pointer'>
      <img src={product.img} alt="" className='w-[130px] h-[130px]' />
      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <p className='flex gap-1'>
            <span className='text-[.5rem]'>
              تومان
            </span>
            <span className='-ml-1'>
              {product.price - product.price * product.discountPrecent / 100}
            </span>
          </p>
          <span className='flex py-[2px] px-2 bg-red-600 rounded-full text-white'>
            {product.discountPrecent}%
          </span>
        </div>
        <small>
          {product.price} 
        </small>
      </div>
    </div>
  )
}

export default ProductCard