'use client';

import { useState } from 'react';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import ScrollAnimation from '../ui/ScrollAnimation';
import styles from './Contact.module.css';

export default function Contact() {
    const [honey, setHoney] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (honey) {
            // Honeypot filled = spam
            return;
        }
        // Success simulation
        alert('Vielen Dank! Ihre Nachricht wurde gesendet.');
    };

    return (
        <section id="contact" className={`section ${styles.section}`}>
            <div className="container">
                <ScrollAnimation>
                    <SectionHeading title="Kontakt" subtitle="Wir sind für Sie da" />

                    <div className={styles.grid}>
                        {/* Info Side */}
                        <div>
                            <div className={styles.infoBox}>
                                <h3 className={styles.infoTitle}>Anschrift</h3>
                                <p className={styles.text}>
                                    Gabo Marti GmbH<br />
                                    Sonnmattstrasse 1<br />
                                    6206 Neuenkirch
                                </p>
                                <p className={styles.text} style={{ marginTop: '1rem' }}>
                                    Tel: +41 41 467 10 46<br />
                                    Email: info@gabomarti.ch
                                </p>
                            </div>

                            <div className={styles.infoBox}>
                                <h3 className={styles.infoTitle}>Öffnungszeiten</h3>
                                <p className={styles.text}>
                                    <strong>Mo - Fr:</strong> 08:00 - 12:00 | 13:30 - 17:30<br />
                                    <strong>Sa:</strong> Nach Vereinbarung<br />
                                    <strong>So:</strong> Geschlossen
                                </p>
                            </div>

                            <div className={styles.mapPlaceholder} style={{ padding: 0, overflow: 'hidden' }}>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight={0}
                                    marginWidth={0}
                                    src="https://maps.google.com/maps?q=Sonnmattstrasse+1+6206+Neuenkirch&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    title="Standort Gabo Marti GmbH"
                                    style={{ border: 0, display: 'block' }}
                                ></iframe>
                            </div>
                        </div>

                        {/* Form Side */}
                        <form className={styles.form} onSubmit={handleSubmit}>
                            {/* Honeypot Field */}
                            <input
                                type="text"
                                name="_honey"
                                style={{ display: 'none' }}
                                tabIndex={-1}
                                autoComplete="off"
                                value={honey}
                                onChange={(e) => setHoney(e.target.value)}
                            />

                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>Name</label>
                                <input type="text" id="name" className={styles.input} placeholder="Ihr Name" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>E-Mail</label>
                                <input type="email" id="email" className={styles.input} placeholder="Ihre E-Mail Adresse" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="phone" className={styles.label}>Telefon (optional)</label>
                                <input type="tel" id="phone" className={styles.input} placeholder="Ihre Telefonnummer" />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>Nachricht</label>
                                <textarea id="message" className={styles.textarea} placeholder="Wie können wir Ihnen helfen?" required></textarea>
                            </div>

                            <Button type="submit" variant="primary" fullWidth>Nachricht senden</Button>
                        </form>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
