import SectionHeading from '../ui/SectionHeading';
import styles from './Gallery.module.css';

const IMAGES = [
    'Werkstatt Innenansicht',
    'Boot auf dem See',
    'Team bei der Arbeit',
    'Winterlager Halle',
    'Polierarbeiten',
    'Unser Steg'
];

export default function Gallery() {
    return (
        <section id="gallery" className={`section ${styles.section}`}>
            <div className="container">
                <SectionHeading title="Impressionen" subtitle="Einblick in unsere Arbeit" />

                <div className={styles.grid}>
                    {IMAGES.map((caption, index) => (
                        <div key={index} className={styles.item}>
                            {/* Placeholder image logic */}
                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#CBD5E1', color: '#64748B' }}>
                                <span style={{ fontWeight: 500 }}>Bild: {caption}</span>
                            </div>
                            <div className={styles.caption}>{caption}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
