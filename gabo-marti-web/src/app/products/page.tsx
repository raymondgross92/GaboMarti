'use client';

import { Radar } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import Button from '@/components/ui/Button';
import styles from './products.module.css';

const PRODUCTS = [
    {
        title: 'Motoren',
        text: (
            <>
                <div style={{ marginBottom: '0.5rem' }}>
                    <strong>YAMAHA</strong>
                </div>
                <div>
                    Yamaha baut weltweit beliebte und hochgeschätzte Aussenborder. Die Gründe dafür sind einfach: Die Auswahl, die Leistung und der gute Ruf. In allen drei Bereichen sind sie aussergewöhnlich gut.
                </div>
            </>
        ),
        color: '#FFFFFF',
        link: 'https://promot.ch/produkte-type/alle-produkte/marine-motoren/yamaha/',
        image: '/Images/logo_1.jpg' // Yamaha
    },
    {
        title: 'Respo Anhänger',
        text: (
            <>
                <div style={{ marginBottom: '0.5rem' }}>
                    <strong>RESPO</strong>
                </div>
                <div>
                    Respo produziert Bootsanhänger mit einem Gesamtgewicht bis zu 3500 kg und bietet eine reiche Auswahl an Anhänger, Zubehör und Ersatzteilen.<br />
                    Mit dem Respo Anhänger wird das ein- und auswassern zum Kinderspiel.
                </div>
            </>
        ),
        color: '#FFFFFF',
        link: 'https://promot.ch/produkte-type/alle-produkte/anhaenger/respo/',
        image: '/Images/anhänger_logo.png' // Respo
    },
    {
        title: 'Echolote & Navigation',
        text: 'Professionelle Echolote, Fishfinder und Navigationssysteme.',
        color: '#FFFFFF',
        link: null,
        icon: Radar
    }
];

export default function ProductsPage() {
    return (
        <div style={{ paddingTop: '80px', paddingBottom: '4rem', backgroundColor: 'var(--background)' }}>
            <section className={`section ${styles.section}`}>
                <div className="container">
                    <ScrollAnimation>
                        <SectionHeading title="Motoren & Zubehör" subtitle="Alles für Ihr Boot" />

                        <div className={styles.grid}>
                            {PRODUCTS.map((prod, index) => (
                                prod.link ? (
                                    <a
                                        key={index}
                                        href={prod.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.card}
                                    >
                                        <div className={styles.cardImage}>
                                            {prod.image && (
                                                <img
                                                    src={prod.image}
                                                    alt={prod.title}
                                                />
                                            )}
                                        </div>
                                        <div className={styles.cardContent}>
                                            <h3 className={styles.cardTitle}>{prod.title}</h3>
                                            <div className={styles.cardText}>{prod.text}</div>
                                            <div className={styles.buttonContainer}>
                                                <Button variant="primary" fullWidth>
                                                    Zum Angebot
                                                </Button>
                                            </div>
                                        </div>
                                    </a>
                                ) : (
                                    <div key={index} className={styles.card}>
                                        <div className={styles.cardImage}>
                                            {prod.icon && (
                                                <prod.icon size={64} color="var(--primary)" strokeWidth={1.5} />
                                            )}
                                        </div>
                                        <div className={styles.cardContent}>
                                            <h3 className={styles.cardTitle}>{prod.title}</h3>
                                            <p className={styles.cardText}>{prod.text}</p>
                                            <div className={styles.buttonContainer}>
                                                <Button variant="outline" fullWidth>
                                                    Anfragen
                                                </Button>
                                            </div>
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
