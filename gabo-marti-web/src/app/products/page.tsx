'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import Button from '@/components/ui/Button';
import styles from '@/components/sections/Products.module.css';

const PRODUCTS = [
    {
        title: 'Motoren',
        text: 'Yamaha Aussenborder, Elektromotoren und Service für alle Marken.',
        color: '#134074'
    },
    {
        title: 'Echolote & Navigation',
        text: 'Professionelle Echolote, Fishfinder und Navigationssysteme.',
        color: '#8DA9C4'
    },
    {
        title: 'Zubehör',
        text: 'Sicherheitsausrüstung, Pflegeprodukte und technisches Zubehör.',
        color: '#64748B' // Greyish
    }
];

export default function ProductsPage() {
    return (
        <div style={{ paddingTop: '80px' }}>
            <section className={`section ${styles.section}`}>
                <div className="container">
                    <ScrollAnimation>
                        <SectionHeading title="Motoren & Zubehör" subtitle="Alles für Ihr Boot" />

                        <div className={styles.grid}>
                            {PRODUCTS.map((prod, index) => (
                                <div key={index} className={styles.card}>
                                    <div
                                        className={styles.cardImage}
                                        style={{ backgroundColor: prod.color }}
                                    />
                                    <div className={styles.overlay}>
                                        <h3 className={styles.cardTitle}>{prod.title}</h3>
                                        <p className={styles.cardText}>{prod.text}</p>
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
        </div>
    );
}
