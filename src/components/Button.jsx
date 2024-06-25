import React from 'react'

const borderStyles = 'border-2 border-slate-500 rounded-xl hover:border-black hover:text-black transition-ease-in';
const filledStyles = 'text-slate-200 bg-black rounded-xl font-bold py-4 px-6 mx-0 hover:bg-transparent hover:text-black transition-all border-2 border-almost-black ';

export const Button = ({ 
  children = '', 
  hasBorder = false, 
  isFilled = false
}) => {
  return (
    <button className={`text-base text-slate-700 hover:text-black px-5 py-2 ${hasBorder && borderStyles} 
    ${isFilled && filledStyles}`}>{ children }</button>
  )
}
