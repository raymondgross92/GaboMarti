'use client';

import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import ScrollAnimation from '../ui/ScrollAnimation';
import styles from './About.module.css';

export default function About() {
    const [page, setPage] = useState(0);
    const itemsPerPage = 4;
    const totalItems = 8;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePrev = () => {
        setPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
    };

    const handleNext = () => {
        setPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
    };

    // Sponsors data
    const allSponsors = [
        { id: 1, img: '/Images/logo_1.jpg', alt: 'Partner 1' },
        { id: 2, img: '/Images/logo_2.png', alt: 'Partner 2' },
        { id: 3, img: '/Images/logo_3.png', alt: 'Partner 3' },
        { id: 4, img: '/Images/logo_4.png', alt: 'Partner 4' },
        { id: 5, img: '/Images/logo_5.png', alt: 'Partner 5' },
        { id: 6, img: '/Images/logo_6.png', alt: 'Partner 6' },
        { id: 7, img: '/Images/logo_7.png', alt: 'Partner 7' },
        { id: 8, img: '/Images/logo_8.png', alt: 'Partner 8' },
    ];
    const visibleSponsors = allSponsors.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

    return (
        <section id="about" className={`section ${styles.section}`}>
            <div className="container">
                <ScrollAnimation>
                    <SectionHeading title="Über uns" subtitle="Tradition & Vertrauen" />
                    <div className={styles.grid}>
                        <div className={styles.textBlock}>
                            <p>
                                Willkommen bei Gabo Marti GmbH. Wir sind Ihr kompetenter Partner für Boote, Motoren und Unterhalt in Neuenkirch und Umgebung.
                            </p>
                            <p>
                                Seit über 40 Jahren sind wir erfolgreich im Markt unterwegs. Wir wissen, wovon wir sprechen, und sind Profis rund um Boote, Bootsmotoren und Zubehör. Als einer der grössten Verwender von Yamaha-Motoren setzen wir auf Qualität und Langlebigkeit.
                            </p>
                            <p>
                                <strong>Unsere Philosophie:</strong> Wir reparieren mit Qualität!
                            </p>
                        </div>
                        <div className={styles.imagePlaceholder}>
                            {/* Placeholder for "Vorstellung der Inhaber/Familie" image */}
                            <span style={{ color: 'var(--text-light)' }}>Bild: Die Inhaber / Werkstatt</span>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation>
                    <div style={{ marginTop: '4rem' }}>
                        <h3 className={styles.subtitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Unsere Partner & Sponsoren</h3>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            {/* Left Arrow */}
                            <button
                                onClick={handlePrev}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: '0.5rem',
                                    fontSize: '2rem',
                                    color: 'var(--primary)',
                                    opacity: 0.7,
                                    transition: 'opacity 0.2s'
                                }}
                                aria-label="Vorherige Partner"
                                onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                                onMouseOut={(e) => e.currentTarget.style.opacity = '0.7'}
                            >
                                &#10094;
                            </button>

                            {/* Grid */}
                            <div style={{
                                flex: 1,
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                gap: '2rem',
                                alignItems: 'center',
                                justifyItems: 'center'
                            }}>
                                {visibleSponsors.map((sponsor) => (
                                    <div key={sponsor.id} style={{
                                        width: '100%',
                                        height: '100px',
                                        backgroundColor: sponsor.img ? 'transparent' : 'rgba(0,0,0,0.05)',
                                        border: sponsor.img ? 'none' : '1px dashed var(--border)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '0.5rem',
                                        color: 'var(--text-light)',
                                        transition: 'all 0.3s ease',
                                        overflow: 'hidden'
                                    }}>
                                        {sponsor.img ? (
                                            <img
                                                src={sponsor.img}
                                                alt={sponsor.alt}
                                                style={{
                                                    maxWidth: '100%',
                                                    maxHeight: '100%',
                                                    objectFit: 'contain'
                                                }}
                                            />
                                        ) : (
                                            `Logo ${sponsor.id}`
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Right Arrow */}
                            <button
                                onClick={handleNext}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: '0.5rem',
                                    fontSize: '2rem',
                                    color: 'var(--primary)',
                                    opacity: 0.7,
                                    transition: 'opacity 0.2s'
                                }}
                                aria-label="Nächste Partner"
                                onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                                onMouseOut={(e) => e.currentTarget.style.opacity = '0.7'}
                            >
                                &#10095;
                            </button>
                        </div>

                        {/* Page Indicator */}
                        <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--text-light)', fontSize: '0.9rem' }}>
                            Seite {page + 1} von {totalPages}
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
