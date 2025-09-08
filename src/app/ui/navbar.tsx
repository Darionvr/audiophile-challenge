import Link from 'next/link'
import React from 'react'
import styles from '@/app/ui/navbar.module.css'


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarcontainer}>
        <img src="\images\shared\desktop\logo.svg" alt="Page's Logo" />
        <ul>
          <li><Link href={"/"}> Home</Link> </li>
          <li><Link href={"/headphones"}>  Headphones</Link></li>
          <li><Link href={"/speakers"}> Speakers </Link></li>
          <li><Link href={"/earphones"}> Earphones</Link></li>
        </ul>
        <button> <img src="\images\shared\desktop\icon-cart.svg" alt="Cart Icon" /> </button>

      </div>

    </nav>
  )
}

export default Navbar