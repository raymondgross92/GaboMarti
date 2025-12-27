'use client';

import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import ScrollAnimation from '../ui/ScrollAnimation';
import styles from './Products.module.css';

const CATEGORIES = [
    {
        title: 'Boote',
        text: 'Neu- und Occasionsboote. Entdecken Sie unser aktuelles Angebot auf Boot24.',
        // In a real app, use next/image with actual src
        color: '#0B2545'
    },
    {
        title: 'Motoren',
        text: 'Yamaha Aussenborder, Elektromotoren und Service für alle Marken.',
        color: '#134074'
    },
    {
        title: 'Echolote & Zubehör',
        text: 'Professionelle Echolote, Navigation und passendes Zubehör für Ihr Boot.',
        color: '#8DA9C4'
    }
];

export default function Products() {
    return (
        <section id="products" className={`section ${styles.section}`}>
            <div className="container">
                <ScrollAnimation>
                    <SectionHeading title="Unser Angebot" subtitle="Qualität & Auswahl" />

                    <div className={styles.grid}>
                        {CATEGORIES.map((cat, index) => (
                            <div key={index} className={styles.card}>
                                {/* Fallback pattern/color since no images yet */}
                                <div
                                    className={styles.cardImage}
                                    style={{ backgroundColor: cat.color }}
                                />
                                <div className={styles.overlay}>
                                    <h3 className={styles.cardTitle}>{cat.title}</h3>
                                    <p className={styles.cardText}>{cat.text}</p>
                                    <div>
                                        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                                            Anfragen
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
