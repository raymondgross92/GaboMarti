import { Wrench, Anchor, Warehouse, Truck, ClipboardCheck, Radar, Users } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollAnimation from '../ui/ScrollAnimation';
import styles from './Services.module.css';

const SERVICES = [
    {
        icon: <Wrench size={24} />,
        title: 'Bootservice & Unterhalt',
        text: 'Ihr Boot in besten Händen – ob Wartung, Pflege oder Reparatur. Wir bieten professionellen Service, Antifouling, GFK-Arbeiten und technische Instandsetzungen.'
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
    },
    {
        icon: <Users size={24} />,
        title: 'Persönliche Beratung',
        text: 'Wir nehmen uns Zeit für Sie. Egal ob Neukauf oder Reparatur – wir beraten Sie kompetent, ehrlich und individuell.'
    }
];

export default function Services({ hideHeading = false }: { hideHeading?: boolean }) {
    return (
        <section id="services" className={`section ${styles.section}`}>
            <div className="container">
                <ScrollAnimation>
                    {!hideHeading && <SectionHeading title="Unsere Leistungen" subtitle="Qualität seit über 40 Jahren" />}

                    <div className={styles.grid}>
                        {SERVICES.map((service, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.iconWrapper}>{service.icon}</div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardText}>{service.text}</p>
                            </div>
                        ))}
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
