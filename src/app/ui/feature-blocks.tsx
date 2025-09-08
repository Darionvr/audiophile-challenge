import Image from "next/image"
import { BlackButton, WhiteButton } from "./buttons"
import styles from '@/app/home.module.css'



export const ZX9Speaker = () => (

    <section className={styles.zx9speaker}>

        <Image
            src={"/images/home/desktop/image-speaker-zx9.png"}
            height={918}
            width={756}
            alt='zx9 speaker' />

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
        <Image src={"/images/home/desktop/image-earphones-yx1.jpg"}
            width={540}
            height={320}
            alt="earphones yx1" />
            <div>
                <p>YX1 Earphones</p>
                <WhiteButton children="/earphones/yx1-earphones"/>
            </div>
    </section>
)