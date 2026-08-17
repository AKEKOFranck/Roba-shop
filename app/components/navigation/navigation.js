'use client'

import styles from "./navigation.module.css";
import { useState } from "react";
import Link from "next/link";
import { TiThMenuOutline } from "react-icons/ti";
import { GiCrossedBones } from "react-icons/gi";

export default function Navigation() {

   const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
   
       <header className={styles.header}>

      <div className={styles.container}>

        {/* =========================
            LOGO
        ========================= */}

        <Link
          href="/"
          className={styles.logo}
          onClick={closeMenu}
        >
          <span>ROBA</span>
          <small>Shop</small>
        </Link>


        {/* =========================
            NAVIGATION DESKTOP
        ========================= */}

        <nav className={styles.nav}>

          <Link
            href="/"
            className={styles.navLink}
          >
            Accueil
          </Link>

          <Link
            href="/parfumes"
            className={styles.navLink}
          >
            Parfum
          </Link>

          <Link
            href="/deo"
            className={styles.navLink}
          >
            Deodorant
          </Link>

         

        </nav>


        {/* =========================
            BOUTON DESKTOP
        ========================= */}

        <Link
          href="/about"
          className={styles.headerButton}
        >
          En savoir plus
        </Link>


        {/* =========================
            MENU MOBILE
        ========================= */}

        <button
          type="button"
          className={`${styles.menuButton} ${
            menuOpen ? styles.open : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? <GiCrossedBones />
              : <TiThMenuOutline />
          }
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      {/* =========================
          MENU MOBILE
      ========================= */}

      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
      >

        <nav className={styles.mobileNav}>

          <Link
            href="/"
            onClick={closeMenu}
          >
            <span>01</span>
            Accueil
          </Link>

          <Link
            href="/parfumes"
            onClick={closeMenu}
          >
            <span>02</span>
            Parfum
          </Link>

          <Link
            href="/deo"
            onClick={closeMenu}
          >
            <span>03</span>
            Deodorant
          </Link>

        </nav>


        <div className={styles.mobileBottom}>

          <p>
            L'élégance
            <br />
            a son parfum.
          </p>

          <Link
            href="/about"
            onClick={closeMenu}
          >
            En savoir plus
          </Link>

        </div>

      </div>

    </header>
  );
}

