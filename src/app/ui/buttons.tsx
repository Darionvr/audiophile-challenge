import React from 'react'
import style from '@/app/ui/buttons.module.css'
import Link from 'next/link'



export const OrangeButton = ({ children }: { children: string }) => (
    <Link href={children} className={style.orangeButton}>
        See Product
    </Link>
)

export const BlackButton= ({ children }: { children: string }) => (
    <Link href={children} className={style.blackButton}>
        See Product
    </Link>
)


export const WhiteButton = ({ children }: { children: string }) => (
       <Link href={children} className={style.whiteButton}>
        See Product
    </Link>
)

export const TransparentButton = ({ children }: { children: string }) => (
    <Link href={children} className={style.transparentButton}> 
        shop   <img src="/images/shared/desktop/icon-arrow-right.svg" alt="arrow icon" />
    </Link>
  
)




