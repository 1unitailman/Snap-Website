import React, { useState } from 'react'

export const NavItem = ({text = '', children}) => {
  const [selected, setSelected] = useState('');

  return (
    <div className='relative'>
      <div className="flex flex-col space-x-2 cursor-pointer items-center">
        <span 
          className='text-slate-700 hover:text-black transition-all'
          onClick={() => children && setSelected(text !== selected ? text : '')}
          >
            {text}
          </span>
          {children && selected !== text && 
            <div>
              <img src="src\images\icon-arrow-down.svg" alt="" />
            </div>}

          {children && selected === text && 
            <div>
              <img src="src\images\icon-arrow-up.svg" alt="" />
            </div>}
        {selected && children}
      </div>
    </div>
  )
}
