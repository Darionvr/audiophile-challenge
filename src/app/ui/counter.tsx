'use client'

import React, { useState } from 'react'
import style from '@/app/ui/counter.module.css'


const Counter = () => {

    const [count, setCount] = useState(1)
    const handleCount = (value: number) => {
        if(count + value  < 1) return
        setCount(count + value)
    }


    return (
        <div className={style.container}>
            <div>
                <button onClick={() => handleCount(-1)}>-</button>
                <span>{count}</span>
                <button onClick={() => handleCount(1)}>+</button>
            </div>
            <button className={style.addtocart}>
                Add to cart
            </button>
        </div>
    )
}

export default Counter