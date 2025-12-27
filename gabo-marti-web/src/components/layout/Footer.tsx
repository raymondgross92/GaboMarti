import Link from 'next/link';
import { Anchor, Mail, MapPin, Phone } from 'lucide-react';
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
                            <Anchor size={24} className="text-white" />
                            <h3 style={{ margin: 0 }}>Gabo Marti</h3>
                        </div>
                        <p className={styles.text}>
                            Ihr Partner für Ihr Boot. Boote, Motoren und Unterhalt. Seit über 40 Jahren Qualität in Neuenkirch.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.column}>
                        <h3>Bereiche</h3>
                        <div className={styles.linkPool}>
                            <Link href="#services" className={styles.footerLink}>Service & Unterhalt</Link>
                            <Link href="#services" className={styles.footerLink}>Winterlager</Link>
                            <Link href="#products" className={styles.footerLink}>Bootsmarkt</Link>
                            <Link href="#contact" className={styles.footerLink}>Kontakt</Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className={styles.column}>
                        <h3>Kontakt</h3>
                        <div className={styles.linkPool}>
                            <div style={{ display: 'flex', gap: '0.75rem', color: '#CBD5E1' }}>
                                <MapPin size={20} />
                                <span>Sonnmattstrasse 1<br />6206 Neuenkirch</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.75rem', color: '#CBD5E1' }}>
                                <Phone size={20} />
                                <span>+41 41 467 10 46</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.75rem', color: '#CBD5E1' }}>
                                <Mail size={20} />
                                <span>info@gabomarti.ch</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} Gabo Marti GmbH. Alle Rechte vorbehalten.</p>
                </div>
            </div>
        </footer>
    );
}
