'use client'
import React, { useEffect, useRef } from 'react'
import styles from '@/app/ui/styles/confirmation-page.module.css'
import { useCart } from '../context/cartContext'
import Image from 'next/image'
import Link from 'next/link'


const ConfirmationPage = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {

    const { cart, grandTotal, clearCart } = useCart();


    const dialogRef = useRef<HTMLDialogElement>(null);

    
    useEffect(() => {
        const dialog = dialogRef.current;

        if (isOpen && dialog && !dialog.open) {
            dialog.showModal();
        }
       
    }, [isOpen, onClose]);



    return (
        <dialog ref={dialogRef} className={styles.dialog}>
            <div className={styles.container}>
                <div>
                    <img src="/images/shared/desktop/icon-check-mark.svg" alt="check icon" />
                    <p>Thank You for your order</p>
                    <p>You will receive an email confirmation shortly.</p>
                </div>
                <section>
                    {cart.map(item => (
                        <div className={styles.entry} key={item.id}>
                            <Image
                                src={item.cartImage}
                                width={150}
                                height={150}
                                alt='Product Image'
                            />
                            <div>
                                <p>{item.shortName}</p>
                                <p className={styles.unitprice}>${item.price}</p>
                            </div>

                            <p>x{item.quantity}</p>

                        </div>
                    ))}
                    <div className={styles.grandTotal}>
                        <p>Grand Total</p>
                        <p>$ {grandTotal}</p>
                    </div>
                </section>
                <Link href={"/"} onClick={()=> clearCart()}> Back to Home</Link>
                
            </div>
        </dialog>
    )
}

export default ConfirmationPage