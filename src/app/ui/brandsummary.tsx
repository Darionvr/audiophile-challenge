import React from 'react'
import style from '@/app/ui/styles/brandsummary.module.css'


const Brandsummary = () => {
    return (
        
        <section className={style.section}>
            <div>
                <p>Bringing you the <span>best  </span>audio gear</p>
                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
            <picture>
                <source media="(min-width: 1024px)" srcSet="/images/shared/desktop/image-best-gear.jpg"/>
                <source media="(min-width: 768px)" srcSet="/images/shared/tablet/image-best-gear.jpg"/>
                <img src="/images/shared/mobile/image-best-gear.jpg" alt="testing headphones" />
            </picture>
         
        </section>
    )
}

export default Brandsummary