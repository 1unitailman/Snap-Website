import React from 'react'

export const MenuItem = ({text = '', icon}) => {
  return (
    <div className='flex w-full space-x-4 '>
      {icon}
      <span className='text-slate-600 hover:text-slate-900 transition-all cursor-pointer'>
        { text }
      </span>
    </div>
  )
}
