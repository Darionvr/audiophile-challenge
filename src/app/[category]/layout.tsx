import React from 'react'
import Footer from '../ui/footer'
import Navbar from '../ui/navbar'
import NavSection from '../ui/nav-section'
import Brandsummary from '../ui/brandsummary'
import style from '@/app/ui/category.module.css'




const LayoutCategory = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
         <main className={style.main}>
         {children}
          <NavSection/>
          <Brandsummary/>
          </main>
             </>
    )
}

export default LayoutCategory