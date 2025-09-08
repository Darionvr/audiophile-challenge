'use client'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/ui/navbar.module.css'
import { usePathname } from 'next/navigation'

const Navbar = () => {

  const pathname = usePathname();

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
        <button> <img src="\images\shared\desktop\icon-cart.svg" alt="Cart Icon" /> </button>

      </div>

    </nav>
  )
}

export default Navbar