'use client'

import React, { useState } from 'react'
import style from '@/app/ui/styles/counter.module.css'
import { useCart } from '../context/cartContext'
import { CartItem } from '../context/cartContext'


const Counter = ({item} : {item : CartItem}) => {

    const [count, setCount] = useState(1)
    const handleCount = (value: number) => {
        if (count + value < 1) return
        setCount(count + value)
    }
    const { addToCart } = useCart();


    return (
        <div className={style.container}>
            <div>
                <button onClick={() => handleCount(-1)}>-</button>
                <span>{count}</span>
                <button onClick={() => handleCount(1)}>+</button>
            </div>
            <button className={style.addtocart} onClick={() => addToCart({ ...item, quantity: count })}>
                Add to cart
            </button>
        </div>
    )
}

export default Counter