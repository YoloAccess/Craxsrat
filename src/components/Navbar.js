"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo} onClick={() => setMobileMenuOpen(false)}>
          Craxs<span className={styles.logoSpan}>RAT</span>
        </Link>

        <div className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <Link href="/#capabilities" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Capabilities</Link>
          <Link href="/#vectors" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Attack Vectors</Link>
          <Link href="/#defense" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Defense</Link>
          <Link href="/privacy-policy" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Privacy</Link>
          <div className={styles.navActions}>
            <a href="https://t.me/Pretty_Hax" target="_blank" rel="noopener noreferrer" className={styles.ctaButtonSecondary}>
              Telegram
            </a>
            <a href="https://chromewebstore.google.com/detail/craxs-rat/bmchnmhplhjdoakfhcdkdlaniifmpehl" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              Add to Chrome
            </a>
          </div>
        </div>

        <button 
          className={`${styles.mobileToggle} ${mobileMenuOpen ? styles.mobileOpen : ''}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}></span>
        </button>
      </div>
    </nav>
  );
}
