'use client';

import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={`section ${styles.section}`}>
            <div className="container">
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

                        <div className={styles.mapPlaceholder}>
                            Karte wird geladen...
                        </div>
                    </div>

                    {/* Form Side */}
                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input type="text" id="name" className={styles.input} placeholder="Ihr Name" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>E-Mail</label>
                            <input type="email" id="email" className={styles.input} placeholder="Ihre E-Mail Adresse" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Nachricht</label>
                            <textarea id="message" className={styles.textarea} placeholder="Wie können wir Ihnen helfen?"></textarea>
                        </div>

                        <Button type="submit" variant="primary" fullWidth>Nachricht senden</Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
