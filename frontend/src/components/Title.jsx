import React from 'react'

function Title({text1, text2, text3}) {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-black'>{text1}<span>{text2}</span>{text3}</p>
    </div>
  )
}

export default Title