import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TransparentButton } from './buttons'
import styles from '@/app/ui/navsection.module.css'

const NavSection = () => {

    const homeLinks = [{
        title: "Headphones",
        image: "/images/shared/desktop/image-headphones.png",
        width: 438,
        height: 422,
        href: "/headphones"
    }, {
        title: "Speakers",
        image: "/images/shared/desktop/image-speakers.png",
        width: 438,
        height: 408,
        href: "/speakers"
    }, {
        title: "Earphones",
        image: "/images/shared/desktop/image-earphones.png",
        width: 438,
        height: 380,
        href: "/earphones"
    }]
    return (
        
        <section className={styles.navsection}>
            {homeLinks.map((l, i) => (
                <div key={i}>
                    <Image
                        src={l.image}
                        width={l.width}
                        height={l.height}
                        alt={l.title} />
                    <p>{l.title}</p>
                    <TransparentButton children={l.href}/>
                </div>
            ))}
        </section>
    )
}

export default NavSection