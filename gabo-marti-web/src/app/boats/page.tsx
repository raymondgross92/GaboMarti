'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import Button from '@/components/ui/Button';
import styles from '@/components/sections/Products.module.css';

const BOATS = [
    {
        title: 'Neuboote',
        text: 'Entdecken Sie unsere aktuellen Neuboote. Wir beraten Sie gerne.',
        color: '#0B2545'
    },
    {
        title: 'Occasionen',
        text: 'Gepflegte Boote aus zweiter Hand. Komplett geprüft und gewartet.',
        color: '#134074'
    },
    {
        title: 'Boot24 Angebote',
        text: 'Finden Sie alle unsere aktuellen Inserate direkt auf Boot24.',
        color: '#205EAC' // Slightly lighter blue
    }
];

export default function BoatsPage() {
    return (
        <div style={{ paddingTop: '80px' }}>
            <section className={`section ${styles.section}`}>
                <div className="container">
                    <ScrollAnimation>
                        <SectionHeading title="Neu & Occasionen" subtitle="Ihr Traumboot wartet" />

                        <div className={styles.grid}>
                            {BOATS.map((boat, index) => (
                                <div key={index} className={styles.card}>
                                    <div
                                        className={styles.cardImage}
                                        style={{ backgroundColor: boat.color }}
                                    />
                                    <div className={styles.overlay}>
                                        <h3 className={styles.cardTitle}>{boat.title}</h3>
                                        <p className={styles.cardText}>{boat.text}</p>
                                        <div>
                                            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                                                Mehr erfahren
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
}
