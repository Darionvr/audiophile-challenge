'use client';

import { useRef, useEffect } from 'react';
import style from '@/app/ui//styles/cart.module.css'
import { useCart } from '../context/cartContext';
import Image from 'next/image';
import Link from 'next/link';



export default function CartDialog({ isOpen, onClose }: { isOpen: boolean, onClose: any }) {

    const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
    
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (isOpen && dialog && !dialog.open) {
            dialog.showModal();
        }
        // Cerrar al hacer click fuera
        const handleClickOutside = (event: MouseEvent) => {
            if (dialog && dialog.open && event.target === dialog) {
                dialog.close();
                onClose();
            }
        };
        dialog?.addEventListener('mousedown', handleClickOutside);
        return () => {
            dialog?.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);


    return (
        <dialog ref={dialogRef} className={style.cart}>
            <div className={style.container}>

                <div>
                    <p> CART <span>({cart.reduce((sum, item) => sum + item.quantity, 0)})</span></p>
                    <button onClick={clearCart}>Remove All</button>
                </div>
                {cart.map(item => (
                    <div className={style.entry} key={item.id}>
                        <Image
                            src={item.cartImage}
                            width={150}
                            height={150}
                            alt='Product Image'
                        />
                        <div>
                            <Link className={style.name} href={item.slug}> <p >{item.shortName}</p></Link>
                            <p className={style.unitprice}>${item.price}</p>
                        </div>
                        <div className={style.counter}>
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                    </div>
                ))}
                <div>
                    <p className={style.total}>Total</p>
                    <p className={style.totalprice}>
                        ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
                    </p>
                </div>
                <Link className={style.checkout} href={'/checkout'} 
                onClick={() => {dialogRef.current?.close(); onClose()}}>Checkout</Link>
            </div>
        </dialog>
    );
}
