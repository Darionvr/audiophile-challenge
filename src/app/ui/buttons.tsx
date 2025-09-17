import React from 'react'
import style from '@/app/ui/styles/buttons.module.css'
import Link from 'next/link'



export const OrangeButton = ({ link}: { link: string }) => (
    <Link href={link} className={style.orangeButton}>
        See Product
    </Link>
)

export const BlackButton= ({ link}: { link: string }) => (
    <Link href={link} className={style.blackButton}>
        See Product
    </Link>
)


export const WhiteButton = ({ link}: { link: string }) => (
       <Link href={link} className={style.whiteButton}>
        See Product
    </Link>
)

export const TransparentButton = ({ link}: { link: string }) => (
    <Link href={link} className={style.transparentButton}> 
        shop   <img src="/images/shared/desktop/icon-arrow-right.svg" alt="arrow icon" />
    </Link>
  
)




