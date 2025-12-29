'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import styles from './Header.module.css';

const NAV_ITEMS = [
    { label: 'Home', href: '/' },
    { label: 'Neu & Occasionen', href: '/boats' },
    { label: 'Motoren & Zubehör', href: '/products' },
    { label: 'Dienstleistungen', href: '/services' },
    { label: 'Über uns', href: '/about' },
    { label: 'Kontakt', href: '/contact' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else if (window.scrollY < 30) {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.nav}`}>
                <Link href="/" className={styles.logo}>
                    <img
                        src="/Images/gabo_marti_logo.png"
                        alt="Gabo Marti Logo"
                        style={{ height: '40px', width: 'auto' }}
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.desktopMenu}>
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={styles.link}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button href="/contact" variant="primary">Angebot anfragen</Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={styles.menuButton}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
                {NAV_ITEMS.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={styles.mobileLink}
                        onClick={() => setIsOpen(false)}
                    >
                        {item.label}
                    </Link>
                ))}
                <div style={{ marginTop: '1rem' }}>
                    <Button href="/contact" fullWidth>Angebot anfragen</Button>
                </div>
            </div>
        </header>
    );
}
