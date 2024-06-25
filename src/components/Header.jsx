import React, { useState } from 'react'
import { NavItem } from './NavItem'
import { NavMenu } from './NavMenu'
import { COMPANY, FEATURES } from './constants'
import { Button } from './Button'
import { MobileMenu } from './MobileMenu'

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='flex align-center'>
     <div className='mt-3 items-center'>
      <img src="src\images\logo.svg" alt="" />
     </div>
      <nav className='hidden xl:flex gap-6 ml-8 items-center'>
        <NavItem text='Features'>
          <NavMenu items={FEATURES}/>
        </NavItem>
        <NavItem text='Company'>
          <NavMenu items={COMPANY}/>
        </NavItem>
        <NavItem text='Careers'/>
        <NavItem text='About'/>
      </nav>
      <div className='hidden ml-auto xl:flex space-x-5'>
        <Button>Login</Button>
        <Button hasBorder="true">Register</Button>
      </div>
      <div 
        className="flex xl:hidden ml-auto cursor-pointer z-30"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? 
          <div>
            <img src="src\images\icon-close-menu.svg" alt="" />
          </div> 
          :
          <div>
            <img src="src\images\icon-menu.svg" alt="" />
          </div>}
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} />
    </header>
  )
}
