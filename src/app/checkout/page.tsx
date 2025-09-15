'use client'

import React, { useState, useRef } from 'react'
import style from '@/app/ui/checkout-page.module.css'
import Link from 'next/link'
import { useCart } from '../context/cartContext'
import Image from 'next/image'
import { formSchema } from '../validations/formSchema'



const CheckoutPage = () => {

    const [form, setForm] = useState({
        full_name: "",
        email_adress: "",
        phone_number: "",
        adress: "",
        zip_code: "",
        city: "",
        country: "",
        method: "",
                 eMoneyNumber: "", // <-- agrega esto
    eMoneyPin: "",
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const { cart } = useCart()
    const formRef = useRef<HTMLFormElement>(null);

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const vat = Math.round(subtotal * 0.2);
    const shipping = 50;
    const grandTotal = subtotal + shipping + vat;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, method: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const result = formSchema.safeParse(form);
        if (!result.success && result.error) {
            const fieldErrors: { [key: string]: string } = {};
            result.error.issues.forEach((err) => {
                const field = err.path[0] as string | undefined;
                if (field) fieldErrors[field] = err.message;
            });
            setErrors(fieldErrors);
            return;
        }
        setErrors({});

    };

    return (
        <main className={style.main}>
            <button> Go Back</button>
            <div className={style.container}  >
                <form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Checkout</h1>
                    <p className={style.span}>Billing Details</p>
                    <div className={style.group}>
                        <label htmlFor="name">Name {errors.full_name && <span>{errors.full_name}</span>}</label>
                        <input type="text" name="full_name" id="name" placeholder='Alexei Ward' onChange={handleChange} />

                    </div>
                    <div className={style.group}>
                        <label htmlFor="email">Email Adress {errors.email_adress && <span>{errors.email_adress}</span>}</label>
                        <input type="email" name='email_adress' id='email' placeholder='alexei@mail.com' onChange={handleChange} />

                    </div>
                    <div className={style.group}>
                        <label htmlFor="phone">Phone Number {errors.phone_number && <span>{errors.phone_number}</span>}</label>
                        <input type="number" name="phone_number" id="phone" placeholder='+56 9 123 - 4567' onChange={handleChange} />


                    </div>
                    <p className={style.span}>Shipping Info</p>
                    <div className={`${style.group} ${style.span}`}>
                        <label htmlFor="adress">Your Address {errors.adress && <span>{errors.adress}</span>}</label>
                        <input type="text" name="adress" id="adress" placeholder='1137 Williams Avenue' onChange={handleChange} />


                    </div>
                    <div className={style.group}>
                        <label htmlFor="zip">ZIP Code {errors.zip_code && <span>{errors.zip_code}</span>}</label>
                        <input type="text" name="zip_code" id="zip" placeholder='10001' onChange={handleChange} />


                    </div>
                    <div className={style.group}>
                        <label htmlFor="city">City  {errors.city && <span>{errors.city}</span>}</label>
                        <input type="text" name="city" id="city" placeholder='New York' onChange={handleChange} />

                    </div>
                    <div className={style.group}>
                        <label htmlFor="country">Country {errors.country && <span>{errors.country}</span>}</label>
                        <input type="text" name="country" id="country" placeholder='USA' onChange={handleChange} />

                    </div>


                    <fieldset className={style.span}>
                        <legend>Payment Details</legend>
                        <div className={style.radiocontainer}>
                            <p> Payment Method</p>{errors.method && <span>{errors.method}</span>}
                            <div>
                                <div className={style.group}>
                                    <input type="radio" name="method" id="e-money" value={'e-Money'} checked={form.method === "e-Money"} onChange={handleRadio} />
                                    <label htmlFor="e-money">e-Money</label>
                                </div>
                                <div className={style.group}>
                                    <input type="radio" name="method" id="cash-on" value={'Cash-on Delivery'} checked={form.method === "Cash-on Delivery"} onChange={handleRadio} />
                                    <label htmlFor="cash-on">Cash-on Delivery</label>
                                </div>
                            </div>

                        </div>
                    </fieldset>
                    {form.method === "e-Money" && (
                        <>
                            <div className={style.group}>
                                <label htmlFor="eMoneyNumber">e-Money Number</label>
                                <input
                                    type="text"
                                    name="eMoneyNumber"
                                    id="eMoneyNumber"
                                    placeholder="238521993"
                                    onChange={handleChange}
                                />
                                {/* Puedes mostrar errores si lo agregas al esquema */}
                            </div>
                            <div className={style.group}>
                                <label htmlFor="eMoneyPin">e-Money PIN</label>
                                <input
                                    type="text"
                                    name="eMoneyPin"
                                    id="eMoneyPin"
                                    placeholder="6891"
                                    onChange={handleChange}
                                />
                                {/* Puedes mostrar errores si lo agregas al esquema */}
                            </div>
                        </>
                    )}

                    {form.method === "Cash-on Delivery" && (
                        <div className={`${style.group} ${style.span}`}>
                            <img src="/images/checkout/icon-cash-on-delivery.svg" alt="cash on icon" />
                            <p>
                                The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence.
                                Please ensure your address is correct so that your order will not be cancelled.
                            </p>
                        </div>
                    )}
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
                            <li> Total <span>  ${subtotal}</span></li>
                            <li> Shipping <span> ${shipping}</span></li>
                            <li> vat (included) <span> $ {vat}</span></li>
                            <li> Grand Total <span className={style.total}>$ {grandTotal}</span></li>
                        </ul>

                    </div>


                    <button
                        className={`${style.checkout} ${cart.length < 1 ? style.disable : ''}`}
                        type="button"
                        onClick={() => {
                            if (formRef.current) {
                                formRef.current.requestSubmit();
                            }
                        }}
                        disabled={cart.length < 1}
                    >
                        Checkout
                    </button>
                </section>
            </div>


        </main>
    )
}

export default CheckoutPage