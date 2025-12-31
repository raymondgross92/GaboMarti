import Link from 'next/link';
import { Anchor, Mail, MapPin, Phone, Facebook, Instagram } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Brand & Social Combined for compact layout */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem', width: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <img
                                src="/Images/gabo_marti_logo.png"
                                alt="Gabo Marti Logo"
                                style={{ height: '40px', width: 'auto' }}
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                            <a href="https://www.facebook.com/people/GABO-Marti-GmbH/100062130264042/#" target="_blank" rel="noopener noreferrer" style={{ color: '#CBD5E1', transition: 'color 0.2s' }} className="hover:text-white">
                                <Facebook size={24} />
                            </a>
                            <a href="https://www.instagram.com/gabomartigmbh/#" target="_blank" rel="noopener noreferrer" style={{ color: '#CBD5E1', transition: 'color 0.2s' }} className="hover:text-white">
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} Gabo Marti GmbH. Alle Rechte vorbehalten.</p>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', opacity: 0.8, fontSize: '0.9rem', color: 'var(--text-light)' }}>
                        <Link href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-primary transition-colors">Datenschutz</Link>
                        <span>|</span>
                        <Link href="/impressum" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-primary transition-colors">Impressum</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
