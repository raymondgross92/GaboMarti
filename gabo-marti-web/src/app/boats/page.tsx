'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import Button from '@/components/ui/Button';
import styles from '@/components/sections/Products.module.css';

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
        color: '#FFFFFF', // White background
        link: 'https://promot.ch/produkte-type/alle-produkte/boote/',
        image: '/Images/promot_logo.webp'
    },
    {
        title: 'Occasionen',
        text: 'Finden Sie alle unsere aktuellen Inserate direkt auf Boot24.',
        color: '#FFFFFF', // White background
        link: 'https://www.boot24.ch/chde/haendler/1833/gabo-marti-gmbh/',
        image: '/Images/boot24_logo.png'
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
                                boat.link ? (
                                    <a
                                        key={index}
                                        href={boat.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.card}
                                        style={{ textDecoration: 'none', display: 'block' }}
                                    >
                                        <div
                                            className={styles.cardImage}
                                            style={{
                                                backgroundColor: boat.color,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                padding: '2rem'
                                            }}
                                        >
                                            {boat.image && (
                                                <img
                                                    src={boat.image}
                                                    alt={boat.title}
                                                    style={{
                                                        maxWidth: '80%',
                                                        maxHeight: '80%',
                                                        objectFit: 'contain'
                                                    }}
                                                />
                                            )}
                                        </div>
                                        <div className={styles.overlay}>
                                            <h3 className={styles.cardTitle}>{boat.title}</h3>
                                            <div className={styles.cardText}>{boat.text}</div>
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
                                )
                            ))}
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
}
