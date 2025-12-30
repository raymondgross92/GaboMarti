'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import Button from '@/components/ui/Button';
import styles from './boats.module.css';

const BOATS = [
    {
        title: 'Neuboote',
        text: 'Entdecken Sie die erstklassigen Boote unseres Partners Promot AG. Von robusten Buster-Booten bis zu vielseitigen Modellen von Yamarin und Zodiac – wir bieten Ihnen eine breite Auswahl für jedes Bedürfnis auf dem Wasser.',
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
        <div style={{ backgroundColor: 'var(--background)' }}>
            {/* Hero Header */}
            <div className={styles.pageHero}>
                <div className={styles.heroImage}>
                    <img src="/Images/webseite_3.jpeg" alt="Gabo Marti Boote" />
                </div>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <ScrollAnimation>
                        <SectionHeading
                            title="Neu & Occasionen"
                            subtitle="Ihr Traumboot wartet"
                            className="text-white"
                        />
                    </ScrollAnimation>
                </div>
            </div>

            <section className={`section ${styles.section}`}>
                <div className="container">
                    <ScrollAnimation>
                        {/* Heading moved to hero */}

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
