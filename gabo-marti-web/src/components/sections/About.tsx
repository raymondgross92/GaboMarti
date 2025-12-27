import SectionHeading from '../ui/SectionHeading';
import ScrollAnimation from '../ui/ScrollAnimation';
import styles from './About.module.css';

export default function About() {
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
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                            gap: '2rem',
                            alignItems: 'center',
                            justifyItems: 'center'
                        }}>
                            {/* Placeholders for 4 logos */}
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} style={{
                                    width: '100%',
                                    height: '100px',
                                    backgroundColor: 'rgba(0,0,0,0.05)',
                                    border: '1px dashed var(--border)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '0.5rem',
                                    color: 'var(--text-light)'
                                }}>
                                    Logo {i}
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
