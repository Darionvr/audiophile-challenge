'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '@/app/ui/styles/navbar.module.css'
import { usePathname } from 'next/navigation'
import CartDialog from './cart'
import { useCart } from '../context/cartContext'

const Navbar = () => {

  const pathname = usePathname();
  const [open, setOpen] = useState(false)
  const { cart } = useCart()
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible(prev => !prev);
  };


  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarcontainer}>
        <img className={styles.hamburger} src="/images/shared/tablet/icon-hamburger.svg" alt="open menu" onClick={toggleMenu} />
        <Link href={pathname !== '/' ? '/' : '#'}> <img src="\images\shared\desktop\logo.svg" alt="Page's Logo" /></Link>
        <ul data-visible={isMenuVisible ? 'true' : 'false'}>
          <li className={styles.closemenu} ><img src="/images/shared/tablet/icon-close-menu.svg" alt="close menu" onClick={toggleMenu} /></li>
          <li><Link href={"/"} className={pathname === "/" ? styles.active : ''} onClick={toggleMenu}> Home</Link> </li>
          <li><Link href={"/headphones"} className={pathname === "/headphones" ? styles.active : ''} onClick={toggleMenu}>  Headphones</Link></li>
          <li><Link href={"/speakers"} className={pathname === "/speakers" ? styles.active : ''} onClick={toggleMenu}> Speakers </Link></li>
          <li><Link href={"/earphones"} className={pathname === "/earphones" ? styles.active : ''} onClick={toggleMenu}> Earphones</Link></li>
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