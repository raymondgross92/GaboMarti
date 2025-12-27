'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import Button from '@/components/ui/Button';
import styles from '@/components/sections/Products.module.css';

const BOATS = [
    {
        title: 'Neuboote',
        text: 'Entdecken Sie unsere aktuellen Neuboote. Wir beraten Sie gerne.',
        color: '#FFFFFF', // White background
        link: 'https://promot.ch/produkte-type/alle-produkte/boote/buster/',
        image: null // Will fallback to text "ProMot" in the rendering logic below
    },
    {
        title: 'Occasionen',
        text: 'Finden Sie alle unsere aktuellen Inserate direkt auf Boot24.',
        color: '#FFFFFF', // White background
        link: 'https://www.boot24.ch/chde/haendler/1833/gabo-marti-gmbh/',
        image: 'https://www.boot24.ch/images/logo-boot24.svg'
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
                                            {boat.title === 'Neuboote' ? (
                                                <div style={{
                                                    fontSize: '2.5rem',
                                                    fontWeight: '900',
                                                    color: '#E30613', // Promot Red
                                                    fontFamily: 'Helvetica, Arial, sans-serif',
                                                    letterSpacing: '-0.05em'
                                                }}>
                                                    ProMot
                                                </div>
                                            ) : (
                                                <div style={{
                                                    fontSize: '2rem',
                                                    fontWeight: 'bold',
                                                    color: '#00428A', // Boot24 Blue
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem'
                                                }}>
                                                    {/* Simple SVG Logo representation for Boot24 */}
                                                    <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M2 21h20"></path>
                                                        <path d="M3.5 12l2-7h13l2 7"></path>
                                                        <path d="M2 21c0-3 1.5-5 5-5s5 2 5 5"></path>
                                                        <path d="M17 21a5 5 0 0 0-5-5"></path>
                                                    </svg>
                                                    Boot24
                                                </div>
                                            )}
                                        </div>
                                        <div className={styles.overlay}>
                                            <h3 className={styles.cardTitle}>{boat.title}</h3>
                                            <p className={styles.cardText}>{boat.text}</p>
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
