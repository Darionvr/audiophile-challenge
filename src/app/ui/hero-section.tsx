
import React from 'react'
import style from '@/app/home.module.css'
import { OrangeButton } from './buttons';



const HeroSection = () => {


  return (

    <header className={style.hero}>
      <section>
        <div>
          <p className={style.newproduct}> New Product</p>
          <h1>XX99 Mark II Headphones</h1>
          <p className={style.description}> Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
         <OrangeButton link='/headphones/xx99-mark-two-headphones'/> 
        </div>

      </section>
    </header>
  )
}

export default HeroSection