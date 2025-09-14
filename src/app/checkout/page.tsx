'use client'

import React from 'react'
import style from '@/app/ui/checkout-page.module.css'
import Link from 'next/link'
import { useCart } from '../context/cartContext'
import Image from 'next/image'



const CheckoutPage = () => {

    const { cart } = useCart()
    return (
        <main className={style.main}>
            <button> Go Back</button>
            <div className={style.container}>
                <form action="">
                    <h1>Checkout</h1>
                    <p className={style.span}>Billing Details</p>
                    <div className={style.group}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="full_name" id="name" required placeholder='Alexei Ward' />
                    </div>
                    <div className={style.group}>
                        <label htmlFor="email">Email Adress</label>
                        <input type="email" name='email_adress' id='email' required placeholder='alexei@mail.com' />
                    </div>
                    <div className={style.group}>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="number" name="phone_number" id="phone" required placeholder='+56 9 123 - 4567' />
                    </div>
                    <p className={style.span}>Shipping Info</p>
                    <div className={`${style.group} ${style.span}`}>
                        <label htmlFor="adress">Your Address</label>
                        <input type="text" name="adress" id="adress" required placeholder='1137 Williams Avenue' />
                    </div>
                    <div className={style.group}>
                        <label htmlFor="zip">ZIP Code</label>
                        <input type="text" name="zip_code" id="zip" required placeholder='10001' />
                    </div>
                    <div className={style.group}>
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" id="city" required placeholder='New York' />
                    </div>
                    <div className={style.group}>
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" id="country" required placeholder='USA' />
                    </div>


                    <fieldset className={style.span}>
                        <legend>Payment Details</legend>
                        <div className={style.radiocontainer}>
                            <p> Payment Method</p>
                            <div>
                                <div className={style.group}>
                                    <input type="radio" name="method" id="e-money" value={'e-Money'} />
                                    <label htmlFor="e-money">e-Money</label>
                                </div>
                                <div className={style.group}>
                                    <input type="radio" name="method" id="cash-on" value={'Cash-on Delivery'} />
                                    <label htmlFor="cash-on">Cash-on Delivery</label>
                                </div>
                            </div>
                        </div>

                    </fieldset>
                </form>

                <section className={style.summary}>
                    <h2>Summary</h2>

                    {cart.length >= 1 ? cart.map(item => (
                        <div className={style.entry} key={item.id}>
                            <Image
                                src={item.cartImage}
                                width={150}
                                height={150}
                                alt='Product Image'
                            />
                            <div>
                                <Link className={style.name} href={item.slug}> <p>{item.shortName}</p></Link>
                                <p className={style.unitprice}>${item.price}</p>
                            </div>

                            <span className={style.counter}>x{item.quantity}</span>
                        </div>
                    )) : <p> No cart Items</p>}
                    <div className={style.order}>
                        <ul>
                            <li> Total <span>  ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</span></li>
                            <li> Shipping <span> $50</span></li>
                            <li> vat (included) <span> $ 6,177.8</span></li>
                            <li> Grand Total <span className={style.total}>$ 1221212</span></li>
                        </ul>

                    </div>

                    <Link className={`${style.checkout} ${cart.length < 1 ? style.disable : ''}`} href={'/checkout'}
                    >Checkout</Link>
                </section>
            </div>


        </main>
    )
}

export default CheckoutPage