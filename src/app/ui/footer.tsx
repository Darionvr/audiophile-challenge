import Link from 'next/link'
import React from 'react'
import style from '@/app/ui/styles/footer.module.css'


const Footer = () => {
    return (

        <div className={style.footercontainer}>
         

            <div className={style.footernavbar}>
                <img src="\images\shared\desktop\logo.svg" alt="Page's Logo" />
                <ul>
                    <li><Link href={"/"}> Home</Link> </li>
                    <li><Link href={"/headphones"}>  Headphones</Link></li>
                    <li><Link href={"/speakers"}> Speakers </Link></li>
                    <li><Link href={"/earphones"}> Earphones</Link></li>
                </ul>

            </div>
            <div className={style.footerinfo}>
                <p >Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.</p>
                <div>
                   <Link href={'#'}>  <img src="/images/shared/desktop/icon-facebook.svg" alt="facebook icon" /></Link>
                    <Link href={'#'}><img src="/images/shared/desktop/icon-instagram.svg" alt="instagram icon" /> </Link>
                   <Link href={'#'}>  <img src="/images/shared/desktop/icon-twitter.svg" alt="twitter icon" /></Link>

                </div>
            </div>
                <p>Copyright 2021. All Rights Reserved</p>
        </div>

    )
}

export default Footer