'use client';

import { useRef, useEffect, useState } from 'react';
import style from '@/app/ui/cart.module.css'

export default function CartDialog({ isOpen, onClose }: { isOpen: boolean, onClose: any }) {

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

    const [count, setCount] = useState(1)
    const handleCount = (value: number) => {
        if (count + value < 1) return
        setCount(count + value)
    }


    return (
        <dialog ref={dialogRef} className={style.cart}>
            <div>
                <p> CART <span>(10)</span></p>
                <button>Remove All</button>
            </div>
            <div className={style.entry}>
                <div>
                    <p>xx99</p>
                    <p>$2.990</p>

                </div>
                <div className={style.counter}>
                    <button onClick={() => handleCount(-1)}>-</button>
                    <span>{count}</span>
                    <button onClick={() => handleCount(1)}>+</button>
                </div>
            </div>
            <div>
                <p>Total</p>
                <p>$29.990</p>
            </div>
            <button>Checkout</button>
        </dialog>
    );
}
