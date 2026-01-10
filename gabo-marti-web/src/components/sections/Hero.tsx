'use client';

import Button from '../ui/Button';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.videoBackground}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.video}
                >
                    <source src="/Images/Video_1.mp4" type="video/mp4" />
                </video>
                <div className={styles.overlay}></div>
            </div>

            <motion.div
                className={styles.content}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className={styles.title}>Boote & Motoren</h1>
                <p className={styles.subtitle}>
                    Ihr Partner für Ihr Boot. Wir rufen Sie gerne zurück!
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Button href="/contact" variant="primary" className={`${styles.buttonWhiteOutline} ${styles.buttonContact}`}>
                        Kontakt aufnehmen
                    </Button>
                    <Button href="/boats" variant="outline" className={`${styles.buttonWhiteOutline} ${styles.buttonOffers}`}>
                        Angebote ansehen
                    </Button>
                </div>
            </motion.div>
        </section >
    );
}
