'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import Button from '@/components/ui/Button';
import styles from './boats.module.css';

const BOATS = [
    {
        title: 'Neuboote',
        text: (
            <>
                <div style={{ marginBottom: '1rem' }}>
                    <strong>Buster-Boote</strong><br />
                    Buster-Boote sind problemlose, haltbare, sichere und leicht zu pflegende Boote.<br />
                    Sie sind stabil und unsinkbar.
                </div>
                <div>
                    <strong>Thoma</strong><br />
                    Fischerboote mit Biss. Die Baureihen Thoma 500 550 600 Classic und 600 650 Sportfischer sind für höchste Ansprüche ausgelegt.
                </div>
            </>
        ),
        color: '#FFFFFF', // White background (kept for potential fallback, though CSS enforces white)
        link: 'https://promot.ch/produkte-type/alle-produkte/boote/',
        image: '/Images/promot_logo.webp'
    },
    {
        title: 'Occasionen',
        text: 'Finden Sie alle unsere aktuellen Inserate direkt auf Boot24.',
        color: '#FFFFFF',
        link: 'https://www.boot24.ch/chde/haendler/1833/gabo-marti-gmbh/',
        image: '/Images/boot24_logo.png'
    }
];

export default function BoatsPage() {
    return (
        <div style={{ paddingTop: '80px', paddingBottom: '4rem', backgroundColor: 'var(--background)' }}>
            <section className={`section ${styles.section}`}>
                <div className="container">
                    <ScrollAnimation>
                        <SectionHeading title="Neu & Occasionen" subtitle="Ihr Traumboot wartet" />

                        <div className={styles.grid}>
                            {BOATS.map((boat, index) => (
                                boat.link ? (
                                    <a
                                        key={index}
                                        href={boat.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.card}
                                    >
                                        <div className={styles.cardImage}>
                                            {boat.image && (
                                                <img
                                                    src={boat.image}
                                                    alt={boat.title}
                                                />
                                            )}
                                        </div>
                                        <div className={styles.cardContent}>
                                            <h3 className={styles.cardTitle}>{boat.title}</h3>
                                            <div className={styles.cardText}>{boat.text}</div>
                                            <div className={styles.buttonContainer}>
                                                <Button variant="primary" fullWidth>
                                                    Zum Angebot
                                                </Button>
                                            </div>
                                        </div>
                                    </a>
                                ) : (
                                    // Fallback or other cards if needed, though mostly unused now for boats
                                    <div key={index} className={styles.card}>
                                        <div className={styles.cardImage}>
                                            {/* Fallback color if no image */}
                                        </div>
                                        <div className={styles.cardContent}>
                                            <h3 className={styles.cardTitle}>{boat.title}</h3>
                                            <p className={styles.cardText}>{boat.text}</p>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
}
