import { Wrench, Anchor, Warehouse, Truck, ClipboardCheck, Radar } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import styles from './Services.module.css';

const SERVICES = [
    {
        icon: <Wrench size={24} />,
        title: 'Bootservice & Unterhalt',
        text: 'Fachgerechte Wartung für langanhaltende Freude. Wir kümmern uns um Antifouling, Polieren und GFK-Reparaturen.'
    },
    {
        icon: <Anchor size={24} />,
        title: 'Motoren & Yamaha',
        text: 'Spezialisten für Yamaha-Motoren sowie Service für alle gängigen Marken (Benzin & Elektro).'
    },
    {
        icon: <Radar size={24} />,
        title: 'Echolote & Navigation',
        text: 'Beratung, Verkauf und Einbau von Echoloten und Marine-Elektronik für Fischer und Freizeitkapitäne.'
    },
    {
        icon: <Warehouse size={24} />,
        title: 'Winterlager',
        text: 'Sicherer und trockener Platz für Ihr Boot in der kalten Jahreszeit. Inklusive Einwintern und Auswintern.'
    },
    {
        icon: <Truck size={24} />,
        title: 'Transport & Logistik',
        text: 'Professionelle Ein- und Auswasserung sowie Transport Ihres Bootes an den gewünschten Ort.'
    },
    {
        icon: <ClipboardCheck size={24} />,
        title: 'Sicherheits-Check',
        text: 'Wir prüfen Ihr Boot auf Herz und Nieren, damit Sie die Zeit auf dem See sorgenfrei geniessen können.'
    }
];

export default function Services() {
    return (
        <section id="services" className={`section ${styles.section}`}>
            <div className="container">
                <SectionHeading title="Unsere Leistungen" subtitle="Qualität seit über 40 Jahren" />

                <div className={styles.grid}>
                    {SERVICES.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>{service.icon}</div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardText}>{service.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
