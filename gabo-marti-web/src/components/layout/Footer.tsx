import Link from 'next/link';
import { Anchor, Mail, MapPin, Phone, Facebook, Instagram } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Brand */}
                    <div className={styles.column}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <img
                                src="/Images/gabo_marti_logo.png"
                                alt="Gabo Marti Logo"
                                style={{ height: '48px', width: 'auto' }}
                            />
                        </div>
                        <p className={styles.text}>
                            Ihr Partner für Ihr Boot. Boote, Motoren und Unterhalt. Seit über 40 Jahren Qualität in Neuenkirch.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.column}>
                        <h3>Bereiche</h3>
                        <div className={styles.linkPool}>
                            <Link href="/boats" className={styles.footerLink}>Neu & Occasionen</Link>
                            <Link href="/products" className={styles.footerLink}>Motoren & Zubehör</Link>
                            <Link href="/services" className={styles.footerLink}>Dienstleistungen</Link>
                            <Link href="/about" className={styles.footerLink}>Über uns</Link>
                            <Link href="/contact" className={styles.footerLink}>Kontakt</Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className={styles.column}>
                        <h3>Kontakt</h3>
                        <div className={styles.linkPool}>
                            <div style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-main)' }}>
                                <MapPin size={20} className="text-primary" style={{ color: 'var(--secondary)' }} />
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Sonnmattstrasse+1+6206+Neuenkirch"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                    className="hover:text-primary transition-colors"
                                >
                                    Sonnmattstrasse 1<br />6206 Neuenkirch
                                </a>
                            </div>
                            <div style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-main)' }}>
                                <Phone size={20} style={{ color: 'var(--secondary)' }} />
                                <a
                                    href="tel:+41414671046"
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                    className="hover:text-primary transition-colors"
                                >
                                    +41 41 467 10 46
                                </a>
                            </div>
                            <div style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-main)' }}>
                                <Mail size={20} style={{ color: 'var(--secondary)' }} />
                                <a
                                    href="mailto:info@gabomarti.ch"
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                    className="hover:text-primary transition-colors"
                                >
                                    info@gabomarti.ch
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className={styles.column}>
                        <h3>Folgen Sie uns auf Social Media</h3>
                        <div style={{ display: 'flex', gap: '1rem' }}>
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
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', opacity: 0.8, fontSize: '0.9rem' }}>
                        <Link href="/privacy" style={{ color: 'white', textDecoration: 'none' }}>Datenschutz</Link>
                        <span>|</span>
                        <Link href="/impressum" style={{ color: 'white', textDecoration: 'none' }}>Impressum</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
