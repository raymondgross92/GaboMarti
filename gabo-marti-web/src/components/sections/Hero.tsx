import Button from '../ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>Boote & Motoren</h1>
                <p className={styles.subtitle}>
                    Ihr Partner für Ihr Boot. Wir rufen Sie gerne zurück!
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Button href="#contact" variant="primary">Kontakt aufnehmen</Button>
                    <Button href="#products" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                        Angebote ansehen
                    </Button>
                </div>
            </div>
        </section>
    );
}
