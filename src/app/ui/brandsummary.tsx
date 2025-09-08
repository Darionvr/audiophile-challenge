import React from 'react'
import style from '@/app/ui/brandsummary.module.css'
import Image from 'next/image'


const Brandsummary = () => {
    return (
        
        <section className={style.section}>
            <div>
                <p>Bringing you the <span>best  </span>audio gear</p>
                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
            <Image
                src={"/images/shared/desktop/image-best-gear.jpg"}
                width={540}
                height={588}
                alt="testing headphones"
            />
        </section>
    )
}

export default Brandsummary