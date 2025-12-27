'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import Button from '@/components/ui/Button';
import styles from '@/components/sections/Products.module.css';

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
        color: '#134074',
        link: 'https://promot.ch/produkte-type/alle-produkte/marine-motoren/yamaha/'
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
        color: '#205EAC', // Slightly different blue
        link: 'https://promot.ch/produkte-type/alle-produkte/anhaenger/respo/'
    },
    {
        title: 'Angelshop',
        text: 'Besuchen Sie unseren Angelshop vor Ort. Wir führen ein breites Sortiment an Zubehör für Fischer und Bootsbesitzer.',
        color: '#475569',
        link: null
    },
    {
        title: 'Echolote & Navigation',
        text: 'Professionelle Echolote, Fishfinder und Navigationssysteme.',
        color: '#8DA9C4',
        link: null
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
                                prod.link ? (
                                    <a
                                        key={index}
                                        href={prod.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.card}
                                        style={{ textDecoration: 'none', display: 'block' }}
                                    >
                                        <div
                                            className={styles.cardImage}
                                            style={{ backgroundColor: prod.color }}
                                        />
                                        <div className={styles.overlay}>
                                            <h3 className={styles.cardTitle}>{prod.title}</h3>
                                            <div className={styles.cardText}>{prod.text}</div>
                                            <div style={{ marginTop: 'auto' }}>
                                                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                                                    Zum Angebot
                                                </Button>
                                            </div>
                                        </div>
                                    </a>
                                ) : (
                                    <div key={index} className={styles.card}>
                                        <div
                                            className={styles.cardImage}
                                            style={{ backgroundColor: prod.color }}
                                        />
                                        <div className={styles.overlay}>
                                            <h3 className={styles.cardTitle}>{prod.title}</h3>
                                            <p className={styles.cardText}>{prod.text}</p>
                                            <div style={{ marginTop: 'auto' }}>
                                                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
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
