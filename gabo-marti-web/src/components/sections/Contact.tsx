'use client';

import { useState } from 'react';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import ScrollAnimation from '../ui/ScrollAnimation';
import styles from './Contact.module.css';

export default function Contact() {
    const [honey, setHoney] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (honey) {
            // Honeypot filled = spam
            return;
        }

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formsubmit.co/ajax/info@gabomarti.ch", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(Object.fromEntries(formData))
            });

            if (response.ok) {
                alert('Vielen Dank! Ihre Nachricht wurde gesendet.');
                form.reset();
            } else {
                alert('Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.');
            }
        } catch (error) {
            alert('Ein Netzwerkfehler ist aufgetreten.');
        }
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
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Sonnmattstrasse+1+6206+Neuenkirch"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
                                        className="hover:text-primary"
                                    >
                                        Gabo Marti GmbH<br />
                                        Sonnmattstrasse 1<br />
                                        6206 Neuenkirch
                                    </a>
                                </p>
                                <p className={styles.text} style={{ marginTop: '1rem' }}>
                                    Tel: <a href="tel:+41414671046" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-primary">+41 41 467 10 46</a><br />
                                    Email: <a href="mailto:info@gabomarti.ch" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-primary">info@gabomarti.ch</a>
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
                            {/* Hidden Configuration Fields for Formsubmit */}
                            <input type="hidden" name="_subject" value="Neue Nachricht via Webseite (Gabo Marti)" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_autoresponse" value="Vielen Dank für Ihre Nachricht. Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden. Freundliche Grüsse, Gabo Marti GmbH" />

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
                                <input type="text" id="name" name="name" className={styles.input} placeholder="Ihr Name" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>E-Mail</label>
                                <input type="email" id="email" name="email" className={styles.input} placeholder="Ihre E-Mail Adresse" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="phone" className={styles.label}>Telefon (optional)</label>
                                <input type="tel" id="phone" name="phone" className={styles.input} placeholder="Ihre Telefonnummer" />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>Nachricht</label>
                                <textarea id="message" name="message" className={styles.textarea} placeholder="Wie können wir Ihnen helfen?" required></textarea>
                            </div>

                            <Button type="submit" variant="primary" fullWidth>Nachricht senden</Button>
                        </form>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
