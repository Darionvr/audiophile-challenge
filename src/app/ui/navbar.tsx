'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '@/app/ui/navbar.module.css'
import { usePathname } from 'next/navigation'
import CartDialog from './cart'
import { useCart } from '../context/cartContext'

const Navbar = () => {

  const pathname = usePathname();
  const [open, setOpen] = useState(false)
  const { cart } = useCart()
  console.log(cart)

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarcontainer}>
        <Link href={pathname !== '/' ? '/' : '#'}> <img src="\images\shared\desktop\logo.svg" alt="Page's Logo" /></Link>
        <ul>
          <li><Link href={"/"} className={pathname === "/" ? styles.active : ''}> Home</Link> </li>
          <li><Link href={"/headphones"} className={pathname === "/headphones" ? styles.active : ''}>  Headphones</Link></li>
          <li><Link href={"/speakers"} className={pathname === "/speakers" ? styles.active : ''}> Speakers </Link></li>
          <li><Link href={"/earphones"} className={pathname === "/earphones" ? styles.active : ''}> Earphones</Link></li>
        </ul>
        <button onClick={() => setOpen(true)} aria-label="Abrir carrito">
          <img src="\images\shared\desktop\icon-cart.svg" alt="Cart Icon" />
          {cart.length >= 1 && <span className={styles.items}> {cart.reduce((sum, item) => sum + item.quantity, 0)}</span>}
        </button>
        
        <CartDialog
          isOpen={open}
          onClose={() => setOpen(false)} />
      </div>

    </nav>
  )
}

export default Navbar