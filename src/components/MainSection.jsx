import React from 'react'
import { Button } from './Button'

export const MainSection = () => {
  return (
    <section className='w-full flex-col xl:flex-row flex mt-6 xl:h-screen justify-between'>
      <div className='relative order-2 xl:order-1 text-center xl:text-left mt-12'>
        <h1 className='text-3xl xl:text-7xl font-black mt-6 xl:whitespace-pre-line'>
          {`Make\n remote work`}
        </h1>
        <p className='text-slate-700 text-lg my-12 whitespace-pre-line'>
          {`Get your team in sync, no matter your location.\n Steamline processes, create team rituals, and\n watch productivity soar.`}
        </p>
        <Button isFilled={ true }>Learn more</Button>
        <div className='flex justify-around xl:absolute bottom-2 w-full mt-20'>
          <div>
            <img src="src\images\client-databiz.svg" alt="" />
          </div>
          <div>
            <img src="src\images\client-audiophile.svg" alt="" />
          </div>
          <div>
            <img src="src\images\client-meet.svg" alt="" />
          </div>
          <div>
            <img src="src\images\client-maker.svg" alt="" />
          </div>
        </div>
      </div>

      <div className='hidden xl:flex w-2/4 mt-20 justify-center xl:justify-end xl:order-2'>
        <img src="src\images\image-hero-desktop.png" alt="" />
      </div>
      <div className='flex xl:hidden w-full justify-center mb-5 order-1'>
        <img src="src\images\image-hero-mobile.png" alt="" />
      </div>
    </section>
  )
}

