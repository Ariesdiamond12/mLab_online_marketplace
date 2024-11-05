import React from 'react'

function Title({text1, text2, text3}) {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-gray-500'>{text1}<span>{text2}</span>{text3}</p>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
    </div>
  )
}

export default Title