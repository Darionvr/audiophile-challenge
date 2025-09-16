import Image from "next/image"
import { BlackButton, WhiteButton } from "./buttons"
import styles from '@/app/home.module.css'



export const ZX9Speaker = () => (

    <section className={styles.zx9speaker}>

        <picture>
            <source media="(min-width: 1024px)" srcSet="/images/home/desktop/image-speaker-zx9.png" />
            <source media="(min-width: 768px)" srcSet="/images/home/tablet/image-speaker-zx9.png" />
            <img src="/images/home/mobile/image-speaker-zx9.png" alt="zx9 speaker" />
        </picture>

        <div>
            <p>ZX9 Speaker</p>
            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <BlackButton children='/speakers/zx9-speaker' />
        </div>
    </section>
)


export const ZX7Speaker = () => (

    <section className={styles.zx7speaker}>

        <p>ZX7 Speaker</p>
        <WhiteButton
            children="/speakers/zx7-speaker" />


    </section>
)

export const YX1Earphones = () => (
    <section className={styles.yx1earphones}>
        <picture>
             <source media="(min-width: 1024px)" srcSet="/images/home/desktop/image-earphones-yx1.jpg" />
            <source media="(min-width: 768px)" srcSet="/images/home/tablet/image-earphones-yx1.jpg" />
            <img src="/images/home/mobile/image-earphones-yx1.jpg" alt="yx1 earphone" />
        </picture>
   
        <div>
            <p>YX1 Earphones</p>
            <WhiteButton children="/earphones/yx1-earphones" />
        </div>
    </section>
)